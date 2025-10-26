import Link from "next/link";
import blogs from "@/data/blogs.json";

export default function BlogsPage() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Our Blogs</h1>
      <ul className="space-y-6">
        {blogs.map((blog) => (
          <li key={blog.slug} className="border-b pb-4">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.summary}</p>
            <Link
              href={`/blogs/${blog.slug}`}
              className="text-blue-600 hover:underline"
            >
              Read More →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
