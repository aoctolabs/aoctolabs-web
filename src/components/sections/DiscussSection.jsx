import React, { useState } from "react";

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
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Central glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(71,28,195,0.15)_0%,_transparent_70%)]" />

        {/* Animated grid lines */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(71,28,195,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(71,28,195,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"
          style={{
            animation: "gridMove 20s linear infinite",
          }}
        />

        {/* Dots pattern */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(71,28,195,0.2)_1px,_transparent_2px)] bg-[size:24px_24px]"
          style={{
            animation: "dotMove 15s linear infinite",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Let's Discuss
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Connect with us and explore the possibilities
          </p>
        </div>

        {/* Main Content Container */}
        <div className="relative group">
          {/* Gradient border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur opacity-30"></div>

          <div className="relative bg-[rgba(255,255,255,0.03)] backdrop-blur-xl rounded-3xl border border-white/5 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Form Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">
                      Message*
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    Send Message
                  </button>

                  {result && (
                    <div className="mt-4 text-center text-sm">
                      <span className="text-gray-300">{result}</span>
                    </div>
                  )}
                </form>
              </div>

              {/* Content Section */}
              <div className="hidden md:flex w-1/2 p-12 items-center bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
                <div className="space-y-6">
                  <h3 className="text-4xl lg:text-5xl font-bold">
                    <span className="block text-white">Connect with Us:</span>
                    <span className="block bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                      Let's Discuss Your Digital Needs
                    </span>
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
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
  );
};

export default DiscussSection;
