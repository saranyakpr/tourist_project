import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Homenavbar from "../component/Homenavbar";
import Footer from "../component/Footer";

// ---------------- TRIP TYPE OPTIONS ----------------

const tripTypes = [
  {
    id: "couple",
    title: "Couple Trip",
    description: "A relaxed getaway for two.",
    image: "/images/couple trip.jpg",
  },
  {
    id: "family",
    title: "Family Trip",
    description: "A fun and comfortable family outing.",
    image: "/images/family trip.jpg",
  },
  {
    id: "friends",
    title: "Friends Trip",
    description: "Explore Tenkasi together with friends.",
    image: "/images/friends trip.jpg",
  },
  {
    id: "office",
    title: "Office Trip",
    description: "Enjoy a refreshing trip with your colleagues.",
    image: "/images/office trip.jpg",
  },
  {
    id: "education",
    title: "Education Trip",
    description: "Plan a memorable educational tour.",
    image: "/images/education trip.jpg",
  },
  {
    id: "solo",
    title: "Solo Trip",
    description: "Explore Tenkasi at your own pace.",
    image: "/images/solo trip.jpg",
  },
];

// ---------------- BUDGET OPTIONS ----------------

const budgetOptions = [
  {
    id: "normal",
    title: "Normal Budget",
    range: "Normal Range",
    amount: "₹2,000–₹5,000",
    description: "A pocket-friendly trip with essential comforts.",
    image: "/images/Normal trip.jpg.png",
    stayImage: "/images/normal stay.png",
    foodImage: "/images/normal food.png",
    transportImage: "/images/normal transport.png",
    accent: "green",
    stay: "Budget hotel or simple homestay",
    food: "Local restaurants and regular meals",
    transport: "Shared transport or budget cab",
    included: [
      "Basic accommodation",
      "Local food options",
      "Shared or budget transport",
      "Visit to selected Tenkasi places",
    ],
    excluded: [
      "Luxury resort or premium room",
      "Private cab for the entire trip",
      "Premium dining and special activities",
    ],
    note: "Best for travellers who want to explore Tenkasi while keeping expenses low.",
  },
  {
    id: "medium",
    title: "Medium Budget",
    range: "Medium Range",
    amount: "₹5,000–₹10,000",
    description: "A comfortable trip with better stay and travel options.",
    image: "/images/Medium trip.jpg.png",
    stayImage: "/images/medium stay.png",
    foodImage: "/images/medium food.png",
    transportImage: "/images/medium transport.png",
    accent: "blue",
    stay: "Comfortable hotel or quality homestay",
    food: "A mix of local restaurants and better dining",
    transport: "Private cab for selected trips",
    included: [
      "Comfortable accommodation",
      "Better dining options",
      "Private cab for selected travel",
      "Visit to selected Tenkasi places",
    ],
    excluded: [
      "Luxury resort or premium suite",
      "High-end dining throughout the trip",
      "Extra activities not included in the plan",
    ],
    note: "A good balance of comfort, convenience and cost.",
  },
  {
    id: "luxury",
    title: "Luxury Budget",
    range: "Luxury Range",
    amount: "₹10,000+",
    description: "A premium trip with upgraded comfort and services.",
    image: "/images/Luxury trip.jpg.png",
    stayImage: "/images/luxury-stay.jpg",
    foodImage: "/images/luxury-food.jpg",
    transportImage: "/images/luxury-transport.jpg",
    accent: "purple",
    stay: "Premium resort or luxury accommodation",
    food: "Premium dining and curated food experiences",
    transport: "Private cab for a more convenient trip",
    included: [
      "Premium accommodation",
      "Premium dining options",
      "Private transport",
      "Visit to selected Tenkasi places",
      "Extra comfort and personalized planning",
    ],
    excluded: [
      "Personal shopping expenses",
      "Activities or services not listed in the final plan",
    ],
    note: "Best for travellers who prefer premium stays, private travel and extra comfort.",
  },
];

// ---------------- ANIMATION ----------------

const cardAnimation = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

const budgetAccent = {
  green: {
    border: "border-green-500",
    background: "bg-green-50",
    badge: "bg-green-100 text-green-800",
    heading: "text-green-800",
  },
  blue: {
    border: "border-blue-500",
    background: "bg-blue-50",
    badge: "bg-blue-100 text-blue-800",
    heading: "text-blue-800",
  },
  purple: {
    border: "border-purple-500",
    background: "bg-purple-50",
    badge: "bg-purple-100 text-purple-800",
    heading: "text-purple-800",
  },
};

// ---------------- MAIN COMPONENT ----------------

