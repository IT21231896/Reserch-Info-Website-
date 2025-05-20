import SectionWrapper from "./SectionWrapper";

const Hero = () => {
  return (
    <SectionWrapper id="home">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-primary">Smart Greenhouse Decision Support System</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          A decision support system for optimized tomato cultivation using IoT & ML
        </p>
        <img src="/assets/diagrams/tomatohome.jpg" alt="System diagram" className="mt-8 mx-auto w-3/4 md:w-1/2 rounded shadow" />
      </div>
    </SectionWrapper>
  );
};

export default Hero;
