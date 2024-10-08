"use client";

import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  summary: string;
  date: string;
  thumbnail: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  summary,
  date,
  thumbnail,
  slug,
}) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  return (
    <a
      href={`/blog/${slug}`}
      className="group flex flex-col md:flex-row w-full rounded-lg overflow-hidden shadow-lg transform transition-all duration-300"
    >
      <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-gray-200 overflow-hidden">
        <motion.img
          src={thumbnail}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="w-full md:w-1/2 p-6 md:p-8 bg-white">
        <span className="block text-xs font-semibold uppercase tracking-wide text-[#008888] mb-2">
          {formattedDate}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-gray-600 line-clamp-3 mb-6">{summary}</p>
        <button className="inline-block py-2 px-4 rounded-lg text-white bg-[#009C9C] hover:bg-[#008888] transition-colors duration-300">
          Read More
        </button>
      </div>
    </a>
  );
};

export default BlogCard;
