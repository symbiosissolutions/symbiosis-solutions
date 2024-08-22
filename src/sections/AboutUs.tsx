"use client";

import AboutUsCard from "@/components/AboutUsCard";
import humanCenteredImage from "@/assets/aidin.jpg";
import aiSolutionsImage from "@/assets/ai.jpg";
import responsibilityImage from "@/assets/ai-innovation.jpg";

export const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="container mx-auto px-4 pt-16">
      <h1 className="text-4xl font-bold tracking-tighter text-center mb-12 text-gray-700">
        Why Choose Symbiosis Solutions?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AboutUsCard
          imageSrc={humanCenteredImage.src}
          title="Human-Centered Design"
          description="Our solutions prioritize the needs and experiences of educators and students."
          link="/"
        />
        <AboutUsCard
          imageSrc={aiSolutionsImage.src}
          title="Innovative AI Solutions"
          description="We push the boundaries of technology to deliver cutting-edge educational tools."
          link="/"
        />
        <div className="md:col-span-2">
          <div className="md:w-1/2 md:mx-auto">
            <AboutUsCard
              imageSrc={responsibilityImage.src}
              title="Commitment to Responsibility"
              description="We ensure that AI is integrated safely and ethically in education."
              link="/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};