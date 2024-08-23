"use client";

import { posts } from "@/data/blogPosts";

interface BlogDetailsProps {
  params: {
    slug: string;
  };
}

const BlogDetails = ({ params }: BlogDetailsProps) => {
    const { slug } = params;
    const post = posts.find(post => post.link === slug) || null;

  if (!post) return <div>Blog post not found</div>;

  return (
    <article className="container mx-auto px-4 py-16">
      <div className="relative w-full h-64 md:h-80 bg-gray-200 overflow-hidden">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold mt-6 mb-4">{post.title}</h1>
      <span className="block text-sm font-semibold uppercase tracking-wide text-[#009C9C] mb-4">
        {post.date}
      </span>
      <p className="text-gray-700 mb-8">{post.description}</p>
      <div className="prose lg:prose-xl">
        <p>{post.content}</p>
      </div>
    </article>
  );
};

export default BlogDetails;