export default function PlanYourTrip() {
  const [step, setStep] = useState(0);

  const [tripType, setTripType] = useState("");
  const [budget, setBudget] = useState("");
  const [budgetDetailsOpen, setBudgetDetailsOpen] = useState(false);

  // Selected trip type details
  const selectedTripType = useMemo(
    () => tripTypes.find((option) => option.id === tripType),
    [tripType]
  );

  // Selected budget details
  const selectedBudget = useMemo(
    () => budgetOptions.find((option) => option.id === budget),
    [budget]
  );

  // Select trip type and move to budget
  const handleTripTypeSelect = (tripId) => {
    setTripType(tripId);
    setStep(1);
  };

  // Select budget and show its details
  const handleBudgetSelect = (budgetId) => {
    setBudget(budgetId);
    setBudgetDetailsOpen(true);
  };

  // Go back to trip type
  const handlePrevious = () => {
    if (budgetDetailsOpen) {
      setBudgetDetailsOpen(false);
      return;
    }

    setStep(0);
    setBudget("");
  };

  // Change selected budget
  const handleChangeBudget = () => {
    setBudgetDetailsOpen(false);
  };

  return (
    <>
    <Homenavbar></Homenavbar>
    <main
      className="relative isolate min-h-screen overflow-hidden bg-[#f7f8ef] bg-cover bg-center bg-fixed text-slate-900"
      style={{
        backgroundImage: "url('/images/tenkasi background.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay animation */}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-sky-100/10 via-white/10 to-emerald-100/20"
        animate={{ opacity: [0.55, 0.85, 0.55] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <section className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-5 md:py-12">

        {/* ---------------- HEADER ---------------- */}

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <p className="font-bold uppercase tracking-[0.2em] text-green-700">
            Plan Your Trip • Tenkasi
          </p>

          <h1 className="mt-3 font-serif text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
            Your trip,
            <span className="mt-2 block italic text-[#d5edbd]">
              Your way
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Choose your travel style and budget, then create your Tenkasi itinerary.
          </p>
        </motion.header>

        {/* ---------------- TWO STEP NAVIGATION ---------------- */}

        
        {/* ---------------- MAIN CONTENT ---------------- */}

        <div className="mt-6 rounded-3xl border border-white/70 bg-white/85 p-4 shadow-2xl backdrop-blur-md sm:p-8">

          <AnimatePresence mode="wait">

            <motion.div
              key={step + (budgetDetailsOpen ? "-details" : "")}
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -22 }}
              transition={{ duration: 0.28 }}
            >

              {/* ==========================================
                  STEP 1 — TRIP TYPE
              ========================================== */}

              {step === 0 && (
                <>
                  <div>
                    <h2 className="text-2xl font-bold">
                      1. Who are you travelling with?
                    </h2>

                    <p className="mt-2 text-slate-600">
                      Choose your preferred trip type to continue.
                    </p>
                  </div>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3">

                    {tripTypes.map((option, index) => (
                      <motion.button
                        key={option.id}
                        type="button"
                        onClick={() => handleTripTypeSelect(option.id)}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        initial={cardAnimation.initial}
                        animate={cardAnimation.animate}
                        transition={{ delay: index * 0.07 }}
                        className={`overflow-hidden rounded-2xl border text-left transition ${
                          tripType === option.id
                            ? "border-green-700 bg-green-50 ring-2 ring-green-200"
                            : "border-slate-200 hover:border-green-300 hover:shadow-lg"
                        }`}
                      >
                        <div className="h-48 w-full overflow-hidden bg-green-50 sm:h-52">

                          <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            src={option.image}
                            alt={option.title}
                            className="h-full w-full object-cover"
                          />

                        </div>

                        <div className="p-4">

                          <h3 className="text-lg font-bold">
                            {option.title}
                          </h3>

                          <p className="mt-1 text-sm text-slate-600">
                            {option.description}
                          </p>

                          <p className="mt-3 text-sm font-bold text-green-700">
                            Select Trip →
                          </p>

                        </div>
                      </motion.button>
                    ))}

                  </div>
                </>
              )}

              {/* ==========================================
                  STEP 2 — BUDGET
              ========================================== */}

              {step === 1 && (
                <>

                  {!budgetDetailsOpen ? (

                    /* BUDGET SELECTION */

                    <>
                      <div>
                        <h2 className="text-2xl font-bold">
                          2. Choose your budget
                        </h2>

                        <p className="mt-2 text-slate-600">
                          Select a budget to view the details of your Tenkasi trip.
                        </p>

                        {selectedTripType && (
                          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-800">
                            Selected Trip: {selectedTripType.title}
                          </div>
                        )}
                      </div>

                      <div className="mt-6 grid items-stretch gap-5 md:grid-cols-3">

                        {budgetOptions.map((option, index) => (
                          <motion.button
                            key={option.id}
                            type="button"
                            onClick={() => handleBudgetSelect(option.id)}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            initial={cardAnimation.initial}
                            animate={cardAnimation.animate}
                            transition={{ delay: index * 0.08 }}
                            className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-white text-left transition hover:border-green-300 hover:shadow-lg ${
                              budget === option.id
                                ? "border-green-600 ring-2 ring-green-100"
                                : "border-slate-200"
                            }`}
                          >

                            <div className="h-[240px] w-full shrink-0 overflow-hidden bg-slate-100 sm:h-[300px]">

                              <motion.img
                                whileHover={{ scale: 1.04 }}
                                transition={{ duration: 0.3 }}
                                src={option.image}
                                alt={option.title}
                                className="h-full w-full object-cover"
                              />

                            </div>

                            <div className="flex flex-1 flex-col p-4">

                              <p className="font-semibold text-green-700">
                                {option.range}
                              </p>

                              <h3 className="mt-2 text-2xl font-extrabold">
                                {option.amount}
                              </h3>

                              <p className="mt-2 text-sm text-slate-600">
                                {option.description}
                              </p>

                              <p className="mt-auto pt-3 text-sm font-semibold text-green-700">
                                View budget details →
                              </p>

                            </div>

                          </motion.button>
                        ))}

                      </div>
                    </>

                  ) : (

                    /* SELECTED BUDGET DETAILS */

                    <AnimatePresence mode="wait">

                      {selectedBudget && (
                        <motion.section
                          key={selectedBudget.id}
                          initial={{ opacity: 0, x: 25 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -25 }}
                          transition={{ duration: 0.3 }}
                        >

                          <button
                            type="button"
                            onClick={handleChangeBudget}
                            className="mb-5 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                          >
                            ← Back to budgets
                          </button>

                          {/* Selected budget overview */}

                          <div
                            className={`rounded-3xl border ${
                              budgetAccent[selectedBudget.accent].border
                            } ${
                              budgetAccent[selectedBudget.accent].background
                            } p-5 sm:p-7`}
                          >

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                              <div>

                                <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                                  Your selected plan
                                </p>

                                <h3 className="mt-1 text-2xl font-extrabold">
                                  {selectedBudget.title}
                                </h3>

                                <p className="mt-1 text-slate-600">
                                  {selectedBudget.note}
                                </p>

                              </div>

                              <span
                                className={`w-fit rounded-full px-4 py-2 text-sm font-bold ${
                                  budgetAccent[selectedBudget.accent].badge
                                }`}
                              >
                                {selectedBudget.amount} / person
                              </span>

                            </div>

                            {/* Accommodation, Food and Transport */}

                            <div className="mt-6 grid gap-4 md:grid-cols-3">

                              {[
                                {
                                  title: "Accommodation",
                                  image: selectedBudget.stayImage,
                                  description: selectedBudget.stay,
                                },
                                {
                                  title: "Food",
                                  image: selectedBudget.foodImage,
                                  description: selectedBudget.food,
                                },
                                {
                                  title: "Transport",
                                  image: selectedBudget.transportImage,
                                  description: selectedBudget.transport,
                                },
                              ].map((item) => (

                                <div
                                  key={item.title}
                                  className="rounded-2xl bg-white p-4 shadow-sm"
                                >

                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-36 w-full rounded-xl object-cover"
                                  />

                                  <h4 className="mt-3 font-bold">
                                    {item.title}
                                  </h4>

                                  <p className="mt-1 text-sm text-slate-600">
                                    {item.description}
                                  </p>

                                </div>

                              ))}

                            </div>

                            {/* Included and Excluded */}

                            <div className="mt-6 grid gap-5 md:grid-cols-2">

                              <div className="rounded-2xl bg-white p-5">

                                <h4
                                  className={`text-lg font-bold ${
                                    budgetAccent[selectedBudget.accent].heading
                                  }`}
                                >
                                  Included in this budget
                                </h4>

                                <ul className="mt-3 space-y-2 text-sm text-slate-700">

                                  {selectedBudget.included.map((item) => (
                                    <li key={item} className="flex gap-2">
                                      <span className="font-bold text-green-600">
                                        ✓
                                      </span>
                                      <span>{item}</span>
                                    </li>
                                  ))}

                                </ul>

                              </div>

                              <div className="rounded-2xl bg-white p-5">

                                <h4 className="text-lg font-bold text-slate-800">
                                  Not included
                                </h4>

                                <ul className="mt-3 space-y-2 text-sm text-slate-700">

                                  {selectedBudget.excluded.map((item) => (
                                    <li key={item} className="flex gap-2">
                                      <span className="font-bold text-rose-500">
                                        ×
                                      </span>
                                      <span>{item}</span>
                                    </li>
                                  ))}

                                </ul>

                              </div>

                            </div>

                            <p className="mt-4 text-xs leading-5 text-slate-500">
                              Budget ranges are indicative per-person estimates.
                              Final cost may change based on travel date, number
                              of travellers, availability and selected services.
                            </p>

                          </div>

                        </motion.section>
                      )}

                    </AnimatePresence>

                  )}

                </>
              )}

            </motion.div>

          </AnimatePresence>

          {/* ---------------- BOTTOM NAVIGATION ---------------- */}

          <div className="mt-8 flex justify-between gap-3 border-t border-slate-100 pt-5">

            <button
              type="button"
              onClick={handlePrevious}
              disabled={step === 0 && !budgetDetailsOpen}
              className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Back
            </button>

            {step === 1 && budgetDetailsOpen && (
              <button
                type="button"
                onClick={handleChangeBudget}
                className="rounded-full bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Change Budget
              </button>
            )}

          </div>

        </div>

      </section>

    </main>
    <Footer></Footer>
    </>
  );
}