import React, { useEffect, useRef } from "react";
import featureData from "../../services/FeatureData";
import Card from "../ui/Card";

const FeatureSection = () => {
  const sectionRef = useRef(null);

  // Intersection Observer for refined scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-[90vh] bg-black selection:bg-white/10 selection:text-white"
    >
      {/* Advanced gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary mesh gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-1/3 h-1/2 bg-cyan-500/10 rounded-full filter blur-[120px] mix-blend-normal opacity-50 animate-mesh" />
          <div className="absolute bottom-1/3 right-1/3 w-1/3 h-1/2 bg-violet-500/10 rounded-full filter blur-[120px] mix-blend-normal opacity-50 animate-mesh-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1/4 h-1/3 bg-emerald-500/10 rounded-full filter blur-[120px] mix-blend-normal opacity-50 animate-mesh-slow" />
        </div>

        {/* Ultra-fine grain overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.02]" />

        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-24 md:py-32 lg:py-40">
        {/* Enhanced section header */}
        <div className="relative text-center mb-20 md:mb-32">
          <span className="block text-white/50 text-sm font-medium tracking-widest uppercase mb-4">
            Our Services
          </span>
          <h2 className="max-w-4xl mx-auto text-[2.5rem] md:text-6xl lg:text-7xl font-semibold tracking-tight">
            <span className="inline-block bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              Best solutions
            </span>
            <br />
            <span className="inline-block bg-gradient-to-b from-white/80 to-white/60 bg-clip-text text-transparent">
              for your business
            </span>
          </h2>

          {/* Refined separator */}
          <div className="absolute left-1/2 bottom-0 h-px w-12 -translate-x-1/2 translate-y-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
          </div>
        </div>

        {/* Premium grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[length:48px_48px] opacity-30" />

          {featureData.map((feature, index) => (
            <div
              key={index}
              className="feature-card opacity-0 transition-all duration-1000 ease-out translate-y-8"
              style={{
                "--delay": `${index * 100}ms`,
              }}
            >
              <Card
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-noise {
          background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==");
        }

        @keyframes meshAnimation {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-5%, 5%) scale(1.1);
          }
        }

        .animate-mesh {
          animation: meshAnimation 20s ease-in-out infinite;
        }

        .animate-mesh-delayed {
          animation: meshAnimation 20s ease-in-out infinite;
          animation-delay: -10s;
        }

        .animate-mesh-slow {
          animation: meshAnimation 30s ease-in-out infinite;
          animation-delay: -5s;
        }

        .feature-card.is-visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: var(--delay);
        }

        /* Optimize performance */
        @media (prefers-reduced-motion: reduce) {
          .animate-mesh,
          .animate-mesh-delayed,
          .animate-mesh-slow {
            animation: none;
          }

          .feature-card {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureSection;
