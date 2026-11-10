
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  MapPin,
  Backpack,
  Briefcase,
  Utensils,
  CalendarDays,
  Menu,
  X
} from "lucide-react";

export default function Homenavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Every new page opens from the top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [location.pathname]);

  const menuItems = [
    { name: "Home", icon: <Home size={16} />, link: "/" },
    { name: "About", icon: <Info size={16} />, link: "/about" },
    { name: "Destination", icon: <MapPin size={16} />, link: "/destination" },
    { name: "Package", icon: <Briefcase size={16} />, link: "/tour-packages" },
    { name: "Taste Trails", icon: <Utensils size={16} />, link: "/taste-trails" },
    { name: "Reviews", icon: <Backpack size={16} />, link: "/reviews" },
    { name: "Contact", icon: <Backpack size={16} />, link: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full min-h-20
      bg-gradient-to-r from-white via-green-50 to-orange-50
      shadow-md z-[10000]">

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-0.5 sm:gap-1
          overflow-x-auto whitespace-nowrap scrollbar-hide">

          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.link;

            return (
              <Link
                key={index}
                to={item.link}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-1 px-1.5 sm:px-3 py-2
                  rounded-full text-[9px] sm:text-sm font-semibold
                  transition duration-300 shrink-0
                  ${
                    isActive
                      ? "bg-green-600 text-white"
                      : "text-slate-700 hover:bg-green-600 hover:text-white"
                  }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}

        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 text-green-800 hover:bg-green-100 rounded-lg"
        >
          <Menu size={28} />
        </button>

      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black/40 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div
            className="fixed top-0 right-0 h-screen w-72 max-w-[85%]
              bg-gradient-to-b from-white via-green-50 to-orange-50
              shadow-2xl z-[60] md:hidden
              transition-transform duration-300
              overflow-y-auto"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >

            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-5
              border-b border-green-200">

              <div className="flex items-center gap-2">
                <img
                  src="/tenkasi-logo.png"
                  alt="Tenkasi Tourism Logo"
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <h2 className="text-lg font-extrabold text-slate-800">
                    TourISM
                  </h2>
                  <p className="text-xs text-green-700">
                    Explore Tenkasi
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-green-100 text-green-800"
              >
                <X size={25} />
              </button>
            </div>

            {/* Sidebar Menu Items */}
            <nav className="flex flex-col gap-2 p-4">

              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.link;

                return (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3
                      rounded-xl font-semibold transition duration-300
                      ${
                        isActive
                          ? "bg-green-600 text-white"
                          : "text-slate-700 hover:bg-green-600 hover:text-white"
                      }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                );
              })}

            </nav>

          </div>
        </>
      )}

    </header>
  );
}
