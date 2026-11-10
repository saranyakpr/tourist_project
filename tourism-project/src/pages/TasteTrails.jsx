import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ArrowLeft,
  Utensils,
  Leaf,
  Drumstick,
  ChevronRight,
  ChevronLeft,
  ChefHat,
  Coffee,
  Sun,
  Moon,
} from "lucide-react";

import Homenavbar from "../component/Homenavbar";
import Footer from "../component/Footer";

// RESTAURANT DETAILS AND MEAL-WISE MENUS

const areas = [
  {
    name: "Courtallam Road",
    restaurants: [
      {
        id: 1,
        name: "Sri Madhuram",
        foodType: "both",
        image: "/maduram.jpg",
        location: "Courtallam Road, Tenkasi",
        menu: {
          breakfast: {
            veg: ["Idli", "Pongal", "Ghee Roast Dosa", "Poori Masala"],
            nonveg: ["Egg Dosa", "Egg Omelette"],
          },
          lunch: {
            veg: ["Veg Meals", "Sambar Rice", "Curd Rice"],
            nonveg: ["Chicken Biryani", "Chicken 65", "Chicken Curry"],
          },
          dinner: {
            veg: ["Dosa", "Parotta", "Chapati"],
            nonveg: ["Chicken Fried Rice", "Egg Fried Rice"],
          },
        },
      },
      {
        id: 2,
        name: "Aasife Biriyani",
        foodType: "both",
        image: "/aasife.jpg",
        location: "Courtallam Road, Tenkasi",
        menu: {
          breakfast: {
            veg: ["Idli", "Dosa", "Poori"],
            nonveg: ["Egg Dosa", "Egg Omelette"],
          },
          lunch: {
            veg: ["Veg Biryani", "Paneer Butter Masala", "Gobi 65"],
            nonveg: ["Chicken Biryani", "Mutton Biryani", "Chicken 65"],
          },
          dinner: {
            veg: ["Veg Fried Rice", "Paneer Masala", "Veg Noodles"],
            nonveg: ["Grill Chicken", "Tandoori Chicken", "Egg Biryani"],
          },
        },
      },
    ],
  },
  {
    name: "Old Bus Stand",
    restaurants: [
      {
        id: 3,
        name: "Raj Mess",
        foodType: "both",
        image: "/raj.jpg",
        location: "Old Bus Stand, Tenkasi",
        menu: {
          breakfast: {
            veg: ["Idli", "Dosa", "Pongal"],
            nonveg: ["Egg Omelette", "Egg Dosa"],
          },
          lunch: {
            veg: ["Veg Meals", "Sambar Rice", "Curd Rice"],
            nonveg: ["Chicken Curry", "Mutton Curry", "Fish Fry"],
          },
          dinner: {
            veg: ["Parotta", "Chapati", "Dosa"],
            nonveg: ["Chicken Biryani", "Chicken Curry", "Egg Fried Rice"],
          },
        },
      },
    ],
  },
  {
    name: "East Car Street",
    restaurants: [
      {
        id: 4,
        name: "Murali Tiffin",
        foodType: "both",
        image: "/murali.jpg",
        location: "East Car Street, Tenkasi",
        menu: {
          breakfast: {
            veg: ["Idli", "Masala Dosa", "Pongal", "Poori"],
            nonveg: ["Egg Dosa", "Egg Omelette"],
          },
          lunch: {
            veg: ["Veg Meals", "Sambar Rice", "Curd Rice"],
            nonveg: ["Chicken Curry", "Chicken Meals", "Fish Fry"],
          },
          dinner: {
            veg: ["Ghee Roast", "Onion Uthappam", "Parotta"],
            nonveg: ["Chicken Dosa", "Chicken Curry", "Egg Dosa"],
          },
        },
      },
      {
        id: 5,
        name: "Maurya",
        foodType: "both",
        image: "/maurya.jpg",
        location: "East Car Street, Tenkasi",
        menu: {
          breakfast: {
            veg: ["Idli", "Dosa", "Poori"],
            nonveg: ["Egg Omelette", "Egg Dosa"],
          },
          lunch: {
            veg: ["Veg Meals", "Paneer Butter Masala", "Gobi Manchurian"],
            nonveg: ["Chicken 65", "Chicken Gravy", "Egg Fried Rice"],
          },
          dinner: {
            veg: ["Veg Fried Rice", "Veg Noodles", "Mushroom Masala"],
            nonveg: ["Chicken Fried Rice", "Chicken Noodles", "Chicken 65"],
          },
        },
      },
    ],
  },
  {
    name: "New Bus Stand",
    restaurants: [
      {
        id: 6,
        name: "Kalari Kari Virundhu",
        foodType: "both",
        image: "/kari.avif",
        location: "New Bus Stand, Tenkasi",
        menu: {
          breakfast: {
            veg: ["Idli", "Dosa", "Pongal"],
            nonveg: ["Egg Omelette", "Egg Dosa"],
          },
          lunch: {
            veg: ["Veg Meals", "Sambar Rice", "Rasam Rice"],
            nonveg: ["Chicken Curry", "Mutton Chukka", "Fish Curry"],
          },
          dinner: {
            veg: ["Parotta", "Chapati", "Curd Rice"],
            nonveg: [
              "Chicken Fry",
              "Mutton Curry",
              "Parotta with Chicken Gravy",
            ],
          },
        },
      },
    ],
  },
  {
    name: "Kuthukalvalasai",
    restaurants: [
      {
        id: 7,
        name: "Topi Vappa",
        foodType: "both",
        image: "/topi.jpg",
        location: "Kuthukalvalasai, Tenkasi",
        menu: {
          breakfast: {
            veg: ["Idli", "Dosa", "Poori"],
            nonveg: ["Egg Dosa", "Egg Omelette"],
          },
          lunch: {
            veg: ["Veg Biryani", "Paneer Fried Rice", "Gobi 65"],
            nonveg: ["Chicken Biryani", "Mutton Biryani", "Chicken 65"],
          },
          dinner: {
            veg: ["Veg Noodles", "Veg Fried Rice", "Paneer Masala"],
            nonveg: ["Shawarma", "Grill Chicken", "Chicken Fried Rice"],
          },
        },
      },
    ],
  },
  {
    name: "Piranoor Border",
    restaurants: [
      {
        id: 8,
        name: "Border Rahmath",
        foodType: "both",
        image: "/border.jpg",
        location: "Piranoor Border, Tenkasi",
        menu: {
          breakfast: {
            veg: ["Idli", "Dosa", "Poori"],
            nonveg: ["Egg Omelette", "Egg Dosa"],
          },
          lunch: {
            veg: ["Veg Meals", "Veg Biryani", "Gobi 65"],
            nonveg: ["Mutton Biryani", "Chicken Biryani", "Mutton Chukka"],
          },
          dinner: {
            veg: ["Veg Fried Rice", "Veg Noodles", "Chapati"],
            nonveg: ["Chicken 65", "Chicken Curry", "Egg Biryani"],
          },
        },
      },
    ],
  },
  {
    name: "Housing Board",
    restaurants: [
      {
        id: 9,
        name: "Udayam Veg",
        foodType: "veg",
        image: "/udhyam.jpg",
        location: "Housing Board, Tenkasi",
        menu: {
          breakfast: {
            veg: [
              "Idli",
              "Pongal",
              "Ghee Roast",
              "Masala Dosa",
              "Poori Masala",
            ],
            nonveg: [],
          },
          lunch: {
            veg: ["South Indian Meals", "Sambar Rice", "Curd Rice", "Poriyal"],
            nonveg: [],
          },
          dinner: {
            veg: ["Dosa", "Chapati", "Veg Fried Rice", "Paneer Masala"],
            nonveg: [],
          },
        },
      },
    ],
  },
];



