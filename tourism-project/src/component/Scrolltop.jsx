
import React, { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function Scrolltop() {

  const [visible, setVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setVisible(currentScrollY > 100);

      if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      } else if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (scrollDirection === "down") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {visible && (
        <button
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-[100]
          w-12 h-12 bg-green-600 hover:bg-green-700
          text-white rounded-full shadow-xl
          flex items-center justify-center
          transition-all duration-300 hover:scale-110"
          aria-label={
            scrollDirection === "down"
              ? "Scroll to bottom"
              : "Scroll to top"
          }
        >
          {scrollDirection === "down" ? (
            <ArrowDown size={25} />
          ) : (
            <ArrowUp size={25} />
          )}
        </button>
      )}
    </>
  );
}
