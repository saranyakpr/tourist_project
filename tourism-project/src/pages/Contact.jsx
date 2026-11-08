
import { useState, useRef } from "react";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Camera,
  
  Globe,
  Clock,
  Headphones,
  Compass,
} from "lucide-react";
import Homenavbar from "../component/Homenavbar";
import Footer from "../component/Footer";

/* -------------------------------------------------------
   CONTACT INFORMATION
------------------------------------------------------- */

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@tenkasitourism.com",
    description: "For general travel enquiries",
    color: "from-emerald-400 to-green-700",
    href: "mailto:info@tenkasitourism.com",
    action: "Send an email",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 XXXXX XXXXX",
    description: "Contact us for travel assistance",
    color: "from-teal-400 to-emerald-700",
    href: "tel:+91XXXXXXXXXX",
    action: "Call our team",
  },
  {
    icon: MapPin,
    title: "Our Location",
    detail: "Tenkasi, Tamil Nadu",
    description: "Explore the beautiful town of Tenkasi",
    color: "from-lime-400 to-green-700",
    href: "https://www.google.com/maps/search/?api=1&query=Tenkasi%2C+Tamil+Nadu",
    action: "Explore location",
  },
  {
    icon: Camera,
    title: "Instagram",
    detail: "@tenkasi_tourism",
    description: "Follow us for travel updates",
    color: "from-green-400 to-teal-700",
    href: "https://www.instagram.com/tenkasi_tourism/",
    action: "Follow us",
  },
];

/* -------------------------------------------------------
   CONTACT GALLERY
------------------------------------------------------- */

const contactImages = [
  {
    src: "/images/contact-hero1.jpg",
    alt: "Beautiful tourist destination in Tenkasi",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/c1.jpg",
    alt: "Nature and greenery in Tenkasi",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/c2.jpg",
    alt: "Scenic landscape of Tenkasi",
    className: "col-span-1 row-span-1",
  },
];

/* -------------------------------------------------------
   FAQ DATA
------------------------------------------------------- */

const faqs = [
  {
    question: "How can I explore tourist places in Tenkasi?",
    answer:
      "Visit our Tourist Places page to explore destinations and read useful travel information.",
  },
  {
    question: "Can I plan a trip through this website?",
    answer:
      "Yes. You can use our Plan Your Trip page to organise your travel preferences and itinerary.",
  },
  {
    question: "Can I get help with tour packages?",
    answer:
      "You can send your enquiry through our contact form. Package assistance can be connected once the enquiry system is integrated.",
  },
  {
    question: "Can I suggest a tourist destination?",
    answer:
      "Yes. Use the enquiry form to share a destination suggestion or feedback with us.",
  },
];

/* -------------------------------------------------------
   3D TILT CARD
------------------------------------------------------- */

