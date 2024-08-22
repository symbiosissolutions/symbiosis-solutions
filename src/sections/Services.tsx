"use client";

import ServicesCard from "@/components/ServicesCard";
import teacherTraining from "@/assets/teacher-training.jpeg"; 
import educationalTools from "@/assets/aidin.jpg"; 

const services = [
  {
    title: "Teacher Training Programs on AI",
    description:
      "We equip educators in Nepal with essential AI literacy through high-quality training, driving responsible Generative AI adoption to enhance learning and boost productivity.",
    link: "#learn-more",
    backgroundImage: teacherTraining.src,
    // buttonText:"Learn More",
    // buttonColor:"#FFFFFF", 
    // buttonHoverColor:"blue-700",
  },
  {
    title: "AI-Powered Educational Tools",
    description:
      "We create custom AI tools that are tailored to improve learning outcomes, providing educators and students with more effective and personalized educational experiences.",
    link: "#explore",
    backgroundImage: educationalTools.src,
    // buttonText:"Explore",
    // buttonColor:"white", 
    // buttonHoverColor:"blue-700",

  },
];

export const Services = () => {
  return (
    <section id="services" className="px-0 pt-16">
      <h1 className="text-4xl font-bold tracking-tighter text-center mb-12 text-gray-700">
        Our Services
      </h1>
      <div className="flex flex-col md:flex-row">
        {services.map((service, index) => (
          <div className="w-full md:w-1/2 h-64 md:h-96" key={index}>
            <ServicesCard
              title={service.title}
              description={service.description}
              link={service.link}
              backgroundImage={service.backgroundImage}
              // buttonText={service.buttonText}
              // buttonColor={service.buttonColor}
              // buttonHoverColor={service.buttonHoverColor}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
