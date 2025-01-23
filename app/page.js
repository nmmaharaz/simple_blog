import Link from "next/link";
import allBlogs from "./lib/allBlogs";

export default async function Home() {
  const blogs = await allBlogs();
  return (
    <div className="w-10/12 mx-auto">
      <ul className="mt-6">
        {blogs.map((blog, index) => (
          <ul key={blog.id}>
            <li className="text-blue-500 hover:underline">
              <Link href={`/blog/${blog.id}`}>
                {index + 1} {blog.title}
              </Link>
            </li>
          </ul>
        ))}
      </ul>
    </div>
  );
}