function ContactTiltCard({
  children,
  className = "",
  maxTilt = 10,
  glare = true,
}) {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const [glarePos, setGlarePos] = useState({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = (e) => {
    if (reduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRotateX(((y - rect.height / 2) / (rect.height / 2)) * -maxTilt);
    setRotateY(((x - rect.width / 2) / (rect.width / 2)) * maxTilt);

    if (glare) {
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);

    setGlarePos((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  return (
  
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={reduceMotion ? {} : { rotateX, rotateY }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 25,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className={`relative ${className}`}
    >
      {children}

      {glare && !reduceMotion && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.25), transparent 65%)`,
          }}
        />
      )}
    </motion.div>

  );
}

/* -------------------------------------------------------
   SCROLL REVEAL
------------------------------------------------------- */

function ContactSectionReveal({
  children,
  className = "",
  delay = 0,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------
   FULL WIDTH HERO SECTION
------------------------------------------------------- */

function ContactHeroSection({ title, subtitle, image }) {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imgScrollY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "20%"]
  );

  const imgScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.12]
  );

  const textScrollY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "35%"]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springMouseX = useSpring(mouseX, {
    stiffness: 45,
    damping: 20,
  });

  const springMouseY = useSpring(mouseY, {
    stiffness: 45,
    damping: 20,
  });

  const mouseImgX = useTransform(
    springMouseX,
    [-0.5, 0.5],
    [-15, 15]
  );

  const mouseImgY = useTransform(
    springMouseY,
    [-0.5, 0.5],
    [-12, 12]
  );

  const mouseTextX = useTransform(
    springMouseX,
    [-0.5, 0.5],
    [10, -10]
  );

  const mouseTextY = useTransform(
    springMouseY,
    [-0.5, 0.5],
    [8, -8]
  );

  const handleHeroMouseMove = (e) => {
    if (reduceMotion || !heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();

    mouseX.set(
      (e.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (e.clientY - rect.top) / rect.height - 0.5
    );
  };

  const handleHeroMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      className="relative isolate flex min-h-[560px] w-full items-center justify-center overflow-hidden rounded-none md:min-h-[680px]"
    >
      {/* BACKGROUND IMAGE */}

      <motion.div
        className="absolute inset-[-5%]"
        style={
          reduceMotion
            ? {}
            : {
                y: imgScrollY,
                x: mouseImgX,
                translateY: mouseImgY,
                scale: imgScale,
              }
        }
      >
        <motion.img
          src={image}
          alt="Beautiful Tenkasi landscape"
          className="h-full w-full object-cover object-center"
          initial={false}
          animate={
            reduceMotion
              ? { scale: 1 }
              : { scale: [1, 1.045, 1] }
          }
          transition={{
            duration: 22,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* LIGHTER OVERLAY FOR CLEAR IMAGE */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-emerald-950/15 to-black/30" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#10251A]/65 via-transparent to-black/10" />

      {/* ANIMATED LIGHT EFFECTS */}

      {!reduceMotion && (
        <>
          <motion.div
            animate={{
              x: ["-10%", "10%", "-10%"],
              opacity: [0.12, 0.28, 0.12],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-20 left-[-20%] h-72 w-[140%] rounded-full bg-emerald-200/20 blur-[90px]"
          />

          <motion.div
            animate={{
              x: ["10%", "-10%", "10%"],
              opacity: [0.12, 0.3, 0.12],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -top-10 right-[-10%] h-72 w-[120%] rounded-full bg-lime-100/15 blur-[100px]"
          />

        </>
      )}

      {/* HERO TEXT */}

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-5 py-24 text-center text-white md:px-8"
        style={
          reduceMotion
            ? {}
            : {
                y: textScrollY,
                opacity: textOpacity,
                x: mouseTextX,
                translateY: mouseTextY,
              }
        }
      >
        <motion.div
          initial={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 0, y: -20, scale: 0.9 }
          }
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-emerald-950/50 px-6 py-3 shadow-xl backdrop-blur-lg"
        >
          <Sparkles className="text-emerald-300" size={17} />

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-100">
            Get In Touch
          </span>
        </motion.div>

        <motion.h1
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-7 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="font-serif italic text-[#d5edbd] drop-shadow-lg">
            {title}
          </span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white drop-shadow-md md:text-xl"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-300 to-lime-200"
        />
      </motion.div>

      {/* BOTTOM SHAPE */}

      <div className="absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t from-[#F7FAF5] to-transparent dark:from-[#10251A]" />
    </section>
  );
}

/* -------------------------------------------------------
   MAIN CONTACT PAGE
------------------------------------------------------- */

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Frontend demo only.
    // Connect EmailJS or a backend to send actual enquiries.

    console.log("Enquiry Details:", formData);

    setIsSubmitted(true);

    alert(
      "Your form design is ready! Connect a backend or email service to send this enquiry."
    );
  };

  return (
    <>
    <Homenavbar></Homenavbar>
    <motion.div
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full overflow-x-clip bg-[#f7f8ef] text-[#3d4d3e] dark:bg-[#10251A] dark:text-green-50"
    >
      {/* 1. FULL WIDTH HERO */}

      <ContactHeroSection
        title="Let's Connect"
        subtitle="Have a question about visiting Tenkasi? We would love to hear from you."
        image="/images/grass.png"
      />

      {/* MAIN CONTENT CONTAINER */}

      <main className="mx-auto w-full max-w-7xl px-5 md:px-8">

        {/* ------------------------------------------------
             2. GET IN TOUCH - CONTACT INFORMATION
        ------------------------------------------------ */}

        <section className="py-20 md:py-24">

          <ContactSectionReveal>
            <div className="mb-14 text-center">

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-bold uppercase tracking-widest text-[#465747] dark:border-green-800 dark:bg-green-900/40 dark:text-green-300"
              >
                <MessageCircle size={16} />
                Get In Touch
              </motion.div>

              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#344536] dark:text-white md:text-5xl">
                We'd Love to{" "}
                <span className="bg-gradient-to-r from-green-700 to-emerald-400 bg-clip-text text-transparent dark:from-green-300 dark:to-emerald-200">
                  Hear From You
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#536354] dark:text-green-100/70 md:text-lg">
                Have questions about your next trip? Reach out to us.
                Our contact information is here to help you discover Tenkasi.
              </p>
            </div>
          </ContactSectionReveal>

          {/* CONTACT CARDS */}

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <ContactSectionReveal
                  key={item.title}
                  delay={index * 0.12}
                >
                  <ContactTiltCard
                    maxTilt={12}
                    className="group h-full rounded-3xl"
                  >
                    <motion.a
                      href={item.href}
                      target={item.title === "Instagram" || item.title === "Our Location" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      whileHover={reduceMotion ? {} : { y: -10, scale: 1.025 }}
                      whileTap={{ scale: 0.97 }}
                      className="relative flex h-full min-h-[290px] flex-col items-center overflow-hidden rounded-3xl border border-green-100 bg-[#f7f8ef] px-5 py-9 text-center shadow-lg shadow-green-900/5 transition-all duration-500 hover:border-green-400 hover:shadow-2xl hover:shadow-green-900/15 dark:border-green-900 dark:bg-[#1B3526]"
                    >
                      {/* Background decoration */}

                      <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-green-100/60 blur-2xl transition-all duration-500 group-hover:scale-150 dark:bg-green-800/20" />

                      <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-emerald-100/50 blur-2xl dark:bg-emerald-900/20" />

                      {/* 3D ICON */}

                      <motion.div
                        animate={
                          reduceMotion
                            ? {}
                            : {
                                y: [0, -9, 0],
                                rotateY: [0, 8, 0, -8, 0],
                              }
                        }
                        transition={{
                          duration: 5 + index * 0.7,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{
                          transformStyle: "preserve-3d",
                          translateZ: 35,
                        }}
                        className={`relative z-10 mb-7 grid h-20 w-20 place-items-center rounded-[26px] bg-gradient-to-br ${item.color} text-white shadow-[0_15px_25px_-8px_rgba(22,101,52,0.5)] transition-shadow duration-500 group-hover:shadow-[0_22px_35px_-8px_rgba(22,101,52,0.6)]`}
                      >
                        <div className="absolute inset-1 rounded-[22px] border border-white/30" />

                        <Icon size={32} strokeWidth={1.8} />

                        <div className="absolute -right-2 -top-2 h-5 w-5 rounded-full border-2 border-white bg-lime-300 shadow-md" />
                      </motion.div>

                      {/* CARD CONTENT */}

                      <div
                        className="relative z-10"
                        style={{ transform: "translateZ(20px)" }}
                      >
                        <h3 className="font-serif mb-3 text-xl font-extrabold text-[#344536] dark:text-white">
                          {item.title}
                        </h3>

                        <p className="break-words text-sm font-bold text-[#465747] dark:text-green-300">
                          {item.detail}
                        </p>

                        <p className="mt-3 text-sm leading-6 text-[#687568] dark:text-green-100/60">
                          {item.description}
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#526b45] transition-all duration-300 group-hover:gap-3 dark:text-green-300">
                          {item.action}
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                    </motion.a>
                  </ContactTiltCard>
                </ContactSectionReveal>
              );
            })}

          </div>
          </section>

        {/* ------------------------------------------------
             4. FAQ SECTION
        ------------------------------------------------ */}

        <section className="py-20 md:py-24">

          <ContactSectionReveal>
            <div className="mb-12 text-center">

              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#465747] dark:bg-green-900/50 dark:text-green-300">
                <MessageCircle size={15} />
                Need Help?
              </p>

              <motion.h2
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-extrabold text-[#344536] dark:text-white md:text-5xl"
              >
                Frequently Asked Questions
              </motion.h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-[#687568] dark:text-green-100/60">
                Find answers to some common questions about visiting Tenkasi.
              </p>

            </div>
          </ContactSectionReveal>

          <div className="mx-auto max-w-3xl space-y-4">

            {faqs.map((faq, index) => (
              <ContactSectionReveal
                key={faq.question}
                delay={index * 0.08}
              >
             
                      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 35, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={reduceMotion ? {} : {
          y: -6,
          scale: 1.01,
          boxShadow: "0 18px 35px -15px rgba(22,101,52,0.25)",
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
                  
        className="overflow-hidden rounded-2xl border border-green-100 bg-[#f7f8ef] shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-green-900 dark:bg-[#1B3526]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? -1 : index)
                    }
                    aria-expanded={openFaq === index}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left font-bold text-[#344536] dark:text-white md:p-6"
                  >
                    <span>{faq.question}</span>

                    <motion.span
                      animate={{
                        rotate: openFaq === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-[#526b45] dark:text-green-300"
                    >
                      <ChevronDown size={22} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openFaq === index && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-green-100 px-5 py-5 text-sm leading-8 text-[#536354] dark:border-green-900 dark:text-green-100/70 md:px-6">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </ContactSectionReveal>
            ))}

          </div>
        </section>

        {/* ------------------------------------------------
             5. LOCATION / GOOGLE MAPS
        ------------------------------------------------ */}

        <ContactSectionReveal>

          <motion.section
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduceMotion ? {} : { y: -4 }}
              className="mb-16 overflow-hidden rounded-[30px] border border-green-100 bg-[#f7f8ef] shadow-xl transition-shadow duration-500 hover:shadow-2xl hover:shadow-green-900/10 dark:border-green-900 dark:bg-[#1B3526]"
            >

            <div className="flex flex-col justify-between gap-6 p-7 md:flex-row md:items-center md:p-10">

              <div>

                <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#526b45] dark:text-green-300">
                  <MapPin size={17} />
                  Our Location
                </p>

                <h2 className="font-serif text-3xl font-extrabold text-[#344536] dark:text-white md:text-4xl">
                  Find Us in Tenkasi
                </h2>

                <p className="mt-4 text-[#687568] dark:text-green-100/60">
                  Explore the beautiful destination of Tenkasi, Tamil Nadu.
                </p>

                <div className="mt-5 flex items-center gap-3 text-[#465747] dark:text-green-300">
                  <MapPin size={21} />

                  <span className="font-semibold">
                    Tenkasi, Tamil Nadu, India
                  </span>
                </div>

              </div>

              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=Tenkasi%2C+Tamil+Nadu"
                target="_blank"
                rel="noreferrer"
                whileHover={reduceMotion ? {} : { scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-green-800 px-6 py-4 font-bold text-white shadow-md transition-colors hover:bg-green-700 dark:bg-green-700"
              >
                <MapPin size={18} />
                Open in Google Maps
                <ArrowUpRight size={17} />
              </motion.a>

            </div>

            {/* MAP */}

            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-4 pb-4 md:px-8 md:pb-8"
            >
              <ContactTiltCard
                maxTilt={3}
                glare={false}
                className="overflow-hidden rounded-2xl border border-green-100 shadow-lg dark:border-green-900"
              >
                <motion.div
                  whileHover={reduceMotion ? {} : { scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                >
                  <iframe
                    title="Tenkasi Tamil Nadu Google Map"
                    src="https://www.google.com/maps?q=Tenkasi%2C%20Tamil%20Nadu%2C%20India&z=13&output=embed"
                    className="h-[260px] w-full border-0 md:h-[350px]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </motion.div>
              </ContactTiltCard>
            </motion.div>

         </motion.section>

        </ContactSectionReveal>

      </main>
    </motion.div>
    <Footer></Footer>
    </>
  );
}
