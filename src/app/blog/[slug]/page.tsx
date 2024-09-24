import axios from "axios";

import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { BsArrowLeft } from "react-icons/bs";

import Markdown from "markdown-to-jsx";

interface BlogDetailsProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogDetailsProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    redirect("/#blog");
  }

  const { title, description } = post.attributes;

  return {
    title: title,
    description: description,
  };
}

async function getBlogPost(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_URL;

  try {
    const res = await axios.get(`${baseUrl}/api/blog/${slug}`);

    if (res.data && res.data.attributes) {
      return res.data;
    }
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export default async function BlogDetails({ params }: BlogDetailsProps) {
  // Fetch the blog post data
  const post = await getBlogPost(params.slug);

  // If the post is not found, redirect to blog section
  if (!post) {
    redirect("/#blog");
  }

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
  const thumbnailUrl = `${backendUrl}${post.attributes.thumbnail.data.attributes.url}`;

  const formattedDate = new Date(
    post.attributes.publishedAt
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container mx-auto px-4 py-5 lg:px-0">
      <Link
        href="/#blog"
        className="inline-flex items-center text-[#009C9C] hover:text-[#007a7a] mb-6"
      >
        <BsArrowLeft className="mr-2 h-4 w-4 mx-auto" />
        Back to Blog
      </Link>

      <article className="max-w-4xl mx-auto">
        <div className="relative w-full h-80 md:h-96 bg-gray-200 overflow-hidden rounded-lg">
          <Image
            src={thumbnailUrl}
            alt={post.attributes.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <h1 className="text-5xl font-extrabold mt-8 mb-4 leading-tight text-gray-900">
          {post.attributes.title}
        </h1>
        <div className="text-sm font-semibold mb-4 text-[#009C9C]">
          <span>{formattedDate}</span>
        </div>

        <div className="prose prose-lg prose-custom text-gray-800 lg:prose-xl">
          <Markdown>{post.attributes.content}</Markdown>
        </div>
      </article>
    </div>
  );
}