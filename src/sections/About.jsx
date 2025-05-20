import SectionWrapper from "../components/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">About Us</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h3 className="text-xl font-semibold text-green-600 mb-4">Who We Are</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We are a team of passionate final-year undergraduates from the Sri Lanka Institute of Information Technology, 
            united by a shared goal — to make agriculture smarter, more efficient, and sustainable.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            Our project, <strong>GreenBrain</strong>, is a smart Decision Support System (DSS) designed specifically 
            for <span className="text-green-600 font-medium">tomato greenhouse cultivation</span>. By combining IoT sensor 
            networks with intelligent machine learning models, we aim to help farmers make accurate, real-time decisions 
            about irrigation, fertilization, disease prevention, and harvesting.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            This project isn't just a submission — it's a step toward smarter farming and a greener future 🌱🍅.
          </p>
        </div>

        {/* Right Side */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md text-gray-700 dark:text-gray-300">
          <h3 className="text-lg font-semibold text-secondary dark:text-white mb-4">Quick Facts</h3>
          <ul className="space-y-3 text-sm">
            <li>🎓 Final Year Research Project 2024/2025</li>
            <li>🌿 Focus: Smart Tomato Greenhouse Decision Support System</li>
            <li>📡 Powered by: IoT, Machine Learning, and Real-time Data</li>
            <li>💻 Built with: React, TailwindCSS, Firebase</li>
            <li>👩‍🏫 Guided by expert mentors from SLIIT</li>
            <li>🚀 Mission: Boost sustainability & productivity in agriculture</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
