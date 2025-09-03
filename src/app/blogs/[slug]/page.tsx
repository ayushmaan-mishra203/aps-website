// app/blogs/[slug]/page.tsx

import { notFound } from "next/navigation";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ must await, since Next wraps it in a Promise

  // Fake data
  const blogPosts: Record<string, { title: string; content: string }> = {
    "first-post": {
      title: "My First Blog Post",
      content: "This is the content of the first post.",
    },
    "second-post": {
      title: "Another Blog Post",
      content: "This is the second blog post content.",
    },
  };

  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="prose mx-auto p-8">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}

export async function generateStaticParams() {
  return [{ slug: "first-post" }, { slug: "second-post" }];
}
