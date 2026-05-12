import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const description =
    "Founded in 2020, AMZY Studio is an architecture practice focused on human-centered design, timeless aesthetics, and meaningful spatial experiences.";

  return (
    <section
      id="about"
      className="relative py-24 md:py-40 bg-[#0B0F17] text-white overflow-hidden"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* SOFT GLOW EFFECT */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full top-1/3 left-1/2 -translate-x-1/2" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* LEFT SIDE */}
          <div className="lg:col-span-6">

            <p className="text-xs uppercase tracking-[0.35em] text-blue-400 mb-6">
              About AMZY Studio
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
              Designing Spaces That <br />
              <span className="text-blue-400 italic font-light">
                Shape Experiences
              </span>
            </h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl"
            >
              {description}
            </motion.p>

            {/* SECTIONS */}
            <div className="mt-12 space-y-10">

              {/* OPINION (UNCHANGED) */}
              <div className="border-l border-blue-500/30 pl-5">
                <h3 className="text-lg font-medium mb-2">
                  My Opinion about Architecture
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  I believe my architecture skills should not remain limited to personal use; they should extend to serve people and create buildings that improve lives and communities.
                </p>

                <p className="text-blue-400 text-sm mt-2">
                  — Ar. Muhammad Zubair Yousaf
                </p>
              </div>

              {/* PRINCIPLES (UNCHANGED) */}
              <div className="border-l border-blue-500/30 pl-5">
                <h3 className="text-lg font-medium mb-2">
                  Principles of Great Architecture
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  A good building should satisfy three essential principles: durability, utility, and beauty.
                </p>

                <p className="text-blue-400 text-sm mt-2">
                  — Vitruvius
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              style={{ y }}
              className="relative w-72 sm:w-80 lg:w-96 aspect-square"
            >
              {/* OUTER BORDER */}
              <div className="absolute inset-0 rounded-full border border-blue-500/30" />

              {/* IMAGE */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/CEO.png"
                  alt="Founder"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* GLOW */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-blue-500/20 blur-[90px] rounded-full" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;