// FOOD IMAGES FOR HERO SLIDER

const heroSlides = [
  {
    id: 1,
    name: "Senkottai Border Parotta",
    image: "/images/senkottai%20border%20parotta.jpg",
  },
  {
    id: 2,
    name: "Chilli Parotta & Kothu Parotta",
    image: "/images/chilli-parotta.jpg",
  },
  {
    id: 3,
    name: "Naatu Kozhi Kuzhambu & Varuval",
    image: "/images/Naatu Kozhi Kuzhambu & Varuval.jpg",
  },
 
  {
    id: 5,
    name: "Kadayanallur Biryani",
    image: "/images/Kadayanallur%20Biryani.jpg",
  },
  {
    id: 6,
    name: "Puliyankudi Lemon Pickle",
    image: "/images/Puliyankudi%20Lemon%20Pickle.jpg",
  },
  {
    id: 7,
    name: "Karupatti Coffee & Sweets",
    image: "/images/Karupatti Coffee & Sweets.webp",
  },
  {
    id: 8,
    name: "Banana Chips & Local Snacks",
    image: "/images/Banana Chips & Local Snacks.jpg",
  },
];

// MEAL DETAILS

const mealDetails = [
  {
    key: "breakfast",
    title: "Breakfast",
    subtitle: "Start your day with delicious food",
    Icon: Coffee,
  },
  {
    key: "lunch",
    title: "Lunch",
    subtitle: "Enjoy a satisfying afternoon meal",
    Icon: Sun,
  },
  {
    key: "dinner",
    title: "Dinner",
    subtitle: "End your day with tasty food",
    Icon: Moon,
  },
];

