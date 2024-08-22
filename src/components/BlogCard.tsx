"use client";

import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  date,
  thumbnail,
  link,
}) => {
  return (
    <a
      href={`/blog/${link}`}
      className="group flex w-full rounded-lg overflow-hidden shadow-lg transform transition-all duration-300"
    >
      <div className="relative w-1/2 h-64 md:h-80 bg-gray-200 overflow-hidden">
        <motion.img
          src={thumbnail}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="w-1/2 p-6 md:p-8 bg-white">
        <span className="block text-xs font-semibold uppercase tracking-wide text-blue-500 mb-2">
          {date}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-gray-600 line-clamp-3 mb-6">{description}</p>
        <button className="inline-block py-2 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-800 transition-colors duration-300">
          Read More
        </button>
      </div>
    </a>
  );
};

export default BlogCard;
