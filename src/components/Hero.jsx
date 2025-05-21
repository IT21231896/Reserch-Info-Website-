import SectionWrapper from "./SectionWrapper";
import { useEffect, useState } from "react";

const images = [
  "/assets/diagrams/tomatohome.jpg",
  "/assets/diagrams/tomato-plant-esp.png",
  "/assets/diagrams/tomtree.jpg"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500); // change every 3.5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <SectionWrapper id="home">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-primary">
          Smart Greenhouse Decision Support System
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          A decision support system for optimized tomato cultivation using IoT & ML
        </p>

        {/* Dynamic Banner */}
        <div className="relative mt-8 w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-[22rem] bg-gray-100 dark:bg-gray-800">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
