"use client";

import { posts } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";
import { BlogPost } from "@/types/blogPost";

export const Blogs = () => {
  return (
    <section id="blog" className="container mx-auto px-4 pt-16">
      <h2 className="text-4xl font-bold tracking-tighter text-center mb-12 text-gray-700">
        Latest Insights
      </h2>
      <div className="space-y-8">
        {posts.map((post: BlogPost, index: number) => (
          <BlogCard
            key={index}
            description={post.description}
            title={post.title}
            date={post.date}
            thumbnail={post.thumbnail}
            link={post.link}
          />
        ))}
      </div>
    </section>
  );
};
