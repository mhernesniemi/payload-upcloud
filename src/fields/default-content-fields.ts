import {
  contactsBlock,
  ctaBlock,
  largeFeaturedPostBlock,
  linkListBlock,
  mediaBlock,
  quoteBlock,
  smallFeaturedPostsWrapperBlock,
  videoEmbedBlock,
} from "@/blocks";
import { AIRichTextFeature } from "@/features/lexical/ai-richtext-feature";
import { BlocksFeature, HeadingFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Field } from "payload";
import { slugField } from "./slug";

export const defaultContentFields: Field[] = [
  {
    name: "title",
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
          path: "@/components/admin-ui/AIAssistant",
          clientProps: {
            appliedTo: "title",
          },
        },
      },
    },
  },
  {
    name: "description",
    type: "textarea",
    localized: true,
  },
  {
    name: "descriptionAIAssistant",
    type: "ui",
    admin: {
      components: {
        Field: {
          path: "@/components/admin-ui/AIAssistant",
          clientProps: {
            appliedTo: "description",
          },
        },
      },
    },
  },
  {
    name: "image",
    type: "upload",
    relationTo: "media",
    localized: true,
  },
  {
    name: "content",
    type: "richText",
    localized: true,
    editor: lexicalEditor({
      features: ({ defaultFeatures }) => {
        return [
          ...defaultFeatures,
          HeadingFeature({
            enabledHeadingSizes: ["h2", "h3"],
          }),
          AIRichTextFeature(),
          BlocksFeature({
            blocks: [
              mediaBlock,
              largeFeaturedPostBlock,
              smallFeaturedPostsWrapperBlock,
              ctaBlock,
              linkListBlock,
              contactsBlock,
              videoEmbedBlock,
              quoteBlock,
            ],
          }),
        ];
      },
    }),
  },
  ...slugField(),
  {
    name: "createdBy",
    type: "relationship",
    relationTo: "users",
    admin: {
      position: "sidebar",
      readOnly: true,
      hidden: true,
    },
    hooks: {
      beforeChange: [
        ({ req, operation, value }) => {
          if (!value && operation === "create" && req.user) {
            return req.user.id;
          }
          return value;
        },
      ],
    },
  },
  {
    name: "sticky",
    type: "checkbox",
    admin: {
      position: "sidebar",
      description: "If checked, the post is displayed at the top of lists",
    },
  },
];
