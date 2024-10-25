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
    if (window.scrollY > lastScrollY) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controllNavBar);
    return () => {
      window.removeEventListener("scroll", controllNavBar);
    };
  }, [lastScrollY]);

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
    <>
      <header
        className={`${
          showNavBar ? "translate-y-0" : "-translate-y-full"
        } sticky top-0 z-50 backdrop-blur-xl backdrop-brightness-75 h-16 sm:h-20 flex items-center justify-center transition-transform duration-500 ${
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
            <a href="#pricing" className="hover:text-gray-400">
              Pricing
            </a>
            <a href="#client" className="hover:text-gray-400">
              Clients
            </a>
            <a href="#team" className="hover:text-gray-400">
              Team
            </a>
          </div>
          <div className="hidden md:flex space-x-3 mr-3 items-center">
            <a
              href="#contact"
              onClick={() => {
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

          <style>{`
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
              className="block rounded-lg py-3 px-2 hover:bg-gray-900"
            >
              Pricing
            </a>
            <a
              href="#client"
              className="block rounded-lg py-3 px-2 hover:bg-gray-900"
            >
              Client
            </a>
            <a
              href="#team"
              className="block rounded-lg py-3 px-2 hover:bg-gray-900"
            >
              Team
            </a>
          </nav>
          <div className="md:hidden mx-1 mt-5">
            <a
              href="#contact"
              onClick={() => {
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
                <span className="block text-center">Just One Platform,</span>
                <span className="block text-center">More Digital Options</span>
              </h1>
            </div>
            <p className="text-base text-[rgba(162,154,154,0.6)] px-6 md:px-10 text-center max-w-[500px] mb-6 md:mb-8">
              Navigating the digital landscape for success by Creating solutions
              for creative designings
            </p>
            <a href="https://x.com/aoctolabs">
              <button className="bg-[rgba(71,28,195,1)] w-36 h-12 rounded-3xl font-semibold hover:bg-[rgba(81,38,205,1)] transition-colors hover:shadow-lg hover:shadow-[rgba(71,28,195,0.5)]">
                Get on the call
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;