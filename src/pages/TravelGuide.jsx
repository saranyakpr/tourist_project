
import React from "react";
import { motion } from "framer-motion";

const travelPlaces = [
  {
    name: "Courtallam Main Falls",
    category: "Waterfall",
    description:
      "Enjoy the refreshing natural waterfall and beautiful surroundings of Courtallam.",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=900",
    bestTime: "June – September",
    duration: "1–2 Hours",
  },
  {
    name: "Five Falls",
    category: "Waterfall",
    description:
      "Experience the beauty of five separate streams flowing through the rocks.",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=900",
    bestTime: "June – September",
    duration: "1 Hour",
  },
  {
    name: "Papanasam",
    category: "Nature",
    description:
      "Explore scenic landscapes, greenery and peaceful surroundings near the river.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900",
    bestTime: "October – February",
    duration: "2–3 Hours",
  },
  {
    name: "Kasi Viswanathar Temple",
    category: "Temple",
    description:
      "Visit the historic temple and experience its traditional architecture.",
    image:
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=900",
    bestTime: "Throughout the year",
    duration: "1 Hour",
  },
];

const travelTips = [
  {
    icon: "🌦️",
    title: "Best Time to Visit",
    description:
      "June to September is popular for enjoying the waterfalls during the monsoon season.",
  },
  {
    icon: "👕",
    title: "What to Carry",
    description:
      "Carry comfortable clothes, extra dress, towels and waterproof bags.",
  },
  {
    icon: "🚗",
    title: "Transportation",
    description:
      "You can explore Tenkasi by local buses, taxis and private vehicles.",
  },
  {
    icon: "📸",
    title: "Travel Essentials",
    description:
      "Carry your camera, water bottle and basic personal essentials.",
  },
];

const TravelGuide = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1600"
          alt="Beautiful waterfall"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-5 text-white"
        >
          <p className="uppercase tracking-[5px] text-sm mb-4 text-cyan-200">
            Explore • Discover • Experience
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Tenkasi Travel Guide
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Your complete guide to discovering waterfalls, nature,
            temples and unforgettable experiences in Tenkasi.
          </p>

          <a
            href="#destinations"
            className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full font-semibold transition"
          >
            Explore Destinations
          </a>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-5 py-16 text-center">
        <p className="text-cyan-600 font-semibold uppercase tracking-widest mb-3">
          Travel Information
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-5">
          Discover the Beauty of Tenkasi
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 leading-8">
          Tenkasi is known for its beautiful waterfalls, green landscapes,
          peaceful temples and natural attractions. Plan your journey
          with useful travel information and explore the best of this region.
        </p>
      </section>

      {/* Destinations */}
      <section id="destinations" className="max-w-7xl mx-auto px-5 pb-20">
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold uppercase tracking-widest mb-2">
            Must Visit Places
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Popular Destinations
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {travelPlaces.map((place, index) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <span className="text-xs font-semibold bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">
                  {place.category}
                </span>

                <h3 className="text-xl font-bold text-slate-800 mt-4 mb-2">
                  {place.name}
                </h3>

                <p className="text-sm text-gray-600 leading-6 mb-5">
                  {place.description}
                </p>

                <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
                  <p>📅 Best Time: {place.bestTime}</p>
                  <p>⏱️ Duration: {place.duration}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Travel Tips */}
      <section className="bg-slate-900 py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-400 font-semibold uppercase tracking-widest mb-3">
              Travel Smart
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Essential Travel Tips
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 border border-white/10 rounded-2xl p-7 hover:bg-white/15 transition"
              >
                <div className="text-4xl mb-5">{tip.icon}</div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {tip.title}
                </h3>

                <p className="text-gray-300 text-sm leading-7">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 px-5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Ready to Explore Tenkasi?
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Discover amazing destinations and create beautiful memories
          with your next Tenkasi trip.
        </p>

        <a
          href="/plan-your-trip"
          className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full font-semibold transition"
        >
          Plan Your Trip
        </a>
      </section>

    </div>
  );
};

export default TravelGuide;
