import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/background.jpg')" }}>
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left bg-white/30 backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <p className="text-blue-600 font-semibold uppercase text-sm">WANNA LEARN WHO WE ARE?</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-2">
          Get a Chance to <br />
          know <span className="text-black">About Us</span> and
          <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
            Relive Our Journey
          </span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Meet our dynamic team and discover the roadmap to success as we will let you know how we
          <span className="font-semibold text-gray-800"> work</span>.
        </p>
        
        <button className="mt-6 px-6 py-3 bg-white/30 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
          Let&apos;s talk →
        </button>
      </div>

      {/* Right Image with Custom Background */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative bg-white/30 backdrop-blur-lg p-6 rounded-lg shadow-lg">
        {/* Light Blue Oval Background */}
        <div className="absolute bg-blue-200/50 w-72 h-72 md:w-[450px] md:h-[300px] rounded-full -z-10"></div>
        {/* Team Image */}
        <img src="/assets/Farm2U Owners.jpg" alt="Team" className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default AboutUs;
