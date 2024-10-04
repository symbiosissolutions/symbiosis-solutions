import axios from "axios";

import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { BsArrowLeft } from "react-icons/bs";

import Markdown from "markdown-to-jsx";
import ShareButtons from "@/components/ShareButtons";

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
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
  const token = process.env.CMS_API_TOKEN;

  if (!baseUrl) {
    return null;
  }

  const endpoint = `${baseUrl}/api/blogs?filters[slug][$eq]=${slug}&populate=*`;
  try {
    const res = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.data && res.data.data.length > 0) {
      return res.data.data[0];
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

  const thumbnailUrl = `${post.attributes.thumbnail.data.attributes.url}`;

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
        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-200 overflow-hidden rounded-lg">
          <Image
            src={thumbnailUrl}
            alt={post.attributes.title}
            fill
            priority
            className="object-cover rounded-lg"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold mt-8 mb-4 leading-tight text-gray-900">
          {post.attributes.title}
        </h1>

        <div className="text-sm font-semibold mb-4 text-[#009C9C]">
          <time dateTime={post.attributes.publishedAt}>{formattedDate}</time>
        </div>
        <div className="mb-6">
          <ShareButtons title={post.attributes.title} />
        </div>

        <div className="prose prose-lg prose-custom text-gray-800 lg:prose-xl">
          <Markdown>{post.attributes.content}</Markdown>
        </div>
      </article>
    </div>
  );
}
