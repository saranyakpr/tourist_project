
import React, { useEffect, useState } from "react";

import { motion, useReducedMotion } from "framer-motion";

import {
  MapPin,
  Compass,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Bot,
  X,
  Send
} from "lucide-react";

export default function Hero() {

  const reduceMotion = useReducedMotion();

  const images = [
    {
      name: "Waterfall",
      url: "/waterfall.jpg"
    },
    {
      name: "Green Forest",
      url: "/forest.jpg"
    },
    {
      name: "Mountain Nature",
      url: "/mountain.jpg"
    },
    {
      name: "Beautiful Lake",
      url: "/lake.jpg"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      text: "Hi! Welcome to Tenkasi Tourism. How can I help you explore Tenkasi?",
      sender: "bot"
    }
  ]);

  // Automatic image change every 5 seconds
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Chatbot Message
  const sendMessage = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    let botReply = "";

    const userMessage = message.toLowerCase();

    if (userMessage.includes("hello") || userMessage.includes("hi")) {
      botReply = "Hello! Welcome to Tenkasi Tourism. How can I help you?";
    }
    else if (userMessage.includes("waterfall")) {
      botReply = "Tenkasi has beautiful waterfalls like Courtallam, Five Falls and Old Courtallam.";
    }
    else if (userMessage.includes("temple")) {
      botReply = "You can visit Kasi Viswanathar Temple, Thirumalai Kovil and other famous temples.";
    }
    else if (userMessage.includes("food")) {
      botReply = "You can enjoy delicious South Indian food and traditional Tenkasi special dishes.";
    }
    else if (userMessage.includes("hotel")) {
      botReply = "Tenkasi has many hotels and lodges for comfortable accommodation.";
    }
    else if (userMessage.includes("places")) {
      botReply = "Popular places include Courtallam, Papanasam, Gundar Dam and Thirumalai Kovil.";
    }
    else if (userMessage.includes("thank")) {
      botReply = "You're welcome! Have a wonderful trip to Tenkasi.";
    }
    else {
      botReply = "Sorry, I couldn't understand your question. Please ask about Tenkasi tourist places, waterfalls, temples, food or hotels.";
    }

    setMessages((prev) => [
      ...prev,
      { text: message, sender: "user" },
      { text: botReply, sender: "bot" }
    ]);

    setMessage("");
  };

  return (
    <section
      id="home"
      className="relative w-full h-[calc(100vh-80px)] min-h-[627px] flex items-center overflow-hidden"
    >

      {/* Background Image Slider */}

      {images.map((image, index) => (
        <div
          key={image.name}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image.url}')` }}
        />
      ))}

      {/* Dark Green Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-green-950/75 via-green-900/40 to-black/10"></div>

      {/* Hero Content with Animation */}

      <motion.div
        className="relative z-10 px-8 md:px-20 py-20 max-w-4xl"
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >

        {/* Location Badge */}

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-green-100/90 text-green-800 px-5 py-2 rounded-full mb-6"
        >

          <MapPin size={18} />

          <span className="text-sm font-semibold">
            Welcome to Tenkasi, Tamil Nadu
          </span>

        </motion.div>

        {/* Animated Main Title */}

        <motion.h1
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
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-serif italic"
        >

          Discover the
          <span className="text-green-300"> Beauty </span>
          of Nature

        </motion.h1>

        {/* Animated Description */}

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 35 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.9 }}
          className="text-white text-base md:text-xl leading-relaxed max-w-2xl mb-8"
        >

          Explore the breathtaking waterfalls, beautiful
          mountains and peaceful landscapes of Tenkasi.
          Experience nature and create unforgettable memories.

        </motion.p>

        {/* Animated Buttons */}

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.9 }}
          className="flex flex-wrap gap-4"
        >

          <a
            href="/destination"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-4 rounded-full font-semibold transition duration-300 shadow-lg hover:scale-105"
          >
            Explore Destinations
            <ArrowRight size={20} />
          </a>

          <a
            href="#about"
            className="flex items-center gap-2 bg-white/90 hover:bg-white text-green-800 px-7 py-4 rounded-full font-semibold transition duration-300 hover:scale-105"
          >
            <Compass size={20} />
            Discover More
          </a>

        </motion.div>

      </motion.div>

      {/* Previous Button */}

      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-green-900 p-3 rounded-full shadow-lg transition"
        aria-label="Previous image"
      >
        <ChevronLeft size={25} />
      </button>

      {/* Next Button */}

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-green-900 p-3 rounded-full shadow-lg transition"
        aria-label="Next image"
      >
        <ChevronRight size={25} />
      </button>

      {/* Slider Dots */}

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-3">

        {images.map((image, index) => (
          <button
            key={image.name}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "w-9 bg-green-400"
                : "w-3 bg-white/80"
            }`}
            aria-label={`Show ${image.name}`}
          />
        ))}

      </div>

      {/* AI Chatbot Floating Button */}

      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="absolute bottom-6 right-6 z-50 w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl flex items-center justify-center transition duration-300 hover:scale-110"
        aria-label="Open AI chatbot"
      >
        {chatOpen ? <X size={30} /> : <Bot size={32} />}
      </button>

      {/* AI Chatbot Window */}

      {chatOpen && (
        <div className="absolute bottom-24 right-6 z-50 w-[340px] max-w-[calc(100%-32px)] h-[430px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">

          {/* Chat Header */}

          <div className="bg-green-700 text-white p-4 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="bg-white/20 p-2 rounded-full">
                <Bot size={24} />
              </div>

              <div>
                <h3 className="font-bold">
                  Tenkasi AI Assistant
                </h3>

                <p className="text-xs text-green-100">
                  Online • Tourism Support
                </p>
              </div>

            </div>

            <button onClick={() => setChatOpen(false)}>
              <X size={22} />
            </button>

          </div>

          {/* Chat Messages */}

          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.sender === "user"
                      ? "bg-green-600 text-white rounded-br-none"
                      : "bg-white text-gray-700 shadow rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>

              </div>
            ))}

          </div>

          {/* Chat Input */}

          <form
            onSubmit={sendMessage}
            className="p-3 border-t flex items-center gap-2"
          >

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about Tenkasi..."
              className="flex-1 min-w-0 px-4 py-3 bg-gray-100 rounded-full outline-none text-sm focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>

          </form>

        </div>
      )}

    </section>
  );
}
