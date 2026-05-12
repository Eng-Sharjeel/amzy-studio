import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CallToAction = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-28 md:py-40 bg-[#1A2B42] relative overflow-hidden">
      {/* Optional subtle glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1A2B42]/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1A2B42]/30 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
        >
          Have a project
          <br />
          <span className="italic font-normal text-[#25D366]/80">in mind?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-base text-white/80 max-w-md mx-auto mb-12 font-light leading-relaxed"
        >
          Let's discuss your vision. Our team is ready to guide you from concept to completion.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={scrollToContact}
          className="bg-white text-[#1A2B42] px-12 py-4 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-white/90 transition-all duration-300 font-body rounded-sm hover:shadow-lg"
        >
          Contact Us
        </motion.button>
      </div>
    </section>
  );
};

export default CallToAction;