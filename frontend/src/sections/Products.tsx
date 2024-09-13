"use client";

import askbuddha from "@/assets/askbuddha.jpeg";
import coshikshya from "@/assets/coshikshya.jpeg";
import ProductsCard from "@/components/ProductsCard";
// import { useState } from "react";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const products = [
  {
    title: "Ask Buddha",
    // description: "This is the first product.",
    // link: "/product1",
    backgroundImage: askbuddha.src,
  },
  {
    title: "CoShikshya",
    // description: "This is the second product.",
    // link: "/product2",
    backgroundImage: coshikshya.src,
  },
];

export const Products = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const itemsPerPage = 2;
  // const totalItems = products.length;
  // const totalPages = Math.ceil(totalItems / itemsPerPage);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === totalPages - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? totalPages - 1 : prevIndex - 1
  //   );
  // };

  return (
    <section id="products" className="container mx-auto px-4 pt-16">
      <h1 className="text-4xl font-bold tracking-tighter text-center mb-12 text-gray-700">
        Our Products
      </h1>

      {/* Carousel code */}
      {/* <div className="flex items-center justify-center w-full mb-8">
        <button
          className="p-3 bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-300 mr-4"
          onClick={handlePrev}
        >
          <AiOutlineLeft className="text-white text-2xl" />
        </button>
        <div className="flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (100 / totalPages)}%)` }}
          >
            {products.map((product, index) => (
              <div key={index} className="w-full md:w-1/2 flex-shrink-0 px-4">
                <ProductsCard {...product} />
              </div>
            ))}
          </div>
        </div>
        <button
          className="p-3 bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-300 ml-4"
          onClick={handleNext}
        >
          <AiOutlineRight className="text-white text-2xl" />
        </button>
      </div>
      <div className="text-center">
        <button
          onClick={() => (window.location.href = "#explore-all")}
          className="inline-block py-3 px-6 rounded-lg text-white bg-[#009C9C] hover:bg-[#008888] transition-colors duration-300"
        >
          Explore Our Products
        </button>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product, index) => (
          <ProductsCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};
