"use client";

import humanCenteredImage from "@/assets/human-centered.png";
import innovativeSolutionsImage from "@/assets/innovative-solutions.png";
import responsibilityImage from "@/assets/commitment-to-responsibility.png";

import AboutUsCard from "@/components/AboutUsCard";

export const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="container mx-auto px-4 pt-16">
      <h1 className="text-4xl font-bold tracking-tighter text-center mb-8 text-[#009C9C]">
        WHY CHOOSE SYMBIOSIS SOLUTIONS?
      </h1>

      <div className="space-y-8">
        <AboutUsCard
          imageSrc={humanCenteredImage.src}
          title="Human-Centered Design"
          description="Our solutions prioritize the needs and experiences of educators and students."
          link="/"
          alt="Human Centered Design Image"
        />
        <AboutUsCard
          imageSrc={innovativeSolutionsImage.src}
          title="Innovative AI Solutions"
          link="/"
          description="We push the boundaries of technology to deliver cutting-edge educational tools."
          alt="Innovative AI Solutions Image"
          reverse
        />
        <AboutUsCard
          imageSrc={responsibilityImage.src}
          title="Commitment to Responsibility"
          description="We ensure that AI is integrated safely and ethically in education."
          link="/"
          alt="Commitment to Responsibility Image"
        />
      </div>
    </section>
  );
};
