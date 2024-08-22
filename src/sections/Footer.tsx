"use client";

import { motion } from "framer-motion";

import logo from "@/assets/symbiosis-logo.png";
import Image from "next/image";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialFacebook from "@/assets/social-facebook.svg";
import SocialInsta from "@/assets/social-insta.svg";
import { BsSendCheck } from "react-icons/bs";
import Link from "next/link";

const airplaneVariants = {
  hover: {
    y: -4, // Move the airplane icon upwards
    x: 4, // Move the airplane icon to the right diagonally
    rotate: [0, 10, -10, 0], // Slight wobble effect
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-700 text-sm py-10 pt-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h2 className="font-bold text-2xl tracking-tighter sm:text-3xl mb-4 sm:text-center">
            Subscribe to our Newsletter
          </h2>
          <form className="flex flex-col sm:flex-row sm:items-center gap-2.5 max-w-md w-full">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
              className="h-12 bg-white/90 rounded-l-lg sm:rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] flex-1 focus:outline-none focus:ring-2 focus:ring-[#9CA3AF] focus:border-transparent"
            />
            <motion.button
              type="submit"
              className="h-12 rounded-l-none sm:rounded-lg px-5 bg-[#009C9C] hover:bg-[#008888] transition-colors duration-300 text-white flex items-center gap-1 relative"
              whileHover="hover"
            >
              Subscribe
              <motion.div
                variants={airplaneVariants}
                className="w-6 h-6 items-center justify-center hidden md:flex"
              >
                <BsSendCheck className="w-full h-full" />
              </motion.div>
            </motion.button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center items-center mb-8 gap-5">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <Image src={logo} height={40} alt="Symbiosis Solutions Logo" />
            </Link>
          </div>
          <nav className="flex flex-col md:flex-row md:justify-center gap-6">
            <a href="/#about-us" className="header-links">
              About Us
            </a>
            <a href="/#services" className="header-links">
              Services
            </a>
            <a href="/#products" className="header-links">
              Products
            </a>
            <a href="/#blog" className="header-links">
              Blog
            </a>
          </nav>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/company/symbiosis-solution/"
            target="_blank"
            className="header-links social-icon hover:text-[#0A66C2]"
          >
            <SocialLinkedin />
          </a>
          <a href="#" className="header-links social-icon hover:text-[#1877F2]">
            <SocialFacebook />
          </a>
          <a href="#" className="header-links social-icon hover:text-[#ed4d6f]">
            <SocialInsta />
          </a>
        </div>

        <p className="text-center">
          &copy; {currentYear} Symbiosis Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
