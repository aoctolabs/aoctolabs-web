import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Logo";
const DotBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0">
        {[...Array(250)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animation: `twinkle ${Math.random() * 5 + 5}s linear ${
                Math.random() * 5
              }s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (section) => {
    setIsOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-black selection:bg-white/10 selection:text-white overflow-hidden">
      <DotBackground />

      {/* Static gradient background */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-1/3 h-1/2 bg-cyan-500/10 rounded-full filter blur-[120px] mix-blend-normal opacity-50" />
          <div className="absolute bottom-1/3 right-1/3 w-1/3 h-1/2 bg-violet-500/10 rounded-full filter blur-[120px] mix-blend-normal opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1/4 h-1/3 bg-emerald-500/10 rounded-full filter blur-[120px] mix-blend-normal opacity-50" />
        </div>

        {/* Matching noise texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.02]" />

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-70" />
      </div>

      {/* Refined Navbar */}
      <header
        className={`${
          showNavBar ? "translate-y-0" : "-translate-y-full"
        } fixed w-full top-0 z-50 transition-transform duration-500`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-white/5 backdrop-blur-xl bg-black/40 rounded-2xl mt-4 px-6 h-20 flex items-center">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-8">
                <a href="#">
                  <Logo />
                </a>
                <nav className="hidden md:flex items-center space-x-2">
                  {["services", "pricing", "client", "team"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="px-4 py-2 text-white/60 hover:text-white text-sm font-medium transition-colors relative group"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                      <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-colors -z-10" />
                    </button>
                  ))}
                </nav>
              </div>

              <div className="hidden md:flex items-center space-x-6">
                <a href="https://x.com/aoctolabs" target="_blank">
                  <button
                    // onClick={() => scrollToSection("contact-us")}
                    className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all"
                  >
                    Get Started
                  </button>
                </a>
              </div>

              <button
                className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu matching feature section style */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xl">
            <div className="fixed inset-y-0 right-0 w-full bg-black/90 px-6 py-6">
              <div className="flex justify-end">
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-6 h-6 text-white/80" />
                </button>
              </div>
              <nav className="mt-8 flow-root">
                <div className="space-y-2">
                  {["services", "pricing", "client", "team"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="block w-full px-4 py-3 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5 text-left"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  ))}
                  <a href="https://x.com/aoctolabs" target="_blank">
                    <button
                      // onClick={() => scrollToSection("contact-us")}
                      className="w-full mt-4 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all"
                    >
                      Get Started
                    </button>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Hero content matching feature section typography */}
      <main className="relative z-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="block text-white/50 text-sm font-medium tracking-widest uppercase mb-4">
            Welcome to the Future
          </span>
          <h1 className="text-[2.5rem] md:text-6xl lg:text-7xl font-semibold tracking-tight">
            <span className="block bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              Just One Platform,
            </span>
            <span className="block bg-gradient-to-b from-white/80 to-white/60 bg-clip-text text-transparent">
              More Digital Options
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
            Navigating the digital landscape for success by{" "}
            <span className="text-white font-semibold">
              creating innovative solutions
            </span>{" "}
            for creative designs
          </p>
          <button
            onClick={() => scrollToSection("contact-us")}
            className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-medium transition-all hover:opacity-90"
          >
            Get on the call
          </button>

          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "98%", label: "Client satisfaction" },
              { value: "24/7", label: "Customer support" },
              { value: "15+", label: "Years experience" },
              { value: "5K+", label: "Projects delivered" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <dt className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm text-white/60">{stat.label}</dd>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        .bg-noise {
          background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==");
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
