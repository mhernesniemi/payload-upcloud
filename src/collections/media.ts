import type { CollectionConfig } from "payload";
import { generateImageAltText } from "@/components/admin-ui/AltTextGenerator/actions";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  hooks: {
    afterOperation: [
      async ({ operation, result, req }) => {
        if (operation === "create") {
          try {
            const altText = await generateImageAltText(result.id);

            if (altText) {
              await req.payload.update({
                collection: "media",
                id: result.id,
                data: {
                  alt: altText,
                },
              });
            }
          } catch (error) {
            console.error("Error generating alt text:", error);
          }
        }
        return result;
      },
    ],
  },
  admin: {
    group: "Misc",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      localized: true,
      admin: {
        description: "If empty, the alt text will be generated by AI",
      },
    },
    {
      name: "altTextGenerator",
      type: "ui",
      admin: {
        components: {
          Field: {
            path: "@/components/admin-ui/AltTextGenerator",
            clientProps: {
              path: "alt",
            },
          },
        },
      },
    },
  ],
  upload: true,
};