// RESTAURANT CARD

function RestaurantCard({ restaurant, areaName, onClick, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-green-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-2xl"
    >
      <div className="relative h-60 shrink-0 overflow-hidden bg-green-100">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null;
        
          }}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-green-800 shadow">
          <MapPin size={13} />
          {areaName}
        </span>

        <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-2 text-xs font-bold text-green-800">
          {restaurant.foodType === "veg"
            ? "Pure Veg"
            : restaurant.foodType === "nonveg"
              ? "Non-Veg"
              : "Veg & Non-Veg"}
        </span>
      </div>

      <div className="flex flex-1 items-center justify-between gap-3 p-5">
        <div>
          <h4 className="text-xl font-extrabold text-slate-900 transition-colors group-hover:text-green-700">
            {restaurant.name}
          </h4>

          <p className="mt-2 text-sm text-slate-500">
            Explore breakfast, lunch & dinner
          </p>
        </div>

        <div className="shrink-0 rounded-full bg-green-100 p-3 text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
          <ChevronRight size={22} />
        </div>
      </div>
    </motion.article>
  );
}

// FOOD LIST

function FoodList({ foods, type }) {
  const isVeg = type === "veg";

  if (!foods || foods.length === 0) {
    return null;
  }

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {foods.map((food, index) => (
        <motion.li
          key={food}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className={`flex items-center gap-3 rounded-xl p-3 transition-transform duration-200 hover:translate-x-1 ${
            isVeg ? "bg-green-50" : "bg-orange-50"
          }`}
        >
          <span
            className={`h-3 w-3 shrink-0 rounded-full border-2 ${
              isVeg ? "border-green-600" : "border-orange-600"
            }`}
          />

          <span className="font-semibold text-slate-700">{food}</span>
        </motion.li>
      ))}
    </ul>
  );
}

// MEAL SECTION

