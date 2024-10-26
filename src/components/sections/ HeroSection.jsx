import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo";
import HamburgerMenu from "../../assets/HamburgerMenu";
import Close from "../../assets/Close";

const HeroSection = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const controllNavBar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavBar(false);
      } else {
        setShowNavBar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controllNavBar);
      return () => {
        window.removeEventListener("scroll", controllNavBar);
      };
    }
  }, [lastScrollY, controllNavBar]);

  const scrollToSection = (section) => {
    setIsOpen(false);
    if (section == "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      document.getElementById(`${section}`).scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background patterns and vignette */}
      <div className="absolute inset-0 z-0">
        {/* Central glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(71,28,195,0.4)_0%,_transparent_100%)] md:bg-[radial-gradient(circle_at_center,_rgba(71,28,195,0.3)_0%,_transparent_70%)]" />

        {/* Animated grid lines */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(71,28,195,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(71,28,195,0.2)_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:40px_40px]"
          style={{
            animation: "gridMove 20s linear infinite",
          }}
        />

        {/* Dots pattern */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(71,28,195,0.4)_0.5px,_transparent_1px)] bg-[size:12px_12px] md:bg-[radial-gradient(circle_at_center,_rgba(71,28,195,0.4)_1px,_transparent_2px)] md:bg-[size:24px_24px]"
          style={{
            animation: "dotMove 15s linear infinite",
          }}
        />

        {/* Diagonal lines - desktop only */}
        <div className="absolute inset-0 hidden md:block bg-[linear-gradient(45deg,rgba(71,28,195,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)]" />

        {/* Bottom fade to black */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black" />

        <style jsx>{`
          @keyframes gridMove {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(40px);
            }
          }

          @keyframes dotMove {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(24px, 24px);
            }
          }
        `}</style>
      </div>

      <header
        className={`${
          showNavBar ? "translate-y-0" : "-translate-y-full"
        } fixed w-full top-0 z-50 backdrop-blur-xl backdrop-brightness-75 h-16 sm:h-20 flex items-center justify-center transition-transform duration-500 ${
          isOpen ? "translate-y-0" : ""
        }`}
      >
        <div className="h-12 flex items-center justify-between w-screen mx-6">
          <div
            onClick={() => {
              scrollToSection("top");
            }}
            className="flex h-full cursor-pointer"
          >
            <Logo />
          </div>
          {/* desktop view */}
          <div className="hidden md:flex md:space-x-6 px-4 lg:space-x-10">
            <a
              href="#services"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("services");
              }}
              className="hover:text-gray-400"
            >
              Services
            </a>
            <a
              href="#pricing"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("pricing");
              }}
              className="hover:text-gray-400"
            >
              Pricing
            </a>
            <a
              href="#client"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("client");
              }}
              className="hover:text-gray-400"
            >
              Clients
            </a>
            <a
              href="#team"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("team");
              }}
              className="hover:text-gray-400"
            >
              Team
            </a>
          </div>
          <div className="hidden md:flex space-x-3 mr-3 items-center">
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("contact-us");
              }}
              className="border border-white h-10 px-2.5 rounded-3xl hover:bg-white hover:text-black transition-colors flex items-center inline-block text-center"
            >
              Contact Us
            </a>
          </div>
          {/* mobile view */}
          <button
            className={`md:hidden transition-transform duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            onClick={toggleMenu}
          >
            {isOpen ? <Close /> : <HamburgerMenu />}
          </button>
        </div>
      </header>
      <div
        className={`md:hidden fixed h-full w-screen text-white p-4 backdrop-blur-xl backdrop-brightness-75 z-50 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="mx-1">
          <a
            href="#services"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("services");
            }}
            className="block rounded-lg py-3 px-2 hover:bg-gray-900"
          >
            Services
          </a>
          <a
            href="#pricing"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("pricing");
            }}
            className="block rounded-lg py-3 px-2 hover:bg-gray-900"
          >
            Pricing
          </a>
          {/* <a
            href="#howItWorks"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("howItWorks");
            }}
            className="block rounded-lg py-3 px-2 hover:bg-gray-900"
          >
            How it Works
          </a> */}
          <a
            href="#client"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("client");
            }}
            className="block rounded-lg py-3 px-2 hover:bg-gray-900"
          >
            Client
          </a>
          <a
            href="#team"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("team");
            }}
            className="block rounded-lg py-3 px-2 hover:bg-gray-900"
          >
            Team
          </a>
        </nav>
        <div className="md:hidden mx-1 mt-5">
          {/* <a
            href="#login"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("login");
            }}
            className="block rounded-lg py-3 px-2 hover:bg-gray-900"
          >
            Login
          </a> */}
          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("contact-us");
            }}
            className="border border-white h-10 w-fit px-2.5 mt-2 hover:bg-white hover:text-black transition-colors flex items-center inline-block text-center block rounded-xl"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Main content with adjusted height for mobile */}
      <div className="relative z-10 w-full h-[calc(100vh-4rem)] md:h-screen flex justify-center">
        <div className="w-screen flex flex-col items-center justify-center">
          <div className="w-full flex justify-center mb-4 md:mb-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold select-none text-white leading-tight md:leading-snug">
              <span className="block text-center mb-2 md:mb-4">
                Just One Platform,
              </span>
              <span className="block text-center relative">
                <span className="relative">
                  More
                  <span className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-3xl bg-gradient-to-r from-purple-600/30 to-cyan-600/30" />
                </span>{" "}
                <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                  Digital Options
                </span>
              </span>
            </h1>
          </div>
          <div className="relative">
            <p className="text-lg md:text-xl text-gray-300/80 px-6 md:px-10 text-center max-w-[600px] mb-8 md:mb-10 mx-auto leading-relaxed">
              Navigating the digital landscape for success by{" "}
              <span className="font-semibold text-white">
                creating innovative solutions
              </span>{" "}
              for{" "}
              <span className="relative inline-block">
                creative designs
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="3"
                  viewBox="0 0 200 4"
                  fill="none"
                >
                  <path
                    d="M2 2L198 2"
                    stroke="url(#paint0_linear)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="2"
                      y1="2"
                      x2="198"
                      y2="2"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A855F7" />
                      <stop offset="1" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </p>
            <div className="flex gap-4 justify-center items-center">
              <a href="https://x.com/aoctolabs">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  Get on the call
                </button>
              </a>
            </div>
            {/* <div className="mt-8 flex justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No credit card required</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
