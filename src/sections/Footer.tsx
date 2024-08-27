"use client";

import { motion } from "framer-motion";

import logo from "@/assets/symbiosis-logo.png";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialFacebook from "@/assets/social-facebook.svg";
import SocialInsta from "@/assets/social-insta.svg";

import { NavLink, navLinks } from "@/components/NavLink";

import Image from "next/image";
import Link from "next/link";

import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { BsSendCheck } from "react-icons/bs";

interface INewsletterFormData {
  email: string;
}

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
  const [submitted, setSubmitted] = useState(false);

  const currentYear = new Date().getFullYear();
  const footerLinks = navLinks.filter((link) => link.title !== "Contact Us");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewsletterFormData>();

  const onSubmit: SubmitHandler<INewsletterFormData> = async (data) => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error("Error submitting email:", errorData.message);
      }
    } catch (error: any) {
      console.error("Error submitting email:", error.message);
    }
  };

  return (
    <footer className="text-gray-700 text-sm py-10 pt-16">
      <div className="container mx-auto">
        {submitted ? (
          <div className="text-center mb-8">
            <h2 className="font-bold text-2xl tracking-tighter sm:text-3xl mb-4 text-[#009C9C]">
              Thank you for subscribing!
            </h2>
            <p className="text-gray-600">
              You have successfully subscribed to our newsletter.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center mb-8">
            <h2 className="font-bold text-2xl tracking-tighter sm:text-3xl mb-4 sm:text-center">
              Subscribe to our Newsletter
            </h2>
            <form
              className="flex flex-col sm:flex-row sm:items-center gap-2.5 max-w-md w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className={`h-12 bg-white/90 rounded-l-lg sm:rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] flex-1 focus:outline-none focus:ring-2 ${
                  errors.email ? "focus:ring-red-500" : "focus:ring-[#9CA3AF]"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
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
        )}

        <div className="flex flex-col md:flex-row md:justify-center items-center mb-8 gap-5">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <Image src={logo} height={40} alt="Symbiosis Solutions Logo" />
            </Link>
          </div>
          <nav className="flex flex-col items-center md:flex-row md:justify-center gap-6">
            {footerLinks.map((link, index) => (
              <NavLink key={index} {...link} />
            ))}
          </nav>
        </div>

        <div className="flex justify-center items-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/company/symbiosis-solution/"
            target="_blank"
            className="header-links social-icon hover:text-[#0A66C2]"
          >
            <SocialLinkedin />
          </a>
          <a
            href="https://www.facebook.com/symbiosis.sol"
            target="_blank"
            className="header-links social-icon hover:text-[#1877F2]"
          >
            <SocialFacebook />
          </a>
          <a
            href="https://www.instagram.com/symbiosis.sol"
            target="_blank"
            className="header-links social-icon hover:text-[#ed4d6f]"
          >
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
