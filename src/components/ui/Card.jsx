import React, { useState } from "react";
import { Sparkles, Stars, Waves } from "lucide-react";

const Card = ({ title, description, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated constellation background */}
      <div className="absolute -z-10 h-full w-full overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced floating orbs */}
      <div className="absolute -z-10 h-full w-full">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-cyan-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-float-slow"></div>
      </div>

      {/* Premium gradient border */}
      <div className="absolute -inset-[0.5px] bg-gradient-to-r from-purple-600 via-cyan-400 to-pink-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition-all duration-500 animate-gradient-shift"></div>

      {/* Main card */}
      <div className="relative bg-[rgba(255,255,255,0.03)] backdrop-blur-xl rounded-[2rem] p-8 h-full border border-white/5 group-hover:border-white/10 transition-all duration-500 overflow-hidden">
        {/* Advanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/10 to-cyan-900/20 opacity-70"></div>

        {/* Multilayer animated patterns */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0.5px,_transparent_1px)] bg-[length:12px_12px] animate-pattern"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0.5px,_transparent_1px)] bg-[length:24px_24px] animate-pattern-slow opacity-50"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:64px_64px] animate-pattern-diagonal opacity-5"></div>
        </div>

        {/* Enhanced sparkle effects */}
        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
          <Stars className="w-6 h-6 text-cyan-400 animate-pulse" />
        </div>
        <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity">
          <Sparkles className="w-6 h-6 text-purple-400 animate-pulse delay-75" />
        </div>

        {/* Content wrapper with hover effect */}
        <div className="relative z-10 transform group-hover:translate-y-[-2px] transition-transform duration-300">
          {/* Enhanced icon and title section */}
          <div className="flex items-center gap-4 mb-6">
            {Icon && (
              <div className="relative group/icon">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-md opacity-20 group-hover/icon:opacity-40 transition-opacity"></div>
                <div className="relative p-3 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/5 group-hover/icon:border-white/10 transition-all">
                  <Icon className="w-8 h-8 text-white group-hover/icon:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover/icon:opacity-100 blur-xl transition-opacity"></div>
              </div>
            )}
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-purple-100 to-cyan-100 bg-clip-text text-transparent group-hover:bg-gradient-to-l transition-all duration-500">
              {title}
            </h3>
          </div>

          {/* Enhanced description with gradient text */}
          <p className="text-gray-300/80 text-lg leading-relaxed mb-8 group-hover:text-gray-200/90 transition-colors duration-300">
            {description}
          </p>

          {/* Premium button section */}
          <div className="mt-auto">
            <a href="https://x.com/aoctolabs" className="inline-block">
              <button className="group/btn relative px-6 py-3 rounded-full overflow-hidden transition-all duration-300">
                {/* Animated button background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-cyan-600/40 to-pink-600/40 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-gradient-shift"></div>

                {/* Enhanced border gradient */}
                <div className="absolute inset-[0.5px] rounded-full bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600 opacity-20 group-hover/btn:opacity-50 transition-all duration-300"></div>

                {/* Button content with wave effect */}
                <span className="relative flex items-center gap-2 text-white/90 group-hover/btn:text-white transition-colors">
                  <span className="relative">
                    Get Support
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500"></span>
                  </span>
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

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2);
          }
        }

        @keyframes pattern {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(12px, 12px);
          }
        }

        @keyframes pattern-diagonal {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(64px, 64px);
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-pattern {
          animation: pattern 15s linear infinite;
        }

        .animate-pattern-slow {
          animation: pattern 20s linear infinite;
        }

        .animate-pattern-diagonal {
          animation: pattern-diagonal 20s linear infinite;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Card;
