import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  admin: {
    group: "Misc",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "titleAIAssistant",
      type: "ui",
      admin: {
        components: {
          Field: {
            path: "@/components/admin-ui/AltTextGenerator",
            clientProps: {
              appliedTo: "alt",
            },
          },
        },
      },
    },
  ],
  upload: true,
};
