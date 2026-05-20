import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Prevent restart flicker when coming back from routes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure it continues smoothly if already loaded
    if (video.readyState >= 3) {
      setVideoReady(true);
      video.play().catch(() => {});
    }

    const handleLoaded = () => setVideoReady(true);

    video.addEventListener("canplay", handleLoaded);

    return () => {
      video.removeEventListener("canplay", handleLoaded);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">

      {/* =======================
          1. ALWAYS VISIBLE POSTER
          (prevents black screen)
      ======================= */}
      <img
        src="/hero-poster.webp"
        alt="Hero Poster"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* =======================
          2. VIDEO (WebM only)
      ======================= */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/hero-video.webm" type="video/webm" />
      </video>

      {/* =======================
          3. DARK OVERLAY
      ======================= */}
      <div className="absolute inset-0 bg-black/40" />

      {/* =======================
          4. CONTENT
      ======================= */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.4em] text-white/70 mb-8"
        >
          Architecture & Design Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-3xl md:text-7xl font-bold text-white leading-[1]"
        >
          Designing Spaces
          <br />
          <span className="italic font-normal">That Tell Stories</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-white/70 mt-8 mb-14 max-w-xl"
        >
          We design modern, functional, and timeless architecture tailored to your vision.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-5">
          <button
            onClick={scrollToProjects}
            className="bg-[#1A2B42] text-white px-10 py-4 text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-[#1A2B42]/90 transition"
          >
            View Projects
          </button>

          <button
            onClick={scrollToContact}
            className="border border-white/30 text-white px-10 py-4 text-xs uppercase tracking-[0.15em] rounded-sm hover:bg-white/10 transition"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* =======================
          5. SCROLL ICON
      ======================= */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ArrowDown />
      </div>
    </section>
  );
};

export default Hero;