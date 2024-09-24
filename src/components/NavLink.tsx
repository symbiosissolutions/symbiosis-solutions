"use client";

import { motion } from "framer-motion";

export interface NavLinkProps {
  title: string;
  href: string;
}

export const navLinks: NavLinkProps[] = [
  { title: "About Us", href: "/#about-us" },
  { title: "Services", href: "/#services" },
  { title: "Products", href: "/#products" },
  { title: "Blog", href: "/#blog" },
  { title: "Contact Us", href: "/#contact-us" },
];

export const NavLink = ({ title, href }: NavLinkProps) => (
  <motion.a
    href={href}
    className={`${
      title === "Contact Us" ? "header-btn" : "header-links"
    } relative`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {title}
    {title !== "Contact Us" && (
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-[#009C9C]"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    )}
  </motion.a>
);

