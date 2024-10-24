import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 text-lg">
      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-8 ">
        <div className="flex justify-between items-center mb-8 px-2">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 97.63 85"
              className="w-6 h-6 mr-2 fill-current text-white"
            >
              <path d="M96.87,7.72L60.33,67H46.62L79,14.14a2.24,2.24,0,0,0,0-2.29,2.22,2.22,0,0,0-2-1.16H48.42L13.7,67H0L41.06,0h51.5A5,5,0,0,1,97,2.6,5,5,0,0,1,96.87,7.72Z" />
              <path d="M90,74.27L82.05,85H20.44A4,4,0,0,1,17,79L53.39,17.8,66.47,18,35.72,70a2.76,2.76,0,0,0,2.37,4.17Z" />
            </svg>
            <span className="text-lg font-semibold">aocto labs</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/about" className="hover:underline">
              About us
            </a>
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="/use-cases" className="hover:underline">
              Use Cases
            </a>
            <a href="/pricing" className="hover:underline">
              Pricing
            </a>
            <a href="/blog" className="hover:underline">
              Blog
            </a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="https://x.com/aoctolabs" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current w-6 h-6"
              >
                <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
              </svg>
            </a>
          </div>
        </div>
        <h2 className="text-[#471CC3] font-bold mb-4 px-2">Contact us:</h2>
        <div className="flex flex-col md:flex-row justify-between px-2">
          <div className="mb-8 md:mb-0 flex flex-col gap-4">
            <p>Email: aoctolabs@gmail.com</p>
            <a href="tel:+918156925653">Phone: +91 81569 25653</a>
            <div>
              <p>Address: 1234 Main St</p>
              <p>Moonstone City, Stardust State 12345</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-gray-800 p-6 rounded-lg">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-700 text-white p-3 rounded-md mb-4"
              />
              <button className="w-full bg-[#471CC3] text-white py-3 px-6 rounded-md hover:bg-purple-700 transition duration-300">
                Subscribe to newsletter
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 Aoctlabs. All Rights Reserved.</p>
          <a href="/privacy-policy" className="mt-4 md:mt-0 hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
