import React, { useState } from "react";

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

const DiscussSection = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "2c69c57d-690c-4d76-9678-501d05f2d045");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong!");
    }
  };

  return (
    <div
      id="contact-us"
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center py-20"
    >
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

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              Let's Discuss
            </span>
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            Connect with us and explore the possibilities
          </p>
        </div>

        {/* Main Content Container */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Form Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white/60 mb-2 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 mb-2 text-sm">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 mb-2 text-sm">
                      Message*
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:opacity-90"
                  >
                    Send Message
                  </button>

                  {result && (
                    <div className="mt-4 text-center text-sm">
                      <span className="text-white/60">{result}</span>
                    </div>
                  )}
                </form>
              </div>

              {/* Content Section */}
              <div className="hidden md:flex w-1/2 p-12 items-center bg-gradient-to-br from-emerald-900/20 to-cyan-900/20">
                <div className="space-y-6">
                  <h3 className="text-4xl lg:text-5xl font-bold tracking-tight">
                    <span className="block bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                      Connect with Us:
                    </span>
                    <span className="block bg-gradient-to-b from-white/80 to-white/60 bg-clip-text text-transparent">
                      Let's Discuss Your Digital Needs
                    </span>
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed">
                    Transform your ideas into reality with our expertise in
                    digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default DiscussSection;
