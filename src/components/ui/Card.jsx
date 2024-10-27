import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Card = ({ title, description, icon: Icon }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Custom glow effect based on mouse position
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative w-full max-w-lg mx-auto perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient background effect */}
      <div className="absolute -inset-32 opacity-25">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-500/30 blur-3xl"
            style={{
              transform: isHovered
                ? `translate(${(mousePosition.x - 300) / 20}px, ${
                    (mousePosition.y - 300) / 20
                  }px)`
                : "none",
              transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>
      </div>

      {/* Main card container */}
      <div className="relative group transform-gpu transition-all duration-700 ease-out hover:scale-[1.02]">
        {/* Ultra-subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] rounded-3xl" />

        {/* Premium glass card */}
        <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-3xl backdrop-blur-2xl border border-white/[0.05] overflow-hidden">
          {/* Dynamic light reflection */}
          <div
            className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              transform: `translateX(${isHovered ? "100%" : "-100%"})`,
              transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />

          {/* Content wrapper */}
          <div className="relative space-y-6">
            {/* Icon & Title group */}
            <div className="flex items-start space-x-4">
              {Icon && (
                <div className="relative">
                  <div className="p-3 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/[0.05] shadow-lg">
                    <Icon className="w-6 h-6 text-white transform-gpu transition-transform duration-500 ease-out group-hover:scale-110" />
                  </div>
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                </div>
              )}
              <h3 className="text-2xl font-medium tracking-tight text-white/90">
                {title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed text-white/70 transition-colors duration-500 group-hover:text-white/80">
              {description}
            </p>

            {/* Action button */}
            <div>
              <button className="relative group/btn inline-flex items-center">
                <span className="relative px-4 py-2 text-sm font-medium text-white/90 transition-colors duration-300 group-hover/btn:text-white">
                  Learn more
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500" />
                </span>
                <span className="ml-2 text-white/70 transition-colors duration-300 group-hover/btn:text-white/90">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Performance optimizations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .shadow-3xl {
          box-shadow: 0 0 60px -15px rgba(0, 0, 0, 0.15),
            0 0 30px -15px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
};

export default Card;
