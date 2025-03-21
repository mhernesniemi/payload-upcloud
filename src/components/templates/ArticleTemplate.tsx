import { BlockRenderer, NodeTypes } from "@/components/BlockRenderer";
import { Article } from "@/payload-types";
import Image from "next/image";

interface ArticleTemplateProps {
  article: Article;
}

export default function ArticleTemplate({ article }: ArticleTemplateProps) {
  const image = article.image as { url: string; alt: string };
  return (
    <main id="main-content" className="py-16">
      {image?.url && (
        <Image
          src={image.url}
          alt={image.alt || ""}
          width={1920}
          height={1080}
          className="mb-8 h-[400px] w-full rounded-lg object-cover"
        />
      )}
      <h1 className="mb-4 text-4xl font-bold">{article.title}</h1>
      {/* <div className="mb-8 flex gap-4 text-stone-400">
        <time dateTime={article.publishedDate}>
          {new Date(article.publishedDate).toLocaleDateString("fi-FI")}
        </time>
        <span>•</span>
        <span>{typeof article.author === "object" && article.author.email}</span>
      </div> */}
      <div className="mx-auto mt-12 max-w-screen-lg">
        <BlockRenderer nodes={article.content?.root?.children as NodeTypes[]} />
      </div>
    </main>
  );
}
