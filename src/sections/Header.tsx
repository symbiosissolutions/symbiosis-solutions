import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/symbiosis-logo.png";
import MenuIcon from "@/assets/menu-icon.svg";

export const Header = () => {
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
        <MenuIcon
          className="h-5 w-5 md:hidden cursor-pointer"
          aria-label="Menu"
        />

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex gap-6 text-gray-600 items-center">
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
          <button className="header-btn">
            Contact Us
          </button>
        </nav>
      </div>
      
    </header>
  );
};
