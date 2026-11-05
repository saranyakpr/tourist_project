
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

import AnimatedHero from "../components/AnimatedHero";
import ScrollReveal from "../components/ScrollReveal";

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@tenkasitourism.com",
    description: "For general enquiries",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 XXXXX XXXXX",
    description: "Replace with your official contact number",
  },
  {
    icon: MapPin,
    title: "Our Location",
    detail: "Tenkasi, Tamil Nadu",
    description: "Explore the beautiful town of Tenkasi",
  },
  {
    icon: Clock,
    title: "Availability",
    detail: "Travel information",
    description: "Send us an enquiry anytime",
  },
];

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
      "You can send your enquiry through this contact form. Package assistance can be connected once the enquiry system is integrated.",
  },
  {
    question: "Can I suggest a tourist destination?",
    answer:
      "Yes. Use the enquiry form to share a destination suggestion or feedback with us.",
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      "Your form design is ready! Connect a backend or email service to send this enquiry."
    );
  };

  return (
    <div className="bg-[#F7FAF5] text-gray-800 dark:bg-[#10251A] dark:text-green-50">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">

        {/* HERO SECTION */}
        <AnimatedHero
          title="Let's Connect"
          subtitle="Have a question about visiting Tenkasi? We would love to hear from you."
          image="images/contact-image.jpg"
        />

        {/* CONTACT INFORMATION */}
        <section className="py-20">

          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-3 font-semibold uppercase tracking-widest text-green-700 dark:text-green-300">
                Get In Touch
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                Contact Information
              </h2>

              <p className="mt-4 text-gray-600 dark:text-green-100/70">
                Choose the best way to reach us.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal
                  key={item.title}
                  delay={index * 0.1}
                >
                  <motion.div
                    whileHover={{
                      y: -12,
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 18,
                    }}
                    className="h-full rounded-2xl border border-green-100 bg-white p-6 text-center shadow-sm hover:shadow-xl dark:border-green-900 dark:bg-[#1B3526]"
                  >
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.15,
                      }}
                      transition={{ duration: 0.6 }}
                      className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    >
                      <Icon size={25} />
                    </motion.div>

                    <h3 className="mb-2 text-lg font-bold">
                      {item.title}
                    </h3>

                    <p className="break-words font-semibold text-green-800 dark:text-green-300">
                      {item.detail}
                    </p>

                    <p className="mt-2 text-sm text-gray-500 dark:text-green-100/60">
                      {item.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}

          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section className="grid items-start gap-10 py-10 lg:grid-cols-2">

          {/* LEFT VIDEO CARD */}
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="rounded-3xl bg-green-800 p-8 text-white md:p-10"
            >
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 0.2,
                }}
              >
                <MessageCircle
                  size={42}
                  className="mb-6 text-green-200"
                />
              </motion.div>

              <h2 className="mb-5 text-3xl font-bold">
                We'd Love to Hear From You
              </h2>

              <p className="leading-8 text-green-50/80">
                Whether you need travel information, want to know
                about destinations or have suggestions for our
                website, send us a message.
              </p>

              {/* VIDEO */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="mt-10 overflow-hidden rounded-2xl shadow-2xl"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-[300px] w-full object-cover"
                >
                  <source
                    src="/images/contact-v.mp4"
                    type="video/mp4"
                  />
                </video>
              </motion.div>

              <p className="mt-6 text-sm text-green-100/80">
                We look forward to helping you discover Tenkasi.
              </p>
            </motion.div>
          </ScrollReveal>

          {/* RIGHT ENQUIRY FORM */}
          <ScrollReveal delay={0.15}>
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="rounded-3xl border border-green-100 bg-white p-7 shadow-lg md:p-9 dark:border-green-900 dark:bg-[#1B3526]"
            >
              <h2 className="mb-2 text-2xl font-bold">
                Send an Enquiry
              </h2>

              <p className="mb-8 text-sm text-gray-500 dark:text-green-100/60">
                Fill in the details below and share your message.
              </p>

              <div className="grid gap-5 sm:grid-cols-2">

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="mb-2 block text-sm font-semibold">
                    Your Name *
                  </label>

                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-200 bg-[#F8FBF7] px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 dark:border-green-900 dark:bg-[#10251A]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="mb-2 block text-sm font-semibold">
                    Email Address *
                  </label>

                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-gray-200 bg-[#F8FBF7] px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 dark:border-green-900 dark:bg-[#10251A]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="mb-2 block text-sm font-semibold">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-gray-200 bg-[#F8FBF7] px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 dark:border-green-900 dark:bg-[#10251A]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="mb-2 block text-sm font-semibold">
                    Subject *
                  </label>

                  <select
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-[#F8FBF7] px-4 py-3 outline-none transition focus:border-green-600 dark:border-green-900 dark:bg-[#10251A]"
                  >
                    <option value="">Choose a subject</option>
                    <option value="Travel Enquiry">Travel Enquiry</option>
                    <option value="Tour Packages">Tour Packages</option>
                    <option value="Destination Suggestion">
                      Destination Suggestion
                    </option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </motion.div>

              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="mt-5"
              >
                <label className="mb-2 block text-sm font-semibold">
                  Your Message *
                </label>

                <textarea
                  required
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-xl border border-gray-200 bg-[#F8FBF7] px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 dark:border-green-900 dark:bg-[#10251A]"
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-green-800 px-6 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-green-700"
              >
                Send Message
                <Send size={18} />
              </motion.button>

              <p className="mt-4 text-xs text-gray-500 dark:text-green-100/50"></p>

            </motion.form>
          </ScrollReveal>

        </section>

        {/* FAQ SECTION */}
        <section className="py-20">

          <ScrollReveal>
            <div className="mb-10 text-center">
              <p className="mb-3 font-semibold uppercase tracking-widest text-green-700 dark:text-green-300">
                Need Help?
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-3xl space-y-4">

            {faqs.map((faq, index) => (
              <ScrollReveal
                key={faq.question}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm dark:border-green-900 dark:bg-[#1B3526]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold"
                  >
                    {faq.question}

                    <motion.span
                      animate={{
                        rotate: openFaq === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="shrink-0" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openFaq === index && (
                      <motion.div
                        key="answer"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-green-100 px-5 py-4 text-sm leading-7 text-gray-600 dark:border-green-900 dark:text-green-100/70">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </ScrollReveal>
            ))}

          </div>
        </section>

        {/* LOCATION / MAP SECTION */}
        <ScrollReveal>
          <section className="mb-16 overflow-hidden rounded-3xl border border-green-100 bg-white shadow-xl dark:border-green-900 dark:bg-[#1B3526]">

            <div className="flex flex-col justify-between gap-5 p-6 md:flex-row md:items-center md:p-8">

              <div>
                <p className="mb-2 font-semibold uppercase tracking-widest text-green-700 dark:text-green-300">
                  Our Location
                </p>

                <h2 className="text-3xl font-bold">
                  Find Us in Tenkasi
                </h2>

                <p className="mt-3 text-gray-500 dark:text-green-100/60">
                  View Tenkasi on the map.
                </p>

                <div className="mt-4 flex items-center gap-2 text-green-800 dark:text-green-300">
                  <MapPin size={20} />

                  <span className="font-medium">
                    Tenkasi, Tamil Nadu
                  </span>
                </div>
              </div>

              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=Tenkasi%2C+Tamil+Nadu"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-800 px-6 py-3 font-semibold text-white shadow-md hover:bg-green-700"
              >
                <MapPin size={18} />
                Open in Google Maps
              </motion.a>

            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-4 pb-4 md:px-8 md:pb-8"
            >
              <div className="overflow-hidden rounded-2xl border border-green-100 shadow-lg dark:border-green-900">

                <iframe
                  title="Tenkasi Tamil Nadu Google Map"
                  src="https://www.google.com/maps?q=Tenkasi%2C%20Tamil%20Nadu%2C%20India&z=13&output=embed"
                  className="h-[250px] w-full border-0 md:h-[300px]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>
            </motion.div>

          </section>
        </ScrollReveal>

      </div>
    </div>
  );
}
