// src/components/Card.js
import React from "react";

const Card = ({ title, description }) => (
  <div className="relative bg-[rgba(255,255,255,0.03)] rounded-[2rem] px-8 py-24 flex flex-col h-full overflow-hidden shadow-slate-400 shadow-md ">
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/10 to-transparent"></div>
    <h3 className="text-white text-3xl font-bold mb-4">{title}</h3>
    <p className="text-gray-300 text-lg md:text-2xl font-light mb-8 flex-grow">
      {description}
    </p>
    <div className="mt-auto">
      <a href="https://x.com/aoctolabs">
        <button className="bg-transparent border border-gray-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-2xl hover:bg-white hover:text-black transition-colors text-sm z-10 md:text-lg">
          Get Support
        </button>
      </a>
    </div>
  </div>
);

export default Card;
