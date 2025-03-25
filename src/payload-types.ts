/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    media: Media;
    articles: Article;
    'collection-pages': CollectionPage;
    news: News;
    categories: Category;
    contacts: Contact;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    articles: ArticlesSelect<false> | ArticlesSelect<true>;
    'collection-pages': CollectionPagesSelect<false> | CollectionPagesSelect<true>;
    news: NewsSelect<false> | NewsSelect<true>;
    categories: CategoriesSelect<false> | CategoriesSelect<true>;
    contacts: ContactsSelect<false> | ContactsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    'front-page': FrontPage;
    'main-menu': MainMenu;
    'footer-menu': FooterMenu;
    footer: Footer;
  };
  globalsSelect: {
    'front-page': FrontPageSelect<false> | FrontPageSelect<true>;
    'main-menu': MainMenuSelect<false> | MainMenuSelect<true>;
    'footer-menu': FooterMenuSelect<false> | FooterMenuSelect<true>;
    footer: FooterSelect<false> | FooterSelect<true>;
  };
  locale: 'fi' | 'en';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  role: 'admin' | 'editor' | 'user';
  googleId?: string | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  /**
   * If empty, the alt text will be generated by AI when the image is created
   */
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    tiny?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    medium?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    large?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "articles".
 */
export interface Article {
  id: number;
  title: string;
  description?: string | null;
  image?: (number | null) | Media;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  /**
   * The slug is automatically generated from the title if empty
   */
  slug: string;
  createdBy?: (number | null) | User;
  /**
   * If checked, the post is displayed at the top of lists
   */
  sticky?: boolean | null;
  author?: (number | null) | Contact;
  categories?: (number | Category)[] | null;
  publishedDate?: string | null;
  collection?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (number | null) | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contacts".
 */
export interface Contact {
  id: number;
  name: string;
  title?: string | null;
  email: string;
  phone?: string | null;
  image?: (number | null) | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: number;
  label: string;
  /**
   * The slug is automatically generated from the label if empty
   */
  slug: string;
  parent?: (number | null) | Category;
  breadcrumbs?:
    | {
        doc?: (number | null) | Category;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "collection-pages".
 */
export interface CollectionPage {
  id: number;
  title: string;
  description?: string | null;
  image?: (number | null) | Media;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  /**
   * The slug is automatically generated from the title if empty
   */
  slug: string;
  createdBy?: (number | null) | User;
  /**
   * If checked, the post is displayed at the top of lists
   */
  sticky?: boolean | null;
  collection?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news".
 */
export interface News {
  id: number;
  title: string;
  description?: string | null;
  image?: (number | null) | Media;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  /**
   * The slug is automatically generated from the title if empty
   */
  slug: string;
  createdBy?: (number | null) | User;
  /**
   * If checked, the post is displayed at the top of lists
   */
  sticky?: boolean | null;
  collection?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (number | null) | Media;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'articles';
        value: number | Article;
      } | null)
    | ({
        relationTo: 'collection-pages';
        value: number | CollectionPage;
      } | null)
    | ({
        relationTo: 'news';
        value: number | News;
      } | null)
    | ({
        relationTo: 'categories';
        value: number | Category;
      } | null)
    | ({
        relationTo: 'contacts';
        value: number | Contact;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  role?: T;
  googleId?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        tiny?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        medium?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        large?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "articles_select".
 */
export interface ArticlesSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  image?: T;
  content?: T;
  slug?: T;
  createdBy?: T;
  sticky?: T;
  author?: T;
  categories?: T;
  publishedDate?: T;
  collection?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "collection-pages_select".
 */
export interface CollectionPagesSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  image?: T;
  content?: T;
  slug?: T;
  createdBy?: T;
  sticky?: T;
  collection?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news_select".
 */
export interface NewsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  image?: T;
  content?: T;
  slug?: T;
  createdBy?: T;
  sticky?: T;
  collection?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories_select".
 */
export interface CategoriesSelect<T extends boolean = true> {
  label?: T;
  slug?: T;
  parent?: T;
  breadcrumbs?:
    | T
    | {
        doc?: T;
        url?: T;
        label?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contacts_select".
 */
export interface ContactsSelect<T extends boolean = true> {
  name?: T;
  title?: T;
  email?: T;
  phone?: T;
  image?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "front-page".
 */
export interface FrontPage {
  id: number;
  hero?: HeroBlock[] | null;
  content?:
    | (
        | CTABlock
        | LargeFeaturedPostBlock
        | SmallFeaturedPostsWrapperBlock
        | LinkListBlock
        | ContactsBlock
        | VideoEmbedBlock
        | MediaBlock
        | QuoteBlock
        | DynamicListBlock
      )[]
    | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (number | null) | Media;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlock".
 */
export interface HeroBlock {
  blockType: 'hero';
  title: string;
  description: string;
  image: number | Media;
  link?: {
    label?: string | null;
    isExternal?: boolean | null;
    internalUrl?:
      | ({
          relationTo: 'articles';
          value: number | Article;
        } | null)
      | ({
          relationTo: 'collection-pages';
          value: number | CollectionPage;
        } | null)
      | ({
          relationTo: 'news';
          value: number | News;
        } | null);
    externalUrl?: string | null;
  };
  id?: string | null;
  blockName?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CTABlock".
 */
export interface CTABlock {
  title: string;
  text?: string | null;
  link?: {
    label?: string | null;
    isExternal?: boolean | null;
    internalUrl?:
      | ({
          relationTo: 'articles';
          value: number | Article;
        } | null)
      | ({
          relationTo: 'collection-pages';
          value: number | CollectionPage;
        } | null)
      | ({
          relationTo: 'news';
          value: number | News;
        } | null);
    externalUrl?: string | null;
  };
  id?: string | null;
  blockName?: string | null;
  blockType: 'cta';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LargeFeaturedPostBlock".
 */
export interface LargeFeaturedPostBlock {
  title: string;
  text?: string | null;
  image?: (number | null) | Media;
  link?: {
    label?: string | null;
    isExternal?: boolean | null;
    internalUrl?:
      | ({
          relationTo: 'articles';
          value: number | Article;
        } | null)
      | ({
          relationTo: 'collection-pages';
          value: number | CollectionPage;
        } | null)
      | ({
          relationTo: 'news';
          value: number | News;
        } | null);
    externalUrl?: string | null;
  };
  id?: string | null;
  blockName?: string | null;
  blockType: 'largeFeaturedPost';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SmallFeaturedPostsWrapperBlock".
 */
export interface SmallFeaturedPostsWrapperBlock {
  posts: {
    title: string;
    text?: string | null;
    image: number | Media;
    link?: {
      isExternal?: boolean | null;
      internalUrl?:
        | ({
            relationTo: 'articles';
            value: number | Article;
          } | null)
        | ({
            relationTo: 'collection-pages';
            value: number | CollectionPage;
          } | null)
        | ({
            relationTo: 'news';
            value: number | News;
          } | null);
      externalUrl?: string | null;
    };
    id?: string | null;
    blockName?: string | null;
    blockType: 'smallFeaturedPost';
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'smallFeaturedPostsWrapper';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LinkListBlock".
 */
export interface LinkListBlock {
  links?:
    | {
        label?: string | null;
        isExternal?: boolean | null;
        internalUrl?:
          | ({
              relationTo: 'articles';
              value: number | Article;
            } | null)
          | ({
              relationTo: 'collection-pages';
              value: number | CollectionPage;
            } | null)
          | ({
              relationTo: 'news';
              value: number | News;
            } | null);
        externalUrl?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'linkList';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContactsBlock".
 */
export interface ContactsBlock {
  contacts: (number | Contact)[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'contacts';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "VideoEmbedBlock".
 */
export interface VideoEmbedBlock {
  youtubeId: string;
  alt?: string | null;
  /**
   * This will be displayed as a caption for the video
   */
  description?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'videoEmbed';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MediaBlock".
 */
export interface MediaBlock {
  media: number | Media;
  caption?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'media';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "QuoteBlock".
 */
export interface QuoteBlock {
  quote: string;
  author?: string | null;
  /**
   * Author's title or role
   */
  title?: string | null;
  /**
   * Author's image
   */
  image?: (number | null) | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'quote';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "DynamicListBlock".
 */
export interface DynamicListBlock {
  collections: ('articles' | 'news' | 'collection-pages' | 'contacts')[];
  language: 'fi' | 'en';
  sortBy: 'createdAt' | 'updatedAt' | 'publishedDate';
  sortOrder: 'asc' | 'desc';
  limit: number;
  items?:
    | {
        reference:
          | {
              relationTo: 'articles';
              value: number | Article;
            }
          | {
              relationTo: 'news';
              value: number | News;
            }
          | {
              relationTo: 'collection-pages';
              value: number | CollectionPage;
            };
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'dynamicList';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "main-menu".
 */
export interface MainMenu {
  id: number;
  items: {
    label: string;
    addLinks?: boolean | null;
    link?: {
      isExternal?: boolean | null;
      internalUrl?:
        | ({
            relationTo: 'articles';
            value: number | Article;
          } | null)
        | ({
            relationTo: 'collection-pages';
            value: number | CollectionPage;
          } | null)
        | ({
            relationTo: 'news';
            value: number | News;
          } | null);
      externalUrl?: string | null;
    };
    children?:
      | {
          label: string;
          addLinks?: boolean | null;
          link?: {
            isExternal?: boolean | null;
            internalUrl?:
              | ({
                  relationTo: 'articles';
                  value: number | Article;
                } | null)
              | ({
                  relationTo: 'collection-pages';
                  value: number | CollectionPage;
                } | null)
              | ({
                  relationTo: 'news';
                  value: number | News;
                } | null);
            externalUrl?: string | null;
          };
          grandchildren?:
            | {
                label: string;
                link?: {
                  isExternal?: boolean | null;
                  internalUrl?:
                    | ({
                        relationTo: 'articles';
                        value: number | Article;
                      } | null)
                    | ({
                        relationTo: 'collection-pages';
                        value: number | CollectionPage;
                      } | null)
                    | ({
                        relationTo: 'news';
                        value: number | News;
                      } | null);
                  externalUrl?: string | null;
                };
                id?: string | null;
              }[]
            | null;
          id?: string | null;
        }[]
      | null;
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer-menu".
 */
export interface FooterMenu {
  id: number;
  items: {
    label: string;
    children?:
      | {
          link?: {
            label?: string | null;
            isExternal?: boolean | null;
            internalUrl?:
              | ({
                  relationTo: 'articles';
                  value: number | Article;
                } | null)
              | ({
                  relationTo: 'collection-pages';
                  value: number | CollectionPage;
                } | null)
              | ({
                  relationTo: 'news';
                  value: number | News;
                } | null);
            externalUrl?: string | null;
          };
          id?: string | null;
        }[]
      | null;
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: number;
  general?: {
    title?: string | null;
    description?: string | null;
    social?: {
      /**
       * Link URL
       */
      facebook?: string | null;
      /**
       * Link URL
       */
      instagram?: string | null;
      /**
       * Link URL
       */
      linkedin?: string | null;
      /**
       * Link URL
       */
      youtube?: string | null;
    };
  };
  contact?: {
    title?: string | null;
    address?: string | null;
    postalCode?: string | null;
    city?: string | null;
    phone?: string | null;
    email?: string | null;
  };
  copyright?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "front-page_select".
 */
export interface FrontPageSelect<T extends boolean = true> {
  hero?:
    | T
    | {
        hero?: T | HeroBlockSelect<T>;
      };
  content?:
    | T
    | {
        cta?: T | CTABlockSelect<T>;
        largeFeaturedPost?: T | LargeFeaturedPostBlockSelect<T>;
        smallFeaturedPostsWrapper?: T | SmallFeaturedPostsWrapperBlockSelect<T>;
        linkList?: T | LinkListBlockSelect<T>;
        contacts?: T | ContactsBlockSelect<T>;
        videoEmbed?: T | VideoEmbedBlockSelect<T>;
        media?: T | MediaBlockSelect<T>;
        quote?: T | QuoteBlockSelect<T>;
        dynamicList?: T | DynamicListBlockSelect<T>;
      };
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlock_select".
 */
export interface HeroBlockSelect<T extends boolean = true> {
  blockType?: T;
  title?: T;
  description?: T;
  image?: T;
  link?:
    | T
    | {
        label?: T;
        isExternal?: T;
        internalUrl?: T;
        externalUrl?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CTABlock_select".
 */
export interface CTABlockSelect<T extends boolean = true> {
  title?: T;
  text?: T;
  link?:
    | T
    | {
        label?: T;
        isExternal?: T;
        internalUrl?: T;
        externalUrl?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LargeFeaturedPostBlock_select".
 */
export interface LargeFeaturedPostBlockSelect<T extends boolean = true> {
  title?: T;
  text?: T;
  image?: T;
  link?:
    | T
    | {
        label?: T;
        isExternal?: T;
        internalUrl?: T;
        externalUrl?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SmallFeaturedPostsWrapperBlock_select".
 */
export interface SmallFeaturedPostsWrapperBlockSelect<T extends boolean = true> {
  posts?:
    | T
    | {
        smallFeaturedPost?:
          | T
          | {
              title?: T;
              text?: T;
              image?: T;
              link?:
                | T
                | {
                    isExternal?: T;
                    internalUrl?: T;
                    externalUrl?: T;
                  };
              id?: T;
              blockName?: T;
            };
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LinkListBlock_select".
 */
export interface LinkListBlockSelect<T extends boolean = true> {
  links?:
    | T
    | {
        label?: T;
        isExternal?: T;
        internalUrl?: T;
        externalUrl?: T;
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContactsBlock_select".
 */
export interface ContactsBlockSelect<T extends boolean = true> {
  contacts?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "VideoEmbedBlock_select".
 */
export interface VideoEmbedBlockSelect<T extends boolean = true> {
  youtubeId?: T;
  alt?: T;
  description?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MediaBlock_select".
 */
export interface MediaBlockSelect<T extends boolean = true> {
  media?: T;
  caption?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "QuoteBlock_select".
 */
export interface QuoteBlockSelect<T extends boolean = true> {
  quote?: T;
  author?: T;
  title?: T;
  image?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "DynamicListBlock_select".
 */
export interface DynamicListBlockSelect<T extends boolean = true> {
  collections?: T;
  language?: T;
  sortBy?: T;
  sortOrder?: T;
  limit?: T;
  items?:
    | T
    | {
        reference?: T;
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "main-menu_select".
 */
export interface MainMenuSelect<T extends boolean = true> {
  items?:
    | T
    | {
        label?: T;
        addLinks?: T;
        link?:
          | T
          | {
              isExternal?: T;
              internalUrl?: T;
              externalUrl?: T;
            };
        children?:
          | T
          | {
              label?: T;
              addLinks?: T;
              link?:
                | T
                | {
                    isExternal?: T;
                    internalUrl?: T;
                    externalUrl?: T;
                  };
              grandchildren?:
                | T
                | {
                    label?: T;
                    link?:
                      | T
                      | {
                          isExternal?: T;
                          internalUrl?: T;
                          externalUrl?: T;
                        };
                    id?: T;
                  };
              id?: T;
            };
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer-menu_select".
 */
export interface FooterMenuSelect<T extends boolean = true> {
  items?:
    | T
    | {
        label?: T;
        children?:
          | T
          | {
              link?:
                | T
                | {
                    label?: T;
                    isExternal?: T;
                    internalUrl?: T;
                    externalUrl?: T;
                  };
              id?: T;
            };
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer_select".
 */
export interface FooterSelect<T extends boolean = true> {
  general?:
    | T
    | {
        title?: T;
        description?: T;
        social?:
          | T
          | {
              facebook?: T;
              instagram?: T;
              linkedin?: T;
              youtube?: T;
            };
      };
  contact?:
    | T
    | {
        title?: T;
        address?: T;
        postalCode?: T;
        city?: T;
        phone?: T;
        email?: T;
      };
  copyright?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}