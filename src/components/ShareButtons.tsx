"use client";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

import { motion } from "framer-motion";

interface ShareButtonsProps {
  title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title }) => {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_URL;

  const currentUrl = `${baseUrl}${
    typeof window !== "undefined" ? window.location.pathname : ""
  }`;

  return (
    <div className="flex space-x-2">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <FacebookShareButton url={currentUrl} title={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <TwitterShareButton url={currentUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <LinkedinShareButton url={currentUrl} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </motion.div>
    </div>
  );
};

export default ShareButtons;
