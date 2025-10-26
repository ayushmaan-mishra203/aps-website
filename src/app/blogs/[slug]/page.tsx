import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type PageProps<T extends Record<string, unknown>> = {
  params: Promise<T>;
};

// ✅ Define static paths for all markdown files
export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), "src/content/blogs");
  const files = fs.readdirSync(blogsDir);

  return files.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}

export default async function BlogPage({ params }: PageProps<{ slug: string }>) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "src/content/blogs", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { content, data } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>
      <article
        className="prose prose-lg prose-gray max-w-none leading-relaxed"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
