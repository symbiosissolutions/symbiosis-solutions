"use client";

import { motion } from "framer-motion";

interface AboutUsCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
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

const AboutUsCard: React.FC<AboutUsCardProps> = ({ imageSrc, title, description, link }) => {
  return (
    <motion.div
      className="relative bg-cover bg-center rounded-lg h-96 flex flex-col justify-end p-6"
      style={{ backgroundImage: `url(${imageSrc})` }}
      whileHover="hover"
      variants={cardVariants}
    >
      <div className="p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-white">{title}</h2>
        <p className="mb-4 text-white">{description}</p>
        {/* <a
          href={link}
          className="text-blue-400 hover:underline flex items-center gap-2"
        >
          Learn More
        </a> */}
      </div>
    </motion.div>
  );
};

export default AboutUsCard;
