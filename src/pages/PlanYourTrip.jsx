
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const tripTypes = [
  { id: "couple", title: "Couple Trip", description: "A relaxed getaway for two.", image: "/images/couple trip.jpg" },
  { id: "family", title: "Family Trip", description: "A fun and comfortable family outing.", image: "/images/family trip.jpg" },
  { id: "friends", title: "Friends Trip", description: "Explore Tenkasi together with friends.", image: "/images/friends trip.jpg" },
  { id: "office", title: "Office Trip", description: "Enjoy a refreshing trip with your colleagues.", image: "/images/office trip.jpg" },
  { id: "education", title: "Education Trip", description: "Plan a memorable educational tour.", image: "/images/education trip.jpg" },
  { id: "solo", title: "Solo Trip", description: "Explore Tenkasi at your own pace.", image: "/images/solo trip.jpg" },
];

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
    included: ["Basic accommodation", "Local food options", "Shared or budget transport", "Visit to selected Tenkasi places"],
    excluded: ["Luxury resort or premium room", "Private cab for the entire trip", "Premium dining and special activities"],
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
    included: ["Comfortable accommodation", "Better dining options", "Private cab for selected travel", "Visit to selected Tenkasi places"],
    excluded: ["Luxury resort or premium suite", "High-end dining throughout the trip", "Extra activities not included in the plan"],
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
    included: ["Premium accommodation", "Premium dining options", "Private transport", "Visit to selected Tenkasi places", "Extra comfort and personalized planning"],
    excluded: ["Personal shopping expenses", "Activities or services not listed in the final plan"],
    note: "Best for travellers who prefer premium stays, private travel and extra comfort.",
  },
];

const places = [
  { name: "Courtallam Falls", image: "/images/coutralam.jpg", description: "Enjoy the famous waterfalls and refreshing nature." },
  { name: "Papanasam", image: "/images/papanasam.jpg", description: "Explore scenic views, river and green surroundings." },
  { name: "Kasi Viswanathar Temple", image: "/images/Kasi vishuvantham.jpg", description: "Visit the historic temple in Tenkasi town." },
  { name: "Senkottai", image: "/images/senkottai.jpg", description: "Discover the beautiful town and nearby landscapes." },
  { name: "Tenkasi Town", image: "/images/tenkasi area.jpg", description: "Explore local attractions and town life." },
];

const steps = ["Trip Type", "Budget", "Trip Details", "Places", "Preferences", "Itinerary"];

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100";

const labelClass = "block text-sm font-semibold text-slate-700";

const cardAnimation = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

const budgetAccent = {
  green: { border: "border-green-500", background: "bg-green-50", badge: "bg-green-100 text-green-800", heading: "text-green-800" },
  blue: { border: "border-blue-500", background: "bg-blue-50", badge: "bg-blue-100 text-blue-800", heading: "text-blue-800" },
  purple: { border: "border-purple-500", background: "bg-purple-50", badge: "bg-purple-100 text-purple-800", heading: "text-purple-800" },
};

const tripDetailSlides = [
  { image: "/images/tenkasi area.jpg", alt: "Scenic view of Tenkasi town and green surroundings", title: "Tenkasi Town" },
  { image: "/images/coutralam.jpg", alt: "Courtallam waterfalls surrounded by greenery", title: "Courtallam Falls" },
  { image: "/images/papanasam.jpg", alt: "Papanasam scenic river and green hills", title: "Papanasam" },
  { image: "/images/Kasi vishuvantham.jpg", alt: "Kasi Viswanathar Temple in Tenkasi", title: "Kasi Viswanathar Temple" },
  { image: "/images/senkottai.jpg", alt: "Senkottai town and surrounding hills", title: "Senkottai" },
];

