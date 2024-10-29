import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle gradient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(71,28,195,0.08)_0%,_transparent_70%)]" />

        {/* Fine grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(71,28,195,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(71,28,195,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="relative">
          {/* Gradient border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl blur opacity-30"></div>

          <div className="relative bg-[rgba(255,255,255,0.02)] backdrop-blur-sm rounded-2xl border border-white/5 p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              {/* Logo Section */}
              <div className="flex items-center group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 97.63 85"
                  className="w-8 h-8 mr-3 fill-current text-white group-hover:text-purple-500 transition-colors"
                >
                  <path d="M96.87,7.72L60.33,67H46.62L79,14.14a2.24,2.24,0,0,0,0-2.29,2.22,2.22,0,0,0-2-1.16H48.42L13.7,67H0L41.06,0h51.5A5,5,0,0,1,97,2.6,5,5,0,0,1,96.87,7.72Z" />
                  <path d="M90,74.27L82.05,85H20.44A4,4,0,0,1,17,79L53.39,17.8,66.47,18,35.72,70a2.76,2.76,0,0,0,2.37,4.17Z" />
                </svg>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  aocto labs
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="hidden md:flex space-x-8">
                {["About us", "Services", "Use Cases", "Pricing", "Blog"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-300 hover:text-white transition-colors relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  )
                )}
              </nav>

              {/* Social Icons */}
              <div className="flex space-x-6">
                {[
                  {
                    name: "LinkedIn",
                    icon: (
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    ),
                    link: "https://x.com/aoctolabs",
                  },
                  {
                    name: "Facebook",
                    icon: (
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    ),
                    link: "https://x.com/aoctolabs",
                  },
                  {
                    name: "Twitter",
                    icon: (
                      <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
                    ),
                    link: "https://x.com/aoctolabs",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    aria-label={social.name}
                    className="transform hover:scale-110 transition-transform"
                  >
                    <svg
                      className="w-6 h-6 fill-current text-gray-400 hover:text-white transition-colors"
                      viewBox="0 0 24 24"
                    >
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Contact us:
            </h2>

            <div className="space-y-6 text-gray-300">
              <p className="flex items-center gap-3 hover:text-white transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                aoctolabs@gmail.com
              </p>
              <p className="flex items-center gap-3 hover:text-white transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 81569 25653
              </p>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p>1234 Main St</p>
                  <p>Moonstone City, Stardust State 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-[rgba(255,255,255,0.03)] backdrop-blur-sm rounded-xl border border-white/5 p-8">
              <h3 className="text-xl font-semibold mb-6">
                Subscribe to our newsletter
              </h3>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-black/30 rounded-lg border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2024 Aoctlabs. All Rights Reserved.</p>
          <a
            href="/privacy-policy"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
