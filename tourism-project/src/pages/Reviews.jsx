
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Search,
  MessageSquareText,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Send,
  CalendarDays,
  SlidersHorizontal,
  X,
  PenLine,
  ChevronDown,
  MessageCircle,
  MapPin,
} from "lucide-react";
import Homenavbar from "../component/Homenavbar";
import Footer from "../component/Footer";

const STORAGE_KEY = "tenkasi_reviews";
const VOTES_KEY = "tenkasi_review_votes";

const categories = [
  "All Categories",
  "Waterfalls",
  "Temples",
  "Nature",
  "Adventure",
  "Food",
  "Hotels",
  "Tourist Attractions",
];

const places = [
  "Courtallam Main Falls",
  "Five Falls",
  "Old Courtallam Falls",
  "Kasi Viswanathar Temple",
  "Thirumalai Kovil",
  "Manimuthar Dam",
  "Gundar Dam",
  "Other",
];

const initialForm = {
  name: "",
  place: "",
  visitDate: "",
  rating: 5,
  category: "Waterfalls",
  comment: "",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

// LOCAL DATE: YYYY-MM-DD
function getLocalDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// GET REVIEWS FROM LOCAL STORAGE
function getStoredReviews() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

// GET VOTES FROM LOCAL STORAGE
function getStoredVotes() {
  try {
    const data = JSON.parse(localStorage.getItem(VOTES_KEY));
    return data && typeof data === "object" ? data : {};
  } catch {
    return {};
  }
}

// SCROLL FUNCTION
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// DISPLAY STAR RATING
function StarRating({ rating, size = 17 }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= Number(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-transparent text-gray-300"
          }
        />
      ))}
    </div>
  );
}

