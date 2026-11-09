
import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Info,
  MapPin,
  Backpack,
  Briefcase,
  Utensils,
  CalendarDays
} from "lucide-react";

export default function Homenavbar() {

  const menuItems = [
    { name: "Home", icon: <Home size={16} />, link: "/" },
    { name: "About", icon: <Info size={16} />, link: "/about" },
    { name: "Destination", icon: <MapPin size={16} />, link: "/destination"},
    { name: "Package", icon: <Briefcase size={16} />, link: "/tour-packages" },
    { name: "Taste Trails", icon: <Utensils size={16} />, link: "/taste-trails" },
   { name: "Reviews", icon: <Backpack size={16} />, link: "/reviews" },
    { name: "Contact", icon: <Backpack size={16} />, link: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full min-h-20
      bg-gradient-to-r from-white via-green-50 to-orange-50
      shadow-md z-50">

      <div className="max-w-7xl mx-auto px-2 sm:px-5 md:px-8
        min-h-20 flex items-center justify-between gap-2">

        {/* Logo */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14
            rounded-full bg-white p-0.5 shadow-md border border-green-200">
            <img
              src="/tenkasi-logo.png"
              alt="Tenkasi Tourism Logo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-sm sm:text-xl md:text-2xl font-extrabold text-slate-800">
              TourISM
            </h1>
            <p className="text-[8px] sm:text-xs font-medium text-green-700">
              Explore Tenkasi
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-0.5 sm:gap-1
          overflow-x-auto whitespace-nowrap scrollbar-hide">

          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              onClick={() => {
                if (item.link.startsWith("#")) {
                  setTimeout(() => {
                    document.querySelector(item.link)?.scrollIntoView({
                      behavior: "smooth"
                    });
                  }, 100);
                }
              }}
              className="flex items-center gap-1 px-1.5 sm:px-3 py-2
                rounded-full text-[9px] sm:text-sm
                text-slate-700 font-semibold
                hover:bg-green-600 hover:text-white
                transition duration-300 shrink-0"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}

        </nav>
      </div>
    </header>
  );
}
