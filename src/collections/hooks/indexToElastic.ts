import {
  createIndexWithMappings,
  elasticClient,
  fetchCategoryLabels,
  getLanguageIndexName,
  richTextToPlainText,
} from "@/lib/elastic-utils";
import config from "@payload-config";
import { CollectionAfterChangeHook, CollectionAfterDeleteHook, getPayload } from "payload";

export const indexToElasticHook: CollectionAfterChangeHook = async ({
  doc,
  operation,
  collection,
  req,
}) => {
  try {
    if (operation === "create" || operation === "update") {
      // Determine document language (assuming there's a locale field in the document)
      const locale = req.locale || "fi";
      const indexName = getLanguageIndexName(locale);

      // Create index for this language if it doesn't exist
      const indexCreated = await createIndexWithMappings(indexName);
      if (!indexCreated) return doc;

      const payload = await getPayload({ config });

      // Fetch category labels
      const validCategoryLabels = doc.categories
        ? await fetchCategoryLabels(doc.categories, payload)
        : [];

      // Index document to language-specific index
      await elasticClient.index({
        index: indexName,
        id: doc.id,
        body: {
          id: doc.id,
          title: doc.title,
          content: doc.content ? richTextToPlainText(doc.content) : null,
          slug: doc.slug,
          publishedDate: doc.publishedDate,
          createdAt: doc.createdAt,
          categories: validCategoryLabels,
          collection: collection.slug,
          locale: locale,
        },
        refresh: true,
      });
      payload.logger.info(`Document ${doc.id} indexed in ${indexName}`);
    }
  } catch (error) {
    console.error(`Error in indexToElasticHook for ${doc.id}:`, error);
  }
  return doc;
};

export const removeFromElasticHook: CollectionAfterDeleteHook = async ({ doc }) => {
  const payload = await getPayload({ config });
  try {
    const locale = doc.locale || "fi";
    const indexName = getLanguageIndexName(locale);

    const exists = await elasticClient.indices.exists({ index: indexName });
    if (exists) {
      await elasticClient.delete({
        index: indexName,
        id: doc.id,
        refresh: true,
      });
      payload.logger.info(`Document ${doc.id} deleted from ${indexName}`);
    }
  } catch (error) {
    console.error(`Error in removeFromElasticHook for ${doc.id}:`, error);
  }
  return doc;
};
