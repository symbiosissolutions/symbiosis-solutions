import { AboutUs } from "@/sections/AboutUs";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Products } from "@/sections/Products";
import {Services} from "@/sections/Services";
import {Blogs} from "@/sections/Blogs";
import { Contact } from "@/sections/Contact";


export default function Home() {
  return (
    <>
      {/* <Header />  */}
      <Hero />
      <AboutUs/>
      <Services/>
      <Products/>
      <Blogs/>
      <Contact/>
      {/* <Footer/> */}
    </>
  );
}
