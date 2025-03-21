"use client";

import Heading from "@/components/Heading";
import SearchFilter from "@/components/SearchFilter";
import SearchPagination from "@/components/SearchPagination";
import { Link } from "@/i18n/routing";
import { ELASTIC_INDEX_NAME } from "@/lib/constants";
import { XMarkIcon } from "@heroicons/react/24/outline";
import createClient from "@searchkit/instantsearch-client";
import { useLocale, useTranslations } from "next-intl";
import {
  Configure,
  InstantSearch,
  useCurrentRefinements,
  useHits,
  useSearchBox,
  useStats,
} from "react-instantsearch";

interface Hit {
  objectID: string;
  title: string;
  slug: string;
  collection?: string;
}

const searchClient = createClient({
  url: "/api/search",
});

function SearchBox() {
  const { query, refine } = useSearchBox();
  const t = useTranslations("search");

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => refine(e.target.value)}
        placeholder={t("searchPlaceholder")}
        autoFocus
        className="w-full rounded-lg border border-stone-700 bg-stone-900 px-4 py-3 text-white placeholder-stone-400"
      />
      {query && (
        <button
          onClick={() => refine("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white"
          aria-label={t("clearSearch")}
          tabIndex={-1}
        >
          <XMarkIcon className="h-5 w-5 stroke-2" />
        </button>
      )}
    </div>
  );
}

function SearchStats() {
  const { nbHits } = useStats();
  const t = useTranslations("search");

  return (
    <div className="text-stone-400" role="status" aria-live="polite" aria-atomic="true">
      {nbHits} {nbHits === 1 ? t("result") : t("results")}
    </div>
  );
}

function CurrentRefinements() {
  const { items, refine } = useCurrentRefinements();
  const t = useTranslations("search");

  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <div key={item.label} className="flex flex-wrap gap-2">
          {item.refinements.map((refinement) => (
            <button
              key={refinement.label}
              onClick={() => refine(refinement)}
              className="flex items-center gap-2 rounded-full bg-stone-700 px-3 py-1 text-sm text-white hover:bg-stone-600"
            >
              <span>
                {t(item.label.toLowerCase())}:{" "}
                <span className="capitalize">{refinement.label}</span>
              </span>
              <XMarkIcon className="h-4 w-4" />
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

function SearchResults() {
  const { items } = useHits<Hit>();

  return (
    <ol className="space-y-4">
      {items.map((item) => (
        <li key={item.objectID} className="group relative mb-4 block rounded-lg bg-stone-800 p-4">
          <Link href={`/${item.collection}/${item.slug}`} className="inline-block">
            <Heading
              level="h2"
              size="sm"
              className="mb-0 transition-colors group-hover:text-amber-500"
            >
              {item.title}
            </Heading>
            <span className="absolute inset-x-0 inset-y-0 z-10"></span>
          </Link>
          <div className="mt-6 text-xs uppercase text-stone-400">{item.collection}</div>
        </li>
      ))}
    </ol>
  );
}

function SearchComponents() {
  const t = useTranslations("search");

  return (
    <div>
      <Heading level="h1" size="lg" className="">
        {t("search")}
      </Heading>
      <div className="flex flex-col gap-10">
        <SearchBox />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <SearchFilter attribute="categories" title={t("categories")} operator="or" />
          <SearchFilter attribute="collection" title={t("collections")} operator="or" />
        </div>
        <CurrentRefinements />

        <div className="space-y-4">
          <SearchStats />
          <div className="space-y-12">
            <SearchResults />
            <SearchPagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchTemplate() {
  const locale = useLocale();

  return (
    <main id="main-content" className="mx-auto mb-40 max-w-screen-md py-16">
      <InstantSearch
        searchClient={searchClient}
        indexName={`${ELASTIC_INDEX_NAME}_${locale}`}
        routing={{
          stateMapping: {
            // Convert UI state to URL route state
            stateToRoute(uiState) {
              const indexUiState = uiState[`${ELASTIC_INDEX_NAME}_${locale}`] || {};
              const categories = indexUiState?.refinementList?.categories || [];
              const collection = indexUiState?.refinementList?.collection || [];

              return {
                q: indexUiState?.query || undefined,
                categories: categories.length ? categories.join("-") : undefined,
                collection: collection.length ? collection.join("-") : undefined,
                page: indexUiState?.page || undefined,
              };
            },
            // Convert URL route state to UI state
            routeToState(routeState) {
              const categories = routeState.categories
                ? String(routeState.categories).split("-")
                : [];
              const collection = routeState.collection
                ? String(routeState.collection).split("-")
                : [];

              return {
                [`${ELASTIC_INDEX_NAME}_${locale}`]: {
                  query: routeState.q,
                  refinementList: {
                    categories: categories,
                    collection: collection,
                  },
                  page: routeState.page,
                },
              };
            },
          },
        }}
      >
        <Configure hitsPerPage={20} />
        <SearchComponents />
      </InstantSearch>
    </main>
  );
}
