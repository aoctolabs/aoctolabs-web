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
        } sticky top-0 z-50 backdrop-blur-xl backdrop-brightness-75  h-16 sm:h-20 flex items-center justify-center transition-transform duration-500 ${
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
            href="#howItWorks"
            className="block rounded-lg py-3 px-2 hover:bg-gray-900"
          >
            How it Works
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
            href="#login"
            className="block rounded-lg py-3 px-2 hover:bg-gray-900"
          >
            Login
          </a>
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
      <div className="w-full h-96 md:h-screen flex justify-center">
        <div className="w-screen flex flex-col items-center justify-center gap-y-4">
          <div className="w-full flex justify-center">
            <h1 className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl flex jusify-center items-center font-bold select-none">
              Just One Platform,
              <br />
              More Digital Options
            </h1>
          </div>
          <p className="mt-2 hidden md:block text-base text-[rgba(162,154,154,0.4)] px-10 text-center w-[500px]">
            Navigating the digital landscape for success by Creating solutions
            for creative designings
          </p>
          <a href="https://x.com/aoctolabs">
            <button className="bg-[rgba(71,28,195,1)] w-36 h-12 mt-5 md:mt-3 rounded-3xl font-semibold">
              Get on the call
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