// REVIEW CARD
function ReviewCard({ review, vote, onVote, onShare }) {
  const initials = (review.name || "Visitor")
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const reviewDate = review.visitDate || review.createdAt;

  const formattedDate = reviewDate
    ? new Date(reviewDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <>
    <motion.article
      layout
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      whileHover={{
        y: -9,
        rotateX: 3,
        rotateY: -2,
        scale: 1.015,
        boxShadow: "0 22px 45px rgba(35, 64, 39, 0.16)",
      }}
      whileTap={{ scale: 0.985 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      style={{
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="flex h-full flex-col rounded-2xl border border-green-100 bg-[#f7f8ef] p-4 shadow-sm transition-colors duration-500 hover:border-green-300 dark:border-gray-700 dark:bg-gray-900 sm:p-4"
    >
      {/* REVIEWER INFORMATION */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-[#465747] dark:bg-green-900 dark:text-green-200">
            {initials || "V"}
          </div>

          <div>
            <h3 className="font-serif font-semibold text-[#344536] dark:text-white">
              {review.name}
            </h3>

            <p className="mt-1 flex items-center gap-1 text-xs text-[#687568] dark:text-gray-400">
              <CalendarDays size={13} />
              {formattedDate}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onShare(review)}
          title="Share review"
          aria-label="Share review"
          className="rounded-full p-2 text-[#687568] transition hover:bg-green-50 hover:text-[#526b45] dark:hover:bg-gray-800"
        >
          <Share2 size={17} />
        </button>
      </div>

      {/* DISPLAY SAVED REVIEW RATING */}
      <div className="mt-3">
        <StarRating rating={review.rating} size={17} />
      </div>

      {/* PLACE AND CATEGORY */}
      <div className="mt-4">
        <h4 className="text-lg font-bold text-[#344536] dark:text-green-300">
          {review.place}
        </h4>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-[#465747] dark:bg-green-950 dark:text-green-300">
            <MapPin size={12} />
            {review.category}
          </span>
        </div>
      </div>

      {/* REVIEW CONTENT */}
      <p className="mt-3 flex-1 whitespace-pre-wrap text-[13px] leading-6 text-[#536354] dark:text-gray-300">
        {review.comment}
      </p>

      {/* HELPFUL AND NOT HELPFUL */}
      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4 dark:border-gray-700">
        <button
          type="button"
          onClick={() => onVote(review.id, "helpful")}
          aria-pressed={vote === "helpful"}
          className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition ${
            vote === "helpful"
              ? "bg-green-100 text-[#465747] dark:bg-green-900 dark:text-green-200"
              : "bg-gray-100 text-[#536354] hover:bg-green-50 dark:bg-gray-800 dark:text-gray-300"
          }`}
        >
          <ThumbsUp size={14} />
          Helpful ({review.helpful || 0})
        </button>

        <button
          type="button"
          onClick={() => onVote(review.id, "notHelpful")}
          aria-pressed={vote === "notHelpful"}
          className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition ${
            vote === "notHelpful"
              ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
              : "bg-gray-100 text-[#536354] hover:bg-red-50 dark:bg-gray-800 dark:text-gray-300"
          }`}
        >
          <ThumbsDown size={14} />
          Not Helpful ({review.notHelpful || 0})
        </button>
      </div>
    </motion.article>
    </>
  );
}

// MAIN REVIEWS PAGE
export default function Reviews() {
  const [reviews, setReviews] = useState(getStoredReviews);
  const [votes, setVotes] = useState(getStoredVotes);

  const [activeCategory, setActiveCategory] =
    useState("All Categories");

  const [ratingFilter, setRatingFilter] =
    useState("All Ratings");

  const [sortBy, setSortBy] = useState("newest");
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState(initialForm);
  const [showForm, setShowForm] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  // SAVE REVIEWS
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  }, [reviews]);

  // SAVE VOTES
  useEffect(() => {
    localStorage.setItem(VOTES_KEY, JSON.stringify(votes));
  }, [votes]);

  // REVIEW STATISTICS
  const totalReviews = reviews.length;

  const averageRating =
    totalReviews > 0
      ? (
          reviews.reduce(
            (sum, review) => sum + Number(review.rating || 0),
            0
          ) / totalReviews
        ).toFixed(1)
      : "0.0";

  const totalHelpful = reviews.reduce(
    (sum, review) => sum + (Number(review.helpful) || 0),
    0
  );

  // RATING DISTRIBUTION
  const ratingCounts = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter(
      (review) => Number(review.rating) === rating
    ).length,
  }));

  // SEARCH, FILTER AND SORT
  const filteredReviews = useMemo(() => {
    let result = [...reviews];

    if (activeCategory !== "All Categories") {
      result = result.filter(
        (review) => review.category === activeCategory
      );
    }

    if (ratingFilter !== "All Ratings") {
      const minimum = Number(ratingFilter);

      result = result.filter(
        (review) => Number(review.rating) >= minimum
      );
    }

    if (search.trim()) {
      const searchTerm = search.toLowerCase();

      result = result.filter(
        (review) =>
          (review.place || "").toLowerCase().includes(searchTerm) ||
          (review.name || "").toLowerCase().includes(searchTerm) ||
          (review.comment || "").toLowerCase().includes(searchTerm)
      );
    }

    if (sortBy === "newest") {
      result.sort(
        (a, b) =>
          new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
      );
    } else if (sortBy === "oldest") {
      result.sort(
        (a, b) =>
          new Date(a.createdAt || 0) - new Date(b.createdAt || 0)
      );
    } else if (sortBy === "highest") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "lowest") {
      result.sort((a, b) => a.rating - b.rating);
    } else if (sortBy === "helpful") {
      result.sort(
        (a, b) => (b.helpful || 0) - (a.helpful || 0)
      );
    }

    return result;
  }, [reviews, activeCategory, ratingFilter, search, sortBy]);

  // UPDATE FORM DATA
  const updateForm = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  // OPEN REVIEW FORM
  const openReviewForm = () => {
    setShowForm(true);
    setFormMessage("");

    setTimeout(() => {
      scrollToSection("write-review");
    }, 150);
  };

  // SUBMIT REVIEW
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormMessage("");

    if (
      !formData.name.trim() ||
      !formData.place ||
      !formData.comment.trim()
    ) {
      setFormMessage(
        "Please fill in your name, visited place and experience."
      );
      return;
    }

    if (formData.comment.trim().length < 10) {
      setFormMessage(
        "Please write at least 10 characters about your experience."
      );
      return;
    }

    const newReview = {
      ...formData,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: formData.name.trim(),
      comment: formData.comment.trim(),
      helpful: 0,
      notHelpful: 0,
      createdAt: new Date().toISOString(),
    };

    setReviews((previous) => [newReview, ...previous]);

    setFormData(initialForm);
    setShowForm(false);
    setFormMessage("");

    setActiveCategory("All Categories");
    setRatingFilter("All Ratings");
    setSearch("");
    setSortBy("newest");

    setTimeout(() => {
      scrollToSection("reviews-list");
    }, 150);
  };

  // HELPFUL / NOT HELPFUL VOTING
  const handleVote = (reviewId, voteType) => {
    const currentVote = votes[reviewId];
    const nextVote =
      currentVote === voteType ? null : voteType;

    setVotes((previous) => {
      const updated = { ...previous };

      if (nextVote) {
        updated[reviewId] = nextVote;
      } else {
        delete updated[reviewId];
      }

      return updated;
    });

    setReviews((previous) =>
      previous.map((review) => {
        if (review.id !== reviewId) return review;

        let helpful = Number(review.helpful) || 0;
        let notHelpful = Number(review.notHelpful) || 0;

        if (currentVote === "helpful") helpful--;
        if (currentVote === "notHelpful") notHelpful--;

        if (nextVote === "helpful") helpful++;
        if (nextVote === "notHelpful") notHelpful++;

        return {
          ...review,
          helpful: Math.max(0, helpful),
          notHelpful: Math.max(0, notHelpful),
        };
      })
    );
  };

  // SHARE REVIEW
  const handleShare = async (review) => {
    const shareText = `${review.place} - ${review.rating}/5 stars\n${review.comment}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: `Review of ${review.place}`,
          text: shareText,
        });
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareText);
        alert("Review copied to clipboard!");
      } else {
        alert(shareText);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        alert("Unable to share this review.");
      }
    }
  };

  // CLEAR FILTERS
  const clearFilters = () => {
    setActiveCategory("All Categories");
    setRatingFilter("All Ratings");
    setSearch("");
    setSortBy("newest");
  };

  return (
    <>
    <Homenavbar></Homenavbar>
    <main className="overflow-hidden bg-[#f7f8ef] dark:bg-gray-950">

      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{
            scale: [1, 1.045, 1],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src="images/contact-hero.jpg"
          alt="Beautiful waterfall and green nature"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

        {/* FLOATING DESTINATION CARDS */}
        <div className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden lg:block">
          <motion.div
            animate={{ y: [0, -16, 0], rotate: [-5, -2, -5] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[8%] top-[15%] w-40 rounded-2xl border border-white/40 bg-white/15 p-2 shadow-2xl backdrop-blur-md"
            style={{ transform: "perspective(900px) rotateY(-16deg)" }}
          >
            <img
              src="images/privatefalls.jpg"
              alt="Tenkasi waterfall scenery"
              className="h-24 w-full rounded-xl object-cover"
            />
            <p className="px-1 pt-2 text-xs font-semibold text-white">
              Waterfall escapes
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 18, 0], rotate: [4, 1, 4] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="absolute bottom-[12%] right-[17%] w-36 rounded-2xl border border-white/40 bg-white/15 p-2 shadow-2xl backdrop-blur-md"
            style={{ transform: "perspective(900px) rotateY(14deg)" }}
          >
            <img
              src="images/contact-hero1.jpg"
              alt="Green mountain travel landscape"
              className="h-20 w-full rounded-xl object-cover"
            />
            <p className="px-1 pt-2 text-xs font-semibold text-white">
              Nature trails
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -11, 0], rotate: [3, 6, 3] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="absolute bottom-[18%] left-[7%] w-32 rounded-2xl border border-white/40 bg-white/15 p-2 shadow-2xl backdrop-blur-md"
            style={{ transform: "perspective(900px) rotateY(-12deg)" }}
          >
            <img
              src="images/gundaru.jpg"
              alt="Mountain landscape"
              className="h-20 w-full rounded-xl object-cover"
            />
            <p className="px-1 pt-2 text-xs font-semibold text-white">
              Explore more
            </p>
          </motion.div>
        </div>

        {/* HERO CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 text-center text-white lg:max-w-4xl"
        >
          <motion.span
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur-md"
          >
            <MessageCircle size={16} />
            Tenkasi Traveller Community
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold leading-tight md:text-6xl"
          >
            Your Journey,
            <span className="block font-serif italic text-[#d5edbd]">
              Your Story
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/85 md:text-lg"
          >
            Every place has a story. Share your travel experience and
            let others discover the beauty of Tenkasi.
          </motion.p>

          <motion.button
            type="button"
            variants={fadeUp}
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.96 }}
            onClick={openReviewForm}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-green-700"
          >
            Share Your Experience
            <PenLine size={17} />
          </motion.button>
        </motion.div>
      </section>

      {/* REVIEW OVERVIEW */}
      <section className="mx-auto -mt-8 max-w-6xl px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="relative z-20 grid grid-cols-1 gap-4 rounded-2xl border border-green-100 bg-[#f7f8ef] p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900 sm:grid-cols-3 md:p-7"
        >
          {[
            {
              icon: MessageSquareText,
              label: "Total Reviews",
              value: totalReviews,
              color: "text-[#526b45]",
            },
            {
              icon: Star,
              label: "Average Rating",
              value: `${averageRating} / 5`,
              color: "text-amber-500",
            },
            {
              icon: ThumbsUp,
              label: "Helpful Votes",
              value: totalHelpful,
              color: "text-blue-600",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{ y: -7, rotateX: 4, scale: 1.025 }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                }}
                style={{ transformPerspective: 800 }}
                className="flex items-center gap-4 rounded-xl bg-[#f7f8ef] p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800"
              >
                <div className="rounded-xl bg-[#f7f8ef] p-3 shadow-sm dark:bg-gray-900">
                  <Icon size={24} className={item.color} />
                </div>

                <div>
                  <p className="text-sm text-[#687568] dark:text-gray-400">
                    {item.label}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-[#344536] dark:text-white">
                    {item.value}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* REVIEWS SECTION */}
      <section
        id="reviews-list"
        className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#526b45] dark:text-green-400">
            Traveller Experiences
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold text-[#344536] dark:text-white md:text-4xl">
            What Travellers Say
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#687568] dark:text-gray-400 md:text-base">
            Read experiences shared by visitors and discover what
            makes Tenkasi special.
          </p>
        </motion.div>

        {/* RATING DISTRIBUTION */}
        {totalReviews > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 grid gap-6 rounded-2xl border border-green-100 bg-[#f7f8ef] p-5 dark:border-gray-800 dark:bg-gray-900 md:grid-cols-[220px_1fr] md:p-7"
          >
            <div className="flex flex-col items-center justify-center border-b border-gray-100 pb-5 dark:border-gray-700 md:border-b-0 md:border-r md:pb-0 md:pr-6">
              <h3 className="font-serif text-5xl font-bold text-[#344536] dark:text-white">
                {averageRating}
              </h3>

              <StarRating
                rating={Math.round(Number(averageRating))}
                size={19}
              />

              <p className="mt-2 text-sm text-[#687568] dark:text-gray-400">
                Based on {totalReviews} reviews
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3">
              {ratingCounts.map((item) => {
                const percentage =
                  totalReviews > 0
                    ? (item.count / totalReviews) * 100
                    : 0;

                return (
                  <div
                    key={item.rating}
                    className="flex items-center gap-3"
                  >
                    <span className="flex w-8 items-center gap-1 text-sm font-medium text-[#536354] dark:text-gray-300">
                      {item.rating}
                      <Star size={12} />
                    </span>

                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-amber-400"
                      />
                    </div>

                    <span className="w-8 text-right text-xs text-[#687568]">
                      {item.count}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* SEARCH */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-5 flex flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by place, visitor or experience..."
              className="w-full rounded-xl border border-gray-200 bg-[#f7f8ef] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <button
            type="button"
            onClick={clearFilters}
            className="rounded-xl border border-green-200 px-5 py-3 text-sm font-semibold text-[#465747] transition hover:bg-green-50 dark:border-green-900 dark:text-green-300 dark:hover:bg-gray-800"
          >
            Clear Filters
          </button>
        </motion.div>

        {/* CATEGORY FILTER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-5"
        >
          <p className="mb-3 text-sm font-semibold text-[#465747] dark:text-gray-200">
            Browse by category
          </p>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition md:text-sm ${
                  activeCategory === category
                    ? "bg-green-700 text-white shadow-md"
                    : "border border-gray-200 bg-[#f7f8ef] text-[#536354] hover:border-green-500 hover:text-[#526b45] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* RATING AND SORT */}
        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="relative">
            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              className="w-full appearance-none rounded-xl border border-gray-200 bg-[#f7f8ef] px-4 py-3 pr-10 text-sm text-[#465747] outline-none focus:border-green-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
            >
              <option>All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
              <option value="2">2+ Stars</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          <div className="relative">
            <SlidersHorizontal
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full appearance-none rounded-xl border border-gray-200 bg-[#f7f8ef] py-3 pl-10 pr-10 text-sm text-[#465747] outline-none focus:border-green-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
              <option value="helpful">Most Helpful</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* RESULTS HEADER */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-[#687568] dark:text-gray-400">
            Showing{" "}
            <span className="font-bold text-[#344536] dark:text-white">
              {filteredReviews.length}
            </span>{" "}
            {filteredReviews.length === 1 ? "review" : "reviews"}
          </p>

          <button
            type="button"
            onClick={openReviewForm}
            className="inline-flex items-center gap-2 rounded-full bg-green-700 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-green-800 sm:text-sm"
          >
            <PenLine size={15} />
            Write a Review
          </button>
        </div>

        {/* REVIEW CARDS */}
        {filteredReviews.length > 0 ? (
          <motion.div
            layout
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.09 },
              },
            }}
            className="grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredReviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  vote={votes[review.id]}
                  onVote={handleVote}
                  onShare={handleShare}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-dashed border-green-200 bg-[#f7f8ef] px-5 py-14 text-center dark:border-gray-700 dark:bg-gray-900"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 dark:bg-green-950">
              <MessageSquareText
                size={28}
                className="text-[#526b45] dark:text-green-400"
              />
            </div>

            <h3 className="mt-5 font-serif text-xl font-bold text-[#344536] dark:text-white">
              {reviews.length === 0
                ? "Be the first to share your experience!"
                : "No reviews found"}
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#687568] dark:text-gray-400">
              {reviews.length === 0
                ? "Visited a beautiful place in Tenkasi? Share your experience and help others discover it."
                : "Try changing your search or filters to find reviews."}
            </p>

            <button
              type="button"
              onClick={() => {
                if (reviews.length > 0) {
                  clearFilters();
                } else {
                  openReviewForm();
                }
              }}
              className="mt-6 rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              {reviews.length === 0
                ? "Write the First Review"
                : "Clear Filters"}
            </button>
          </motion.div>
        )}
      </section>

      {/* WRITE A REVIEW SECTION */}
      <section
        id="write-review"
        className="relative isolate overflow-hidden scroll-mt-20 bg-[#f7f8ef] px-5 py-20 dark:bg-gray-900"
      >
        {/* ANIMATED GREEN BACKGROUND GLOW */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse at 15% 35%,
                rgba(134, 239, 172, 0.30),
                transparent 40%
              ),
              radial-gradient(
                ellipse at 85% 65%,
                rgba(187, 247, 208, 0.35),
                transparent 40%
              ),
              radial-gradient(
                ellipse at 50% 10%,
                rgba(74, 222, 128, 0.12),
                transparent 45%
              )
            `,
            backgroundSize: "200% 200%",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* SECTION HEADING */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-9 text-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#526b45] dark:text-green-400"
            >
              <MessageCircle size={16} />
              Share Your Thoughts
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-3 text-3xl font-bold text-[#344536] dark:text-white md:text-4xl"
            >
              Your Experience Matters
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#536354] dark:text-gray-400"
            >
              Visited Tenkasi? Share your experience and let your
              story inspire other travellers.
            </motion.p>
          </motion.div>

          {/* FORM CARD */}
          <motion.div
            initial={{
              opacity: 0,
              y: 70,
              scale: 0.88,
              rotateX: 14,
              rotateY: -10,
              z: -100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              rotateY: 0,
              z: 0,
            }}
            whileHover={{
              y: -5,
              rotateX: -1.5,
              rotateY: 1.5,
              scale: 1.005,
            }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              type: "spring",
              stiffness: 105,
              damping: 17,
              mass: 0.8,
            }}
            style={{
              transformPerspective: 1400,
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
            className="relative z-10 rounded-3xl border border-green-100 bg-[#f7f8ef] p-5 shadow-[0_25px_70px_rgba(38,70,42,0.16)] transition-shadow duration-500 hover:shadow-[0_35px_85px_rgba(38,70,42,0.22)] dark:border-gray-700 dark:bg-gray-950 md:p-9"
          >
            {!showForm ? (
              <div className="py-8 text-center">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 dark:bg-green-950"
                >
                  <PenLine
                    size={27}
                    className="text-[#526b45] dark:text-green-400"
                  />
                </motion.div>

                <h3 className="mt-5 font-serif text-xl font-bold text-[#344536] dark:text-white">
                  Write a Review
                </h3>

                <p className="mt-2 text-sm text-[#687568] dark:text-gray-400">
                  Tell other travellers about your Tenkasi experience.
                </p>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    setShowForm(true);
                    setFormMessage("");
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-700 px-8 py-3.5 font-semibold text-white shadow-md transition hover:bg-green-800"
                >
                  Write Your Review
                  <PenLine size={16} />
                </motion.button>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.form
                  key="review-form"
                  initial={{
                    opacity: 0,
                    y: 25,
                    rotateX: 7,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                    rotateX: -5,
                    scale: 0.98,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 130,
                    damping: 18,
                  }}
                  style={{
                    transformPerspective: 1000,
                    transformStyle: "preserve-3d",
                  }}
                  onSubmit={handleSubmit}
                  className="relative z-20 pointer-events-auto space-y-6"
                >
                  {/* FORM HEADING */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#344536] dark:text-white">
                        Write a Review
                      </h3>

                      <p className="mt-1 text-sm text-[#687568] dark:text-gray-400">
                        Share your Tenkasi travel story.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setFormMessage("");
                      }}
                      aria-label="Close review form"
                      className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-[#465747] dark:hover:bg-gray-800"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* NAME AND PLACE */}
                  <div className="grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#465747] dark:text-gray-200">
                        Your Name *
                      </label>

                      <input
                        type="text"
                        required
                        autoComplete="name"
                        maxLength={60}
                        value={formData.name}
                        onChange={(e) =>
                          updateForm("name", e.target.value)
                        }
                        placeholder="Enter your name"
                        className="relative z-20 pointer-events-auto w-full rounded-xl border border-gray-200 bg-[#f7f8ef] px-4 py-3 text-sm outline-none transition-all duration-300 hover:-translate-y-0.5 focus:-translate-y-0.5 focus:border-green-600 focus:ring-2 focus:ring-green-100 focus:shadow-[0_12px_25px_rgba(34,197,94,0.12)] dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#465747] dark:text-gray-200">
                        Visited Place *
                      </label>

                      <select
                        required
                        value={formData.place}
                        onChange={(e) =>
                          updateForm("place", e.target.value)
                        }
                        className="relative z-20 pointer-events-auto w-full rounded-xl border border-gray-200 bg-[#f7f8ef] px-4 py-3 text-sm outline-none transition-all duration-300 hover:-translate-y-0.5 focus:-translate-y-0.5 focus:border-green-600 focus:ring-2 focus:ring-green-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                      >
                        <option value="">Select a place</option>
                        {places.map((place) => (
                          <option key={place} value={place}>
                            {place}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* DATE AND CATEGORY */}
                  <div className="grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {/* VISIT DATE */}
                    <div className="relative z-30 pointer-events-auto">
                      <label className="mb-2 block text-sm font-semibold text-[#465747] dark:text-gray-200">
                        Visit Date
                      </label>

                      <input
                        type="date"
                        value={formData.visitDate}
                        max={getLocalDate()}
                        onChange={(e) =>
                          updateForm("visitDate", e.target.value)
                        }
                        onClick={(e) => {
                          try {
                            e.currentTarget.showPicker?.();
                          } catch {
                            // Browser handles the native date picker.
                          }
                        }}
                        className="relative z-30 w-full cursor-pointer appearance-auto rounded-xl border border-gray-200 bg-[#f7f8ef] px-4 py-3 text-sm outline-none transition-all duration-300 hover:border-green-500 focus:border-green-600 focus:ring-2 focus:ring-green-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#465747] dark:text-gray-200">
                        Review Category
                      </label>

                      <select
                        value={formData.category}
                        onChange={(e) =>
                          updateForm("category", e.target.value)
                        }
                        className="relative z-20 pointer-events-auto w-full rounded-xl border border-gray-200 bg-[#f7f8ef] px-4 py-3 text-sm outline-none transition-all duration-300 hover:-translate-y-0.5 focus:-translate-y-0.5 focus:border-green-600 focus:ring-2 focus:ring-green-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                      >
                        {categories
                          .filter(
                            (category) =>
                              category !== "All Categories"
                          )
                          .map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  {/* STAR RATING - CLICKABLE */}
                  <div className="relative z-30 pointer-events-auto">
                    <label className="mb-3 block text-sm font-semibold text-[#465747] dark:text-gray-200">
                      Your Rating *
                    </label>

                    <div className="flex flex-wrap items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.button
                          key={star}
                          type="button"
                          whileHover={{ scale: 1.2, rotate: 8 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateForm("rating", star)}
                          aria-label={`Rate ${star} stars`}
                          aria-pressed={formData.rating === star}
                          className="relative z-30 cursor-pointer rounded-md p-1 pointer-events-auto"
                        >
                          <Star
                            size={30}
                            strokeWidth={2}
                            className={
                              star <= formData.rating
                                ? "fill-amber-400 text-amber-400"
                                : "fill-transparent text-gray-300 hover:text-amber-400"
                            }
                          />
                        </motion.button>
                      ))}

                      <span className="ml-2 text-sm font-semibold text-[#536354] dark:text-gray-300">
                        {formData.rating} out of 5
                      </span>
                    </div>
                  </div>

                  {/* EXPERIENCE */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#465747] dark:text-gray-200">
                      Share Your Experience *
                    </label>

                    <textarea
                      required
                      minLength={10}
                      maxLength={1000}
                      rows={5}
                      value={formData.comment}
                      onChange={(e) =>
                        updateForm("comment", e.target.value)
                      }
                      placeholder="Tell us what you liked about this place..."
                      className="relative z-20 pointer-events-auto w-full resize-y rounded-xl border border-gray-200 bg-[#f7f8ef] px-4 py-3 text-sm leading-6 outline-none transition-all duration-300 hover:-translate-y-0.5 focus:-translate-y-0.5 focus:border-green-600 focus:ring-2 focus:ring-green-100 focus:shadow-[0_12px_25px_rgba(34,197,94,0.12)] dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    />

                    <p className="mt-1 text-right text-xs text-gray-400">
                      {formData.comment.length}/1000
                    </p>
                  </div>

                  {/* FORM VALIDATION MESSAGE */}
                  {formMessage && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-300"
                    >
                      {formMessage}
                    </motion.p>
                  )}

                  {/* SUBMIT BUTTON */}
                  <div className="flex flex-col gap-4 border-t border-gray-100 pt-5 dark:border-gray-700 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-5 text-[#687568] dark:text-gray-400">
                      * Required fields. Your name will appear with your review.
                    </p>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-green-700 px-8 py-3.5 font-semibold text-white shadow-md transition hover:bg-green-800"
                    >
                      Publish My Review
                      <Send size={16} />
                    </motion.button>
                  </div>
                </motion.form>
              </AnimatePresence>
            )}
          </motion.div>
        </div>
      </section>
    </main>
    <Footer></Footer>
    </>
  );
}
