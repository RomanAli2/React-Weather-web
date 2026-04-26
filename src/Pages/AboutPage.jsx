import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen mt-30 md:mt-20 bg-gradient-to-br from-sky-500 to-sky-400 text-white p-6 md:p-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12"><br/><br/>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About SkyCast</h1>
        <p className="text-lg opacity-90">
          SkyCast is a simple weather application that shows real-time weather
          and forecast data with a clean and modern interface.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20">
          <h2 className="text-xl font-semibold mb-2">Real-time Weather</h2>
          <p className="text-sm opacity-90">
            Displays temperature, humidity, pressure, and other data from a live API.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20">
          <h2 className="text-xl font-semibold mb-2">Search Any City</h2>
          <p className="text-sm opacity-90">
            Search for any city and instantly get its weather information.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20">
          <h2 className="text-xl font-semibold mb-2">Fast & Responsive</h2>
          <p className="text-sm opacity-90">
            Built with React and Tailwind CSS for a fast and smooth experience.
          </p>
        </div>
      </div>

  </div>
  );
}
