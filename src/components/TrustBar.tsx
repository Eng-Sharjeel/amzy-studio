import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 100, suffix: "+", label: "Trusted Clients" },
];

const TrustBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, i) => {
        let start = 0;
        const end = stat.value;
        const duration = 1800;
        const stepTime = Math.floor(duration / end);

        const counter = setInterval(() => {
          start += 1;

          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[i] = start;
            return newCounts;
          });

          if (start >= end) clearInterval(counter);
        }, stepTime);
      });
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A2B42 0%, #1A2B42 50%, #1A2B42 100%)",
      }}
    >
      {/* Glow Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1A2B42]/60 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1A2B42]/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 text-center">
        {/* Hook Line */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-white/70 uppercase tracking-[0.3em] text-sm font-medium mb-4 block"
        >
          Experience & Trust
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-lg md:text-xl font-light max-w-3xl mx-auto mb-16"
        >
          Years of experience, countless successful projects, and the continued trust of our valued clients.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative"
            >
              {/* floating line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: i }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-[#1A2B42]/50"
              />

              {/* number */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-3 tracking-tight">
                {counts[i]}
                {stat.suffix}
              </div>

              {/* label */}
              <div className="text-white/70 text-xs uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;