export default function PlanYourTrip() {
  const [step, setStep] = useState(0);
  const [tripDetailSlide, setTripDetailSlide] = useState(0);

  const [tripType, setTripType] = useState("");
  const [budget, setBudget] = useState("");
  const [budgetDetailsOpen, setBudgetDetailsOpen] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [startDate, setStartDate] = useState("");
  const [days, setDays] = useState("2");
  const [travellers, setTravellers] = useState("2");

  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [customPlaceName, setCustomPlaceName] = useState("");
  const [showCustomPlace, setShowCustomPlace] = useState(false);
  const [placeSearch, setPlaceSearch] = useState("");

  const [stay, setStay] = useState("Standard hotel");
  const [transport, setTransport] = useState("Cab required");
  const [food, setFood] = useState("Local food");

  const [showEnquiry, setShowEnquiry] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (step !== 2) return;

    const timer = window.setInterval(() => {
      setTripDetailSlide((current) => (current + 1) % tripDetailSlides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [step]);

  const selectedBudget = useMemo(
    () => budgetOptions.find((option) => option.id === budget),
    [budget]
  );

  const selectedTripType = useMemo(
    () => tripTypes.find((option) => option.id === tripType),
    [tripType]
  );

  const budgetEstimate = useMemo(() => {
    const people = Number(travellers);

    if (budget === "normal") {
      return { low: 2000 * people, high: 5000 * people, label: "Estimated total" };
    }

    if (budget === "medium") {
      return { low: 5000 * people, high: 10000 * people, label: "Estimated total" };
    }

    if (budget === "luxury") {
      return { low: 10000 * people, high: null, label: "Estimated starting total" };
    }

    return null;
  }, [budget, travellers]);

  const formatINR = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  const togglePlace = (place) => {
    setSelectedPlaces((current) =>
      current.includes(place)
        ? current.filter((item) => item !== place)
        : [...current, place]
    );
  };

  const addCustomPlace = () => {
    const place = customPlaceName.trim();
    if (!place) return;

    setSelectedPlaces((current) =>
      current.some((item) => item.toLowerCase() === place.toLowerCase())
        ? current
        : [...current, place]
    );

    setCustomPlaceName("");
  };

  const nextStep = () => setStep((current) => Math.min(current + 1, 5));

  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 0));

    if (step === 2) {
      setBudgetDetailsOpen(false);
    }
  };

  const validMobile = /^[6-9]\d{9}$/.test(mobile);

  const canContinue =
    (step === 0 && Boolean(tripType)) ||
    (step === 1 && Boolean(budget) && budgetDetailsOpen) ||
    (step === 2 && name.trim().length > 1 && validMobile && Boolean(startDate)) ||
    (step === 3 && selectedPlaces.length > 0) ||
    step === 4;

  const handleBudgetSelect = (budgetId) => {
    setBudget(budgetId);
    setBudgetDetailsOpen(true);
  };

  const handleEnquiry = () => setShowEnquiry(true);

  const submitEnquiry = () => {
    alert(
      `Trip enquiry preview ready!\nName: ${name}\nMobile: ${mobile}\nEmail: ${email || "Not provided"}\nBudget: ${selectedBudget?.title || "Not selected"} (${selectedBudget?.amount || ""})\nDate: ${startDate}\nPlaces: ${selectedPlaces.join(", ")}\nMessage: ${message || "None"}`
    );

    setShowEnquiry(false);
  };

  return (
    <main
      className="relative isolate min-h-screen overflow-hidden bg-[#f7f8ef] bg-cover bg-center bg-fixed text-slate-900"
      style={{
        backgroundImage: "url('public/images/tenkasi background.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-sky-100/10 via-white/10 to-emerald-100/20"
        animate={{ opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <section className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-5 md:py-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <p className="font-bold uppercase tracking-[0.2em] text-green-700">
            Plan Your Trip • Tenkasi
          </p>

          {/* UPDATED HOME PAGE HEADING STYLE */}
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

        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((label, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-xl px-3 py-3 text-center text-sm font-semibold transition-colors ${
                index === step
                  ? "bg-green-700 text-white shadow-md"
                  : index < step
                  ? "bg-green-100 text-green-800"
                  : "bg-white/80 text-slate-700 shadow-sm backdrop-blur-md"
              }`}
            >
              <span className="mr-1">{index + 1}.</span>
              {label}
            </motion.div>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-white/70 bg-white/85 p-4 shadow-2xl backdrop-blur-md sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -22 }}
              transition={{ duration: 0.28 }}
            >
              {/* STEP 1 — TRIP TYPE */}
              {step === 0 && (
                <>
                  <h2 className="text-2xl font-bold">
                    1. Who are you travelling with?
                  </h2>
                  <p className="mt-2 text-slate-600">
                    Choose your preferred trip type to continue.
                  </p>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
                    {tripTypes.map((option, index) => (
                      <motion.button
                        key={option.id}
                        type="button"
                        onClick={() => {
                          setTripType(option.id);
                          setStep(1);
                        }}
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
                          <h3 className="text-lg font-bold">{option.title}</h3>
                          <p className="mt-1 text-sm text-slate-600">
                            {option.description}
                          </p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </>
              )}

              {/* STEP 2 — BUDGET */}
              {step === 1 && (
                <>
                  {!budgetDetailsOpen ? (
                    <>
                      <h2 className="text-2xl font-bold">2. Choose your budget</h2>
                      <p className="mt-2 text-slate-600">
                        Select a budget to view the details of your Tenkasi trip.
                      </p>

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
                            className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left transition hover:border-green-300 hover:shadow-lg"
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
                            onClick={() => setBudgetDetailsOpen(false)}
                            className="mb-5 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                          >
                            ← Back to budgets
                          </button>

                          <div className={`rounded-3xl border ${budgetAccent[selectedBudget.accent].border} ${budgetAccent[selectedBudget.accent].background} p-5 sm:p-7`}>
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
                              <span className={`w-fit rounded-full px-4 py-2 text-sm font-bold ${budgetAccent[selectedBudget.accent].badge}`}>
                                {selectedBudget.amount} / person
                              </span>
                            </div>

                            <div className="mt-6 grid gap-4 md:grid-cols-3">
                              {[
                                { title: "Accommodation", image: selectedBudget.stayImage, description: selectedBudget.stay },
                                { title: "Food", image: selectedBudget.foodImage, description: selectedBudget.food },
                                { title: "Transport", image: selectedBudget.transportImage, description: selectedBudget.transport },
                              ].map((item) => (
                                <div key={item.title} className="rounded-2xl bg-white p-4 shadow-sm">
                                  <img src={item.image} alt={item.title} className="h-36 w-full rounded-xl object-cover" />
                                  <h4 className="mt-3 font-bold">{item.title}</h4>
                                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                                </div>
                              ))}
                            </div>

                            <div className="mt-6 grid gap-5 md:grid-cols-2">
                              <div className="rounded-2xl bg-white p-5">
                                <h4 className={`text-lg font-bold ${budgetAccent[selectedBudget.accent].heading}`}>
                                  Included in this budget
                                </h4>
                                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                  {selectedBudget.included.map((item) => (
                                    <li key={item} className="flex gap-2">
                                      <span className="font-bold text-green-600">✓</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="rounded-2xl bg-white p-5">
                                <h4 className="text-lg font-bold text-slate-800">Not included</h4>
                                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                  {selectedBudget.excluded.map((item) => (
                                    <li key={item} className="flex gap-2">
                                      <span className="font-bold text-rose-500">×</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <p className="mt-4 text-xs leading-5 text-slate-500">
                              Budget ranges are indicative per-person estimates. Final cost may change based on travel date, number of travellers, availability and selected services.
                            </p>
                          </div>
                        </motion.section>
                      )}
                    </AnimatePresence>
                  )}
                </>
              )}

              {/* STEP 3 — TRIP DETAILS */}
              {step === 2 && (
                <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
                  <motion.aside
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45 }}
                    className="relative isolate min-h-[580px] overflow-hidden rounded-[28px] bg-slate-900 text-white shadow-xl"
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={tripDetailSlides[tripDetailSlide].image}
                        src={tripDetailSlides[tripDetailSlide].image}
                        alt={tripDetailSlides[tripDetailSlide].alt}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 -z-20 h-full w-full object-cover"
                      />
                    </AnimatePresence>

                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/30 via-slate-900/35 to-emerald-950/95" />

                    <div className="flex h-full min-h-[580px] flex-col justify-between p-6 sm:p-8">
                      <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-slate-800 shadow">
                          <span aria-hidden="true">⌖</span>
                          Tenkasi, Tamil Nadu
                        </span>

                        <h2 className="mt-8 max-w-sm text-4xl font-black leading-tight sm:text-5xl">
                          Tell us about your
                          <span className="mt-1 block text-amber-300">Trip Details</span>
                        </h2>

                        <p className="mt-5 max-w-sm text-base leading-7 text-white/90">
                          A few details help us create a memorable Tenkasi experience around your travel plans.
                        </p>
                      </div>

                      <div>
                        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                          <span className="text-2xl" aria-hidden="true">✦</span>
                          <div>
                            <p className="font-bold">Your journey, your way</p>
                            <p className="mt-1 text-sm text-white/80">
                              A trip plan shaped around your dates and group.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 border-t border-white/25 pt-5 text-center">
                          {[["♧", "Flexible", "Planning"], ["♙", "Custom", "Experience"], ["✓", "Explore", "Tenkasi"]].map(([icon, lineOne, lineTwo]) => (
                            <div key={lineOne} className="px-1">
                              <span className="text-2xl" aria-hidden="true">{icon}</span>
                              <p className="mt-2 text-sm font-semibold leading-5">
                                {lineOne}<br />{lineTwo}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.aside>

                  <motion.section
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 }}
                    className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl sm:p-7 lg:p-8"
                  >
                    <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 pb-5">
                      <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-extrabold tracking-wide text-emerald-800">
                        STEP 03 OF 06
                      </span>
                      <span className="hidden h-7 w-px bg-slate-300 sm:block" />
                      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                        Trip Details
                      </h2>
                    </div>

                    <div className="mt-5 flex items-start gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-xl text-emerald-800">✧</span>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">Contact &amp; Travel Details</h3>
                        <p className="mt-1 text-sm text-slate-500">Share your basic details and travel plan.</p>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-x-5 gap-y-5 sm:grid-cols-2">
                      <label className={labelClass}>
                        Full Name <span className="text-rose-500">*</span>
                        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your full name" autoComplete="name" className={`${inputClass} mt-2 rounded-xl border-slate-300 py-3.5`} />
                      </label>

                      <label className={labelClass}>
                        Mobile Number <span className="text-rose-500">*</span>
                        <input
                          value={mobile}
                          onChange={(event) => setMobile(event.target.value.replace(/\D/g, "").slice(0, 10))}
                          inputMode="numeric"
                          autoComplete="tel-national"
                          placeholder="Enter 10-digit number"
                          className={`${inputClass} mt-2 rounded-xl border-slate-300 py-3.5`}
                        />
                        {mobile && !validMobile && (
                          <span className="mt-1.5 block text-xs font-medium text-rose-600">Enter a valid 10-digit mobile number.</span>
                        )}
                      </label>

                      <label className={labelClass}>
                        Travel Date <span className="text-rose-500">*</span>
                        <input type="date" min={new Date().toISOString().split("T")[0]} value={startDate} onChange={(event) => setStartDate(event.target.value)} className={`${inputClass} mt-2 rounded-xl border-slate-300 py-3.5`} />
                      </label>

                      <label className={labelClass}>
                        Trip Duration <span className="text-rose-500">*</span>
                        <select value={days} onChange={(event) => setDays(event.target.value)} className={`${inputClass} mt-2 rounded-xl border-slate-300 py-3.5`}>
                          <option value="1">1 day</option>
                          <option value="2">2 days</option>
                          <option value="3">3 days</option>
                          <option value="4">4 days</option>
                        </select>
                      </label>

                      <fieldset className="sm:col-span-2">
                        <legend className={`${labelClass} mb-3`}>
                          Number of Travellers <span className="text-rose-500">*</span>
                        </legend>
                        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                          {["1", "2", "3", "4", "5"].map((count) => {
                            const selected = travellers === count;
                            return (
                              <motion.button
                                key={count}
                                type="button"
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setTravellers(count)}
                                aria-pressed={selected}
                                className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-bold transition ${
                                  selected
                                    ? "border-emerald-800 bg-emerald-800 text-white shadow-md"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-emerald-400 hover:bg-emerald-50"
                                }`}
                              >
                                <span aria-hidden="true">♙</span>
                                {count === "5" ? "5+" : count}
                              </motion.button>
                            );
                          })}
                        </div>
                      </fieldset>
                    </div>

                    <div className="mt-6 rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-lime-50 p-4 sm:p-5">
                      <p className="font-extrabold text-slate-900">Your Trip at a Glance</p>
                      <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-3">
                        <div className="flex items-center gap-2"><span className="text-lg text-emerald-800">▦</span>{days} {days === "1" ? "Day" : "Days"}</div>
                        <div className="flex items-center gap-2"><span className="text-lg text-emerald-800">♙</span>{travellers === "5" ? "5+ Travellers" : `${travellers} ${travellers === "1" ? "Traveller" : "Travellers"}`}</div>
                        <div className="flex items-center gap-2"><span className="text-lg text-emerald-800">⌖</span>Tenkasi</div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                      <button type="button" onClick={previousStep} className="rounded-full border border-emerald-800 px-5 py-3 font-bold text-emerald-900 transition hover:bg-emerald-50">
                        ← Previous
                      </button>
                      <button type="button" onClick={nextStep} disabled={!canContinue} className="rounded-full bg-emerald-800 px-6 py-3 font-bold text-white shadow-sm transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-40">
                        Continue →
                      </button>
                    </div>
                  </motion.section>
                </div>
              )}

              {/* STEP 4 — PLACES */}
              {step === 3 && (
                <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-emerald-100 pb-3">
                    <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-2 text-[11px] font-extrabold tracking-wide text-emerald-800">STEP 04 OF 06</span>
                    <div>
                      <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">Choose places for your Tenkasi trip</h2>
                      <p className="mt-1 text-xs text-slate-500">Select from our suggestions or add a place you already know.</p>
                    </div>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
                    <label className="relative block">
                      <span className="sr-only">Search places in Tenkasi</span>
                      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">⌕</span>
                      <input value={placeSearch} onChange={(event) => setPlaceSearch(event.target.value)} placeholder="Search any place in Tenkasi..." className={`${inputClass} rounded-xl py-2.5 pl-9 text-sm`} />
                    </label>
                    <button type="button" onClick={() => setShowCustomPlace((open) => !open)} className="rounded-xl border border-emerald-700 px-4 py-2.5 text-sm font-bold text-emerald-800 transition hover:bg-emerald-50">
                      ＋ Add custom place
                    </button>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-xs text-emerald-950">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-base text-emerald-800">⌖</span>
                    <p><strong>Already know a spot?</strong> Add its name and include it in your itinerary.</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {places.filter((place) => `${place.name} ${place.description}`.toLowerCase().includes(placeSearch.trim().toLowerCase())).map((place, index) => {
                      const isSelected = selectedPlaces.includes(place.name);

                      return (
                        <React.Fragment key={place.name}>
                          <motion.button
                            type="button"
                            onClick={() => togglePlace(place.name)}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.985 }}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.04, duration: 0.22 }}
                            aria-pressed={isSelected}
                            className={`group overflow-hidden rounded-xl border text-left transition ${
                              isSelected
                                ? "border-emerald-500 bg-emerald-50 ring-1 ring-emerald-200 shadow-sm"
                                : "border-slate-200 bg-white hover:border-emerald-300 hover:shadow-md"
                            }`}
                          >
                            <div className="relative h-24 overflow-hidden bg-emerald-50 sm:h-28">
                              <motion.img src={place.image} alt={place.name} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="h-full w-full object-cover" />
                              <span className={`absolute right-2 top-2 rounded-full px-2 py-1 text-[10px] font-extrabold shadow-sm ${isSelected ? "bg-emerald-700 text-white" : "bg-white text-emerald-800"}`}>
                                {isSelected ? "✓ Selected" : "+ Add place"}
                              </span>
                            </div>
                            <div className="p-2.5">
                              <h3 className="text-xs font-extrabold text-slate-900 sm:text-sm">{place.name}</h3>
                              <p className="mt-1 text-[10px] leading-4 text-slate-600 sm:text-[11px]">{place.description}</p>
                            </div>
                          </motion.button>

                          {index === 2 && showCustomPlace && (
                            <motion.div
                              initial={{ opacity: 0, x: 12, scale: 0.97 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              exit={{ opacity: 0, x: 12, scale: 0.97 }}
                              transition={{ duration: 0.22 }}
                              className="flex min-h-[210px] flex-col rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-4 shadow-md ring-1 ring-emerald-100"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-800 text-xl text-white shadow-sm">⌖</span>
                                <button type="button" onClick={() => setShowCustomPlace(false)} aria-label="Close custom place form" className="grid h-8 w-8 place-items-center rounded-full bg-white text-lg text-slate-500 shadow-sm transition hover:bg-emerald-100 hover:text-slate-900">×</button>
                              </div>
                              <h3 className="mt-3 text-base font-extrabold text-slate-900">Add custom</h3>
                              <p className="mt-1 text-xs leading-5 text-slate-600">Add a place you already know.</p>
                              <form onSubmit={(event) => { event.preventDefault(); addCustomPlace(); }} className="mt-3 flex flex-1 flex-col gap-2">
                                <label className="sr-only" htmlFor="custom-destination-input">Custom place name</label>
                                <input id="custom-destination-input" value={customPlaceName} onChange={(event) => setCustomPlaceName(event.target.value)} placeholder="e.g. Thirumalai Kovil" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
                                <button type="submit" disabled={!customPlaceName.trim()} className="mt-auto inline-flex items-center justify-center rounded-lg bg-emerald-800 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-40">Add to trip →</button>
                              </form>
                            </motion.div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-emerald-100 pt-3">
                    <div className="flex flex-wrap items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-900">
                      <span>⌖</span>
                      <span>{selectedPlaces.length} place{selectedPlaces.length === 1 ? "" : "s"} selected</span>
                      {selectedPlaces.length > 0 && (
                        <span className="ml-1 flex flex-wrap gap-1.5">
                          {selectedPlaces.map((place) => (
                            <span key={place} className="rounded-full bg-white px-2 py-1 text-[10px] ring-1 ring-emerald-200">
                              {place}
                              <button type="button" onClick={() => togglePlace(place)} aria-label={`Remove ${place}`} className="ml-1 font-extrabold hover:text-rose-600">×</button>
                            </span>
                          ))}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.section>
              )}

              {/* STEP 5 — PREFERENCES */}
              {step === 4 && (
                <>
                  <p className="font-bold uppercase tracking-widest text-green-700">Step 05</p>
                  <h2 className="mt-2 text-2xl font-bold">Make the trip comfortable</h2>
                  <p className="mt-2 text-slate-600">Select your stay, transport and food preferences.</p>

                  <div className="mt-6 grid gap-5 md:grid-cols-3">
                    {[
                      { title: "Accommodation", value: stay, setValue: setStay, options: ["Standard hotel", "Homestay", "Resort"], image: "/images/stay.jpg" },
                      { title: "Travel Transport", value: transport, setValue: setTransport, options: ["Cab required", "No transport required"], image: "/images/transport.jpg" },
                      { title: "Food preference", value: food, setValue: setFood, options: ["Local food", "Vegetarian", "Non-vegetarian"], image: "/images/food.jpg" },
                    ].map((item, index) => (
                      <motion.div key={item.title} initial={cardAnimation.initial} animate={cardAnimation.animate} transition={{ delay: index * 0.1 }} whileHover={{ y: -4 }} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                        <div className="h-44 overflow-hidden bg-green-50">
                          <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} src={item.image} alt={item.title} className="h-full w-full object-cover" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold">{item.title}</h3>
                          <select value={item.value} onChange={(event) => item.setValue(event.target.value)} className={inputClass}>
                            {item.options.map((option) => <option key={option}>{option}</option>)}
                          </select>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}

              {/* STEP 6 — ITINERARY REVIEW */}
              {step === 5 && (
                <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                  <div>
                    <p className="font-bold uppercase tracking-widest text-green-700">Step 06</p>
                    <h2 className="mt-2 text-2xl font-bold">Your Tenkasi trip preview</h2>
                    <p className="mt-2 text-slate-600">Review your details before sending the enquiry.</p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-green-50 p-5">
                        <p className="text-sm text-green-800">Trip type</p>
                        <p className="mt-1 text-xl font-bold">{selectedTripType?.title || "Not selected"}</p>
                      </div>
                      <div className="rounded-2xl bg-green-50 p-5">
                        <p className="text-sm text-green-800">Budget</p>
                        <p className="mt-1 text-xl font-bold">{selectedBudget?.title || "Not selected"}</p>
                        <p className="mt-1 text-slate-600">{selectedBudget?.amount || ""}</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-5 sm:col-span-2">
                        <p className="font-semibold">Contact & travel details</p>
                        <p className="mt-2 text-slate-600">{name} · {mobile}</p>
                        <p className="mt-1 text-slate-600">{startDate} · {days} day(s) · {travellers} traveller(s)</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-5 sm:col-span-2">
                        <p className="font-semibold">Selected places</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {selectedPlaces.map((place) => (
                            <span key={place} className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">{place}</span>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-5 sm:col-span-2">
                        <p className="font-semibold">Preferences</p>
                        <p className="mt-2 text-slate-600">{stay} · {transport} · {food}</p>
                      </div>
                    </div>
                  </div>

                  <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="overflow-hidden rounded-3xl bg-green-50">
                    <img src="/images/tenkasi itinerary.jpg" alt="Tenkasi trip" className="h-64 w-full object-cover" />
                    <div className="p-5">
                      <p className="text-sm font-bold uppercase tracking-wider text-green-700">Trip summary</p>
                      <p className="mt-2 text-xl font-bold">{selectedPlaces.length} place(s) selected</p>
                      <p className="mt-1 text-sm text-slate-600">{selectedPlaces.join(" • ")}</p>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-between gap-3 border-t border-slate-100 pt-5">
            <button type="button" onClick={previousStep} disabled={step === 0} className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-40">
              Back
            </button>

            {step >= 1 && step < 5 && (
              <button type="button" onClick={nextStep} disabled={!canContinue} className="rounded-full bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-40">
                {step === 4 ? "Review Itinerary" : "Continue"}
              </button>
            )}

            {step === 5 && (
              <button type="button" onClick={handleEnquiry} className="rounded-full bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800">
                Send Enquiry
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ENQUIRY MODAL */}
      <AnimatePresence>
        {showEnquiry && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setShowEnquiry(false);
            }}
          >
            <motion.section
              role="dialog"
              aria-modal="true"
              aria-labelledby="enquiry-title"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[28px] bg-white shadow-2xl md:grid-cols-[0.8fr_1.2fr]"
            >
              <button type="button" aria-label="Close enquiry" onClick={() => setShowEnquiry(false)} className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-xl text-slate-700 shadow-sm transition hover:bg-slate-50">×</button>

              <aside className="relative hidden min-h-[620px] overflow-hidden bg-emerald-950 text-white md:block">
                <img src="/images/tenkasi area.jpg" alt="Tenkasi waterfalls" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-emerald-950/45 to-emerald-950/95" />
                <div className="relative flex h-full flex-col justify-between p-8">
                  <div>
                    <p className="text-sm font-extrabold tracking-wide">TENKASI TOURISM</p>
                    <p className="mt-1 text-xs text-white/80">Explore · Stay · Experience</p>
                    <h2 className="mt-12 text-4xl font-black leading-tight">
                      Send Your
                      <span className="mt-1 block text-amber-300">Trip Enquiry</span>
                    </h2>
                    <p className="mt-5 max-w-xs leading-7 text-white/85">Share a few details and we’ll help shape your Tenkasi getaway.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t border-white/25 pt-5 text-center text-xs font-semibold">
                    <div><span className="block text-xl">✦</span>Quick<br />Response</div>
                    <div><span className="block text-xl">♧</span>Personalized<br />Plans</div>
                    <div><span className="block text-xl">✓</span>Travel<br />Planning</div>
                  </div>
                </div>
              </aside>

              <div className="p-5 sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700">Tenkasi Tourism</p>
                <h2 id="enquiry-title" className="mt-2 text-3xl font-black text-slate-900">
                  Trip <span className="text-emerald-700">Enquiry</span>
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">Review your selected trip and add any details you’d like us to know.</p>

                <div className="mt-5 rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-lime-50 p-4">
                  <h3 className="font-extrabold text-slate-900">Your Trip Summary</h3>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                    <div><p className="text-slate-500">Trip Type</p><p className="mt-1 font-bold">{selectedTripType?.title || "—"}</p></div>
                    <div><p className="text-slate-500">Travel Date</p><p className="mt-1 font-bold">{startDate || "—"}</p></div>
                    <div><p className="text-slate-500">Duration</p><p className="mt-1 font-bold">{days} {days === "1" ? "Day" : "Days"}</p></div>
                    <div><p className="text-slate-500">Travellers</p><p className="mt-1 font-bold">{travellers === "5" ? "5+" : travellers}</p></div>
                  </div>

                  <div className="mt-4 border-t border-emerald-100 pt-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Selected Budget</p>
                    <p className="mt-1 font-bold text-emerald-900">
                      {selectedBudget?.title || "Not selected"} {selectedBudget?.amount ? `· ${selectedBudget.amount} per person` : ""}
                    </p>

                    {budgetEstimate && (
                      <div className="mt-3 rounded-xl border border-emerald-200 bg-white/80 px-3 py-2.5">
                        <p className="text-xs font-semibold text-slate-500">
                          {budgetEstimate.label} for {travellers === "5" ? "5+ travellers" : `${travellers} ${travellers === "1" ? "traveller" : "travellers"}`}
                        </p>
                        <p className="mt-1 text-lg font-extrabold text-emerald-800">
                          {budgetEstimate.high ? `${formatINR(budgetEstimate.low)} – ${formatINR(budgetEstimate.high)}` : `${formatINR(budgetEstimate.low)}+`}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">Indicative estimate; final cost may vary by dates and selected services.</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Selected Places</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">{selectedPlaces.join(", ") || "—"}</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <label className={labelClass}>
                    Full Name <span className="text-rose-500">*</span>
                    <input value={name} readOnly className={`${inputClass} bg-slate-50`} />
                  </label>
                  <label className={labelClass}>
                    Mobile Number <span className="text-rose-500">*</span>
                    <input value={mobile} readOnly className={`${inputClass} bg-slate-50`} />
                  </label>
                  <label className={labelClass}>
                    Email Address <span className="font-normal text-slate-400">(Optional)</span>
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className={inputClass} />
                  </label>
                  <label className={labelClass}>
                    Message <span className="font-normal text-slate-400">(Optional)</span>
                    <textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={2} placeholder="Any special requests or questions?" className={`${inputClass} resize-y`} />
                  </label>
                </div>

                <div className="mt-5 flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
                  <button type="button" onClick={() => setShowEnquiry(false)} className="rounded-full border border-slate-300 px-6 py-3 font-bold text-slate-700 transition hover:bg-slate-50">Cancel</button>
                  <button type="button" onClick={submitEnquiry} className="rounded-full bg-emerald-800 px-7 py-3 font-bold text-white shadow-md transition hover:bg-emerald-900">✈ Send Enquiry</button>
                </div>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
