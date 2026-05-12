import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs uppercase tracking-[0.4em] text-white/70 mb-8 font-body font-medium"
        >
          Architecture & Design Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-3xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[0.95] tracking-tight mb-8"
        >
          Designing Spaces
          <br />
          <span className="italic font-normal"> That Tell Stories</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-body text-base md:text-lg text-white/70 max-w-xl mx-auto mb-14 leading-relaxed font-light"
        >
          We design modern, functional, and timeless architecture tailored to your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <button
            onClick={scrollToProjects}
            className="bg-[#1A2B42] text-white px-10 py-4 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#1A2B42]/90 transition-all duration-300 font-body rounded-sm hover:shadow-lg"
          >
            View Our Projects
          </button>
          <button
            onClick={scrollToContact}
            className="border border-white/30 text-white px-10 py-4 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-white/10 transition-all duration-300 font-body rounded-sm"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ArrowDown className="text-white/40" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;