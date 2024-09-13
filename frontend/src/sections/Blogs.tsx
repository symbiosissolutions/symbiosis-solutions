import { redirect } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import { BlogPost } from "@/types/blogPost";
import axios from "axios";

export const Blogs = async () => {
  const feBaseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_URL;
  const beBaseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

  let blogs: BlogPost[] = [];

  try {
    const response = await axios.get(`${feBaseUrl}/api/blogs`);

    blogs = response.data.data || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  if (blogs.length === 0) {
    redirect("/#blog");
  }

  return (
    <section id="blog" className="container mx-auto px-4 pt-16">
      <h2 className="text-4xl font-bold tracking-tighter text-center mb-12 text-gray-700">
        Latest Insights
      </h2>
      <div className="space-y-8">
        {blogs.length > 0 ? (
          blogs.map((post: BlogPost, index: number) => (
            <BlogCard
              key={index}
              summary={post.attributes.summary}
              title={post.attributes.title}
              date={post.attributes.publishedAt}
              thumbnail={`${beBaseUrl}${post.attributes.thumbnail.data.attributes.url}`}
              slug={post.attributes.slug}
            />
          ))
        ) : (
          <p className="text-center">
            No featured blogs available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};
