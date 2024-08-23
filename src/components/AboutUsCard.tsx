"use client";

import { motion } from "framer-motion";

interface AboutUsCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  alt: string;
  reverse?: boolean;
}

const cardVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const AboutUsCard: React.FC<AboutUsCardProps> = ({
  imageSrc,
  title,
  description,
  link,
  alt,
  reverse = false,
}) => {
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center mb-4 p-6 rounded-lg`}
      whileHover="hover"
      variants={cardVariants}
    >
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-semibold mb-4 text-black">{title}</h2>
        <p className="mb-4 text-black">{description}</p>
        {/* <a
          href={link}
          className="text-blue-400 hover:underline flex items-center gap-2"
        >
          Learn More
        </a> */}
      </div>
      <div className="md:w-1/2 p-4">
        <img src={imageSrc} alt={alt} className="object-cover w-full h-full" />
      </div>
    </motion.div>
  );
};

export default AboutUsCard;
