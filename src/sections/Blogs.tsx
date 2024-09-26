import { redirect } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import { BlogPost } from "@/types/blogPost";
import axios from "axios";

export const Blogs = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

  if (!baseUrl) {
    return null;
  }

  const endpoint = `${baseUrl}/api/blogs?populate=*&filters[isFeatured][$eq]=true`;
  const token = process.env.CMS_API_TOKEN;

  let blogs: BlogPost[] = [];

  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
              thumbnail={`${post.attributes.thumbnail.data.attributes.url}`}
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