function MealSection({ meal, restaurant }) {
  const { key, title, subtitle, Icon } = meal;
  const items = restaurant.menu[key];

  const showVeg =
    restaurant.foodType === "veg" || restaurant.foodType === "both";

  const showNonVeg =
    restaurant.foodType === "nonveg" || restaurant.foodType === "both";

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-lg"
    >
      <div className="flex items-center gap-4 bg-gradient-to-r from-green-800 to-emerald-700 p-5 text-white sm:p-6">
        <div className="rounded-2xl bg-white/20 p-3">
          <Icon size={27} />
        </div>

        <div>
          <h3 className="text-2xl font-extrabold">{title}</h3>
          <p className="mt-1 text-sm text-green-100">{subtitle}</p>
        </div>
      </div>

      <div
        className={`grid gap-6 p-5 ${
          showVeg && showNonVeg ? "md:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {showVeg && (
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Leaf className="text-green-700" size={21} />

              <h4 className="text-lg font-extrabold text-green-800">
                Vegetarian
              </h4>
            </div>

            <FoodList foods={items.veg} type="veg" />
          </div>
        )}

        {showNonVeg && (
          <div
            className={
              showVeg
                ? "border-t border-orange-100 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0"
                : ""
            }
          >
            <div className="mb-4 flex items-center gap-2">
              <Drumstick className="text-orange-600" size={21} />

              <h4 className="text-lg font-extrabold text-orange-700">
                Non-Vegetarian
              </h4>
            </div>

            <FoodList foods={items.nonveg} type="nonveg" />
          </div>
        )}
      </div>
    </motion.section>
  );
}

// MAIN COMPONENT

export default function TasteTrails() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Convert area-wise restaurants into one flat list

  const allRestaurants = areas.flatMap((area) =>
    area.restaurants.map((restaurant) => ({
      ...restaurant,
      areaName: area.name,
    }))
  );

  // AUTOMATIC FOOD IMAGE SLIDER

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => clearInterval(slider);
  }, []);

  const openRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setSelectedRestaurant(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showVeg =
    selectedRestaurant?.foodType === "veg" ||
    selectedRestaurant?.foodType === "both";

  const showNonVeg =
    selectedRestaurant?.foodType === "nonveg" ||
    selectedRestaurant?.foodType === "both";

  return (
    <>
      <Homenavbar />

      <main className="min-h-screen overflow-hidden bg-gradient-to-br from-white via-green-50 to-emerald-50 text-slate-900">

        {/* HERO SECTION - ALWAYS VISIBLE */}

        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-r from-green-950 via-green-800 to-emerald-700">

          {/* FOOD IMAGE SLIDER */}

          <AnimatePresence mode="wait">
            <motion.img
              key={heroSlides[currentSlide].id}
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].name}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = fallbackImage;
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* LIGHT OVERLAY - IMAGE CLEAR */}

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-0 bg-gradient-to-r from-green-950/40 via-black/10 to-transparent" />

          {/* HERO CONTENT */}

          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 text-center md:px-8"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-200/30 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-lime-300 backdrop-blur-md">
              <Utensils size={16} />
              Taste Trails • Tenkasi
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Explore the Taste of

              <span className="mt-2 block text-lime-300">
                Tenkasi
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-green-100 sm:text-lg">
              Discover popular food shops and restaurants in Tenkasi.
              Explore delicious dishes and enjoy the local food journey.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-white backdrop-blur-md">
              <ChefHat size={20} className="text-lime-300" />

              <span className="font-bold">
                {heroSlides[currentSlide].name}
              </span>
            </div>
          </motion.div>

          {/* PREVIOUS BUTTON */}

          <button
            type="button"
            onClick={() =>
              setCurrentSlide(
                (prev) =>
                  (prev - 1 + heroSlides.length) % heroSlides.length
              )
            }
            aria-label="Previous food image"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-3 text-white backdrop-blur-md transition hover:bg-green-700 sm:left-8"
          >
            <ChevronLeft size={28} />
          </button>

          {/* NEXT BUTTON */}

          <button
            type="button"
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
            }
            aria-label="Next food image"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-3 text-white backdrop-blur-md transition hover:bg-green-700 sm:right-8"
          >
            <ChevronRight size={28} />
          </button>

          {/* SLIDER DOTS */}

          <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
            {heroSlides.map((food, index) => (
              <button
                key={food.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-10 bg-lime-400"
                    : "w-3 bg-white/70 hover:bg-white"
                }`}
                aria-label={`Show ${food.name}`}
              />
            ))}
          </div>
        </section>

        {/* RESTAURANT LIST OR DETAILS */}

        <AnimatePresence mode="wait">
          {!selectedRestaurant ? (

            /* RESTAURANT GRID */

            <motion.section
              key="restaurant-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mx-auto min-h-screen max-w-7xl px-5 py-16 md:px-8"
            >
              <div className="mb-14 text-center">
                <p className="font-bold uppercase tracking-[0.2em] text-green-700">
                  Discover Local Restaurants
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-green-950 sm:text-4xl">
                  Explore Restaurants by Areas
                </h2>

                <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                  Choose a restaurant and explore its breakfast, lunch and
                  dinner menus.
                </p>

                <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-lime-500" />
              </div>

              {/* ALL RESTAURANTS - 3 COLUMN ANIMATED GRID */}

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                    },
                  },
                }}
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {allRestaurants.map((restaurant, index) => (
                  <motion.div
                    key={restaurant.id}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 45,
                        scale: 0.95,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.55,
                          ease: "easeOut",
                        },
                      },
                    }}
                  >
                    <RestaurantCard
                      restaurant={restaurant}
                      areaName={restaurant.areaName}
                      index={index}
                      onClick={() => openRestaurant(restaurant)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

          ) : (

            /* RESTAURANT DETAILS */

            <motion.section
              key="restaurant-details"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -35 }}
              transition={{ duration: 0.45 }}
              className="mx-auto max-w-7xl px-5 py-12 md:px-8"
            >
              <motion.button
                whileHover={{ x: -4 }}
                whileTap={{ scale: 0.96 }}
                onClick={goBack}
                className="mb-8 inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-3 font-bold text-green-800 transition hover:bg-green-700 hover:text-white"
              >
                <ArrowLeft size={19} />
                Back to Restaurants
              </motion.button>

              {/* RESTAURANT HEADER */}

              <div className="grid items-stretch overflow-hidden rounded-3xl border border-green-100 bg-white shadow-xl md:grid-cols-2">
                <div className="h-72 overflow-hidden bg-green-100 md:h-[400px]">
                  <img
                    src={selectedRestaurant.image}
                    alt={selectedRestaurant.name}
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = fallbackImage;
                    }}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-7 md:p-12">
                  <div className="flex w-fit items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                    <ChefHat size={17} />
                    Taste Trails • Tenkasi
                  </div>

                  <h2 className="mt-6 text-3xl font-extrabold text-green-950 sm:text-4xl">
                    {selectedRestaurant.name}
                  </h2>

                  <p className="mt-5 flex items-center gap-2 text-slate-600">
                    <MapPin size={20} className="shrink-0 text-green-700" />
                    {selectedRestaurant.location}
                  </p>

                  <p className="mt-5 leading-8 text-slate-600">
                    Explore the food options at {selectedRestaurant.name}.
                    Discover the available meals and enjoy the taste of Tenkasi.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {showVeg && (
                      <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                        <Leaf size={15} className="mr-1 inline" />
                        Veg Menu
                      </span>
                    )}

                    {showNonVeg && (
                      <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-800">
                        <Drumstick size={15} className="mr-1 inline" />
                        Non-Veg Menu
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* MEAL MENU */}

              <div className="mb-10 mt-16 text-center">
                <p className="font-bold uppercase tracking-[0.2em] text-green-700">
                  Discover the Specialities
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-green-950 sm:text-4xl">
                  Food Menu
                </h2>

                <p className="mt-3 text-slate-600">
                  Breakfast, lunch and dinner menus
                </p>

                <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-lime-500" />
              </div>

              <div className="space-y-8">
                {mealDetails.map((meal) => (
                  <MealSection
                    key={meal.key}
                    meal={meal}
                    restaurant={selectedRestaurant}
                  />
                ))}
              </div>

              {/* BACK BUTTON */}

              <div className="mt-12 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goBack}
                  className="inline-flex items-center gap-2 rounded-full bg-green-700 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-green-800"
                >
                  <ArrowLeft size={19} />
                  Explore Other Restaurants
                </motion.button>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

      </main>

      <Footer />
    </>
  );
}
