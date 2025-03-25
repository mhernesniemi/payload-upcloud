import Container from "@/components/Container";
import Header from "@/components/Header";
import ArticleTemplate from "@/components/templates/ArticleTemplate";
import ErrorTemplate from "@/components/templates/ErrorTemplate";
import { SITE_NAME } from "@/lib/constants";
import { getBase64, prepareOpenGraphImages } from "@/lib/utils";
import configPromise from "@payload-config";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

export const dynamic = "force-static";

type Props = {
  params: Promise<{ locale: "fi" | "en"; slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function getArticleBySlug({ params }: Props) {
  try {
    const { slug, locale } = await params;
    const isDraftMode = false; // Simplified for performance - no draft mode in static rendering

    const payload = await getPayload({
      config: configPromise,
    });

    const result = await payload.find({
      collection: "articles",
      where: {
        slug: { equals: slug },
      },
      locale: locale,
      draft: isDraftMode,
    });

    const article = result.docs[0];

    // Generate base64 placeholder for image if available
    let placeholderUrl = "";
    if (article?.image && typeof article.image === "object" && article.image.sizes?.tiny?.url) {
      placeholderUrl = await getBase64(article.image.sizes.tiny.url);
    }

    return { article, placeholderUrl, error: null };
  } catch (error) {
    console.error("Error fetching article:", error);
    return { article: null, placeholderUrl: null, error: error as Error };
  }
}

export default async function ArticlePage(props: Props) {
  const { article, placeholderUrl, error } = await getArticleBySlug(props);

  if (error) {
    console.error("Error fetching article:", error);
    return <ErrorTemplate error={error} />;
  }

  if (!article) {
    notFound();
  }

  return (
    <Container>
      <Header />
      <ArticleTemplate article={article} placeholderUrl={placeholderUrl} />
    </Container>
  );
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { article } = await getArticleBySlug(props);
  const openGraphImages = prepareOpenGraphImages(article?.meta?.image);

  return {
    title: article?.meta?.title || `${article?.title} | ${SITE_NAME}`,
    description: article?.meta?.description || article?.description,
    openGraph: openGraphImages ? { images: openGraphImages } : undefined,
  };
}
