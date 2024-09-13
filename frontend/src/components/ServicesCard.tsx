"use client";

import { motion } from "framer-motion";

interface ServicesCardProps {
  title: string;
  description: string;
  link: string;
  backgroundImage: string;
  // buttonText: string; // Text for the button
  // buttonColor: string; // Button background color
  // buttonHoverColor: string; // Button hover color
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  description,
  link,
  backgroundImage,
  // buttonText,
  // buttonColor,
  // buttonHoverColor,
}) => {
  return (
    <motion.div
      className="relative w-full h-full flex flex-col justify-end p-4 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10">
        <h2 className="text-xl font-semibold mb-4 text-shadow">{title}</h2>
        <p className="mb-4 text-shadow">{description}</p>
        {/* <button
          onClick={() => window.location.href = link}
          className={`inline-block py-2 px-4 rounded-lg text-white bg-[${buttonColor}] hover:bg-${buttonHoverColor} transition-colors duration-300`}
        >
          {buttonText}
        </button> */}
      </div>
    </motion.div>
  );
};

export default ServicesCard;
