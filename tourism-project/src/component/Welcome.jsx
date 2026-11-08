
import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Welcome() {

  const reduceMotion = useReducedMotion();

  const backgroundImage = "/Courtallam.jpg";

  const images = [
    {
      image: "dam.jpg",
      title: "Beautiful Dams",
      className: "animate-float"
    },
    {
      image: "/temple.jpg",
      title: "Historical Temple",
      className: "animate-float-delay"
    },
    {
      image: "/temple1.jpg",
      title: "Mountaintemple Views",
      className: "animate-float-slow"
    }
  ];

  const revealVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(8px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)"
    }
  };

  return (
    <section
      id="welcome"
      className="relative w-full bg-[#FAF9F2] py-25 px-3 md:px-10"
    >

      {/* Main Background Box */}

      <div
        className="relative max-w-7xl mx-auto min-h-[650px] rounded-[35px] overflow-hidden shadow-2xl bg-cover bg-center"
        style={{
          backgroundImage: `url("${backgroundImage}")`
        }}
      >

        {/* Cream Overlay */}

        <div className="absolute inset-0 bg-transparent"></div>

        {/* Soft Cream Gradient */}

        <div className="absolute inset-0 bg-transparent"></div>

        {/* Box Content */}

        <div className="relative z-8 w-full px-6 md:px-10 lg:px-14 py-14">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE TEXT */}

            <motion.div
              className="text-green-950 text-center lg:text-left"
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >

              {/* Welcome Badge */}

              <motion.div
                variants={revealVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center gap-2 border border-green-800/20 bg-white/50 backdrop-blur-md px-5 py-2 rounded-full mb-7"
              >
                <MapPin size={18} className="text-white-700" />

                <span className="text-sm tracking-widest uppercase">
                  Welcome to Tenkasi
                </span>
              </motion.div>

              {/* Small Heading */}

              <motion.p
                variants={revealVariants}
                transition={{ duration: 0.8 }}
                className="text-white font-semibold tracking-[4px] uppercase text-sm md:text-base mb-4"
              >
                Discover • Explore • Experience
              </motion.p>

              {/* Main Title */}

              <motion.h2
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 60,
                    filter: "blur(10px)"
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)"
                  }
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut"
                }}
                className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white font-serif"
              >
                Nature's Beauty,

                <span className="block text-white mt-2 font-serif">
                  Timeless Memories
                </span>
              </motion.h2>

              {/* Description */}

              <motion.p
                variants={revealVariants}
                transition={{ duration: 0.9 }}
                className="text-base md:text-lg text-white max-w-xl mx-auto lg:mx-0 leading-relaxed mb-9"
              >
                Discover the breathtaking waterfalls, ancient temples
                and beautiful green forests of Tenkasi.
                Experience unforgettable moments with every journey.
              </motion.p>

              {/* Our Story Button */}

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    scale: 0.9
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }
                }}
                transition={{ duration: 0.8 }}
              >
                <a
                  href="/about"
                  className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Our Story
                  <ArrowRight size={20} />
                </a>
              </motion.div>

            </motion.div>

            {/* RIGHT SIDE FLOATING IMAGES */}

            <div className="relative h-[430px] md:h-[500px] w-full max-w-xl mx-auto">

              {/* Image 1 */}

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: -60, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-2 left-2 md:left-10 w-52 h-64 md:w-64 md:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 animate-float"
              >
                <img
                  src={images[0].image}
                  alt={images[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                  <p className="text-white font-semibold">
                    {images[0].title}
                  </p>
                </div>
              </motion.div>

              {/* Image 2 */}

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: 60, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="absolute top-24 right-0 md:right-4 w-48 h-60 md:w-56 md:h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 animate-float-delay"
              >
                <img
                  src={images[1].image}
                  alt={images[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                  <p className="text-white font-semibold">
                    {images[1].title}
                  </p>
                </div>
              </motion.div>

              {/* Image 3 */}

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 60, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="absolute bottom-0 left-1/4 md:left-32 w-52 h-48 md:w-60 md:h-52 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 animate-float-slow"
              >
                <img
                  src={images[2].image}
                  alt={images[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                  <p className="text-white font-semibold">
                    {images[2].title}
                  </p>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
