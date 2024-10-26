import React from "react";

const Card = ({ title, description, icon: Icon }) => (
  <div className="group relative">
    {/* Background blur/glow effect */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-500"></div>

    {/* Main card */}
    <div className="relative bg-[rgba(255,255,255,0.03)] backdrop-blur-xl rounded-[2rem] p-8 h-full overflow-hidden border border-white/5 group-hover:border-white/10 transition-all duration-500">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/20"></div>

      {/* Animated background pattern */}
      <div
        className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0.5px,_transparent_1px)] bg-[size:12px_12px]"
        style={{
          animation: "patternMove 15s linear infinite",
        }}
      ></div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Icon and title section */}
        <div className="flex items-center gap-4 mb-6">
          {Icon && (
            <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/5">
              <Icon className="w-8 h-8 text-white" />
            </div>
          )}
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-300/80 text-lg leading-relaxed mb-8">
          {description}
        </p>

        {/* Button section */}
        <div className="mt-auto">
          <a href="https://x.com/aoctolabs" className="inline-block">
            <button className="group/btn relative px-6 py-3 rounded-full overflow-hidden transition-all duration-300">
              {/* Button background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-cyan-600/40 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

              {/* Border gradient */}
              <div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 opacity-20 group-hover/btn:opacity-40 transition-opacity duration-300"></div>

              {/* Button content */}
              <span className="relative flex items-center gap-2 text-white group-hover/btn:text-white transition-colors">
                Get Support
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>

    {/* CSS for animations */}
    <style jsx>{`
      @keyframes patternMove {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(12px, 12px);
        }
      }
    `}</style>
  </div>
);

export default Card;
