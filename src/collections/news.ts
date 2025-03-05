import { defaultContentFields } from "@/fields/default-content-fields";
import { CollectionConfig } from "payload";
import { afterChangeHook, afterDeleteHook } from "./hooks/indexToElastic";

export const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
    group: "Pages",
    defaultColumns: ["title", "createdBy", "updatedAt", "createdAt"],
  },
  fields: defaultContentFields,
  hooks: {
    afterChange: [afterChangeHook],
    afterDelete: [afterDeleteHook],
  },
};
