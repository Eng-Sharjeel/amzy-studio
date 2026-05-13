import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B0F17] py-24 md:py-40 text-white"
    >
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div
        ref={ref}
        className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:items-start lg:px-8"
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-blue-400">
            About AMZY Studio
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Designing Spaces That <br />
            <span className="text-blue-400 italic font-light">
              Shape Experiences
            </span>
          </h2>

          {/* NEW FOUNDING TEXT */}
          <p className="mt-6 text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
            Founded in 2020, AMZY Studio is a design-led architecture practice
            focused on creating timeless, human-centered spaces that balance
            form, function, and emotion. Every project is shaped by light,
            material, and spatial clarity.
          </p>

          {/* CONTENT BLOCKS */}
          <div className="mt-10 space-y-10">

            {/* OPINION */}
            <div className="border-l border-blue-500/30 pl-6">
              <h3 className="text-lg font-medium mb-3">
                My Opinion about Architecture
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                I believe my architecture skills should not remain limited to personal use; they should extend to serve people and create buildings that improve lives and communities.
              </p>

              <p className="text-blue-400 text-sm mt-3">
                — Ar. Muhammad Zubair Yousaf
              </p>
            </div>

            {/* PRINCIPLES */}
            <div className="border-l border-blue-500/30 pl-6">
              <h3 className="text-lg font-medium mb-3">
                Principles of Great Architecture
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                A good building should satisfy three essential principles: durability, utility, and beauty.
              </p>

              <p className="text-blue-400 text-sm mt-3">
                — Vitruvius
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          style={{ y }}
          className="lg:col-span-6 flex justify-center lg:justify-end lg:items-start"
        >
          <div className="relative w-full max-w-lg">

            {/* IMAGE CARD */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

              {/* IMAGE WITH PROPER CROPPING */}
              <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden">

                <img
                  src="/CEO.png"
                  alt="Founder"
                  className="
                    w-full h-full
                    object-cover
                    object-[50%_25%]
                    scale-105
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* NAME (DESKTOP ONLY) */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hidden md:block">
                <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-4">
                  <h3 className="text-lg md:text-xl font-medium">
                    Ar. Muhammad Zubair Yousaf
                  </h3>
                  <p className="text-sm text-gray-300">
                    Founder & Principal Architect
                  </p>
                </div>
              </div>

            </div>

            {/* MOBILE NAME (STATIC - NO BUGS) */}
            <div className="mt-4 md:hidden">
              <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-xl p-3">
                <h3 className="text-sm font-medium">
                  Ar. Muhammad Zubair Yousaf
                </h3>
                <p className="text-xs text-gray-300">
                  Founder & Principal Architect
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;