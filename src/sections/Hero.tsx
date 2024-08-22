import heroImage from "@/assets/hero-image.png";

export const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-end"
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh - 4rem)",
      }}
    >
      <div className="container mx-auto px-4 h-full flex items-end pb-8">
        <div className="text-center md:text-left w-full">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-white to-[#84ccb6] text-transparent bg-clip-text">
            Transforming Education Through
            <br/>
            Human-Centered Solutions
          </h1>
          <div className="mt-4 flex flex-col md:flex-row items-center justify-center md:justify-start text-lg md:text-xl text-white tracking-tight space-y-4 md:space-y-0 md:space-x-4">
            <p>
              We Empower Educators and Learners with Personalized, Responsible
              AI Technologies.
            </p>
            <button className="bg-[#009C9C] hover:bg-[#008888] transition-colors duration-300 text-white px-4 py-2 md:px-4 md:py-3 rounded-lg font-medium tracking-tight w-1/2 md:w-auto text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
