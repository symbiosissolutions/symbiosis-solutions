"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/symbiosis-logo.png";
import MenuIcon from "@/assets/menu-icon.svg";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { MdClose } from "react-icons/md";
import { NavLink, NavLinkProps, navLinks } from "@/components/NavLink";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const controls = useAnimation();

  // Effect to lock or unlock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const toggleMenu = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
    controls.start(open ? "closed" : "open");
  }, [open, controls]);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const iconVars = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  const MobileNavLink = ({
    title,
    href,
    onClick,
  }: NavLinkProps & { onClick: () => void }) => (
    <motion.div
      variants={mobileLinkVars}
      className="text-2xl font-light"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <a href={href} onClick={onClick}>
        {title}
      </a>
    </motion.div>
  );

  return (
    <header className="sticky top-0 bg-white z-50 backdrop-blur-sm shadow-md h-16">
      <div className="container px-4 md:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          {/* Company Logo */}
          <Image
            src={Logo}
            alt="Symbiosis Solutions Logo"
            height={40}
            width={40}
            priority
          />
          <h1 className="text-xl font-semibold text-[#009C9C] hover:text-[#009c9ce9] transition-colors">
            Symbiosis Solutions
          </h1>
        </Link>
        {/* Mobile Menu Icon */}
        <motion.div
          className="md:hidden cursor-pointer"
          onClick={toggleMenu}
          animate={controls}
          variants={iconVars}
        >
          <MenuIcon className="h-5 w-5" aria-label="Menu" />
        </motion.div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex gap-6 text-gray-600 items-center">
          {navLinks.map((link, index) => (
            <NavLink key={index} {...link} />
          ))}
        </nav>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-gradient-to-b from-[#009C9C] to-[#007a7a] text-white p-10 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              <div className="flex justify-end">
                <motion.div
                  className="cursor-pointer text-3xl"
                  onClick={toggleMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MdClose />
                </motion.div>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-8"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={Logo}
                    alt="Symbiosis Solutions Logo"
                    height={60}
                    width={60}
                    priority
                  />
                </div>
                {navLinks.map((link, index) => (
                  <MobileNavLink key={index} {...link} onClick={toggleMenu} />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
