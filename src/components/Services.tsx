import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  { title: "Architectural Design", desc: "Innovative and timeless architectural concepts tailored to your vision.", color: "from-blue-500 to-blue-700" },
  { title: "3D Visualization", desc: "Photorealistic renders that bring your ideas to life before construction.", color: "from-indigo-500 to-indigo-700" },
  { title: "Interior Design", desc: "Luxury interior spaces balancing elegance, comfort, and function.", color: "from-purple-500 to-purple-700" },
  { title: "Urban Planning", desc: "Smart and sustainable planning for modern communities.", color: "from-teal-500 to-teal-700" },
  { title: "Landscape Design", desc: "Harmonizing nature with built environments beautifully.", color: "from-green-500 to-green-700" },
  { title: "Concept Development", desc: "Transforming ideas into strong architectural directions.", color: "from-pink-500 to-pink-700" },
];

const ServicesCarousel = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);

  const speed = 0.9; // auto scroll speed (higher = faster)
  const cardWidth = 300 + 24;

  // AUTO LOOP (smooth)
  useEffect(() => {
    let animation: number;

    const loop = () => {
      if (!isDragging) {
        setPosition((prev) => {
          const next = prev - speed;

          // reset loop seamlessly
          if (Math.abs(next) >= services.length * cardWidth) {
            return 0;
          }
            
          return next;
        });
      }

      animation = requestAnimationFrame(loop);
    };

    animation = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animation);
  }, [isDragging]);

  // DRAG SUPPORT
  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => {
    setTimeout(() => setIsDragging(false), 800);
  };

  const handleArrow = (dir: number) => {
    setIsDragging(true);
    setPosition((prev) => prev + dir * cardWidth);
    setTimeout(() => setIsDragging(false), 800);
  };

  return (
    <section
      id="services"
      className="relative py-20 md:py-28 bg-gray-900 overflow-hidden"
    >
      {/* HEADER */}
      <div className="text-center mb-16 px-4">
        <span className="text-blue-300 uppercase tracking-[0.3em] text-xs md:text-sm">
          Our Services
        </span>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-semibold text-white">
          Crafting Architecture That Defines Luxury
        </h2>
      </div>

      {/* ARROWS */}
      <button
        onClick={() => handleArrow(1)}
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full"
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        onClick={() => handleArrow(-1)}
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* CAROUSEL */}
      <div
        ref={containerRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        <motion.div
          className="flex gap-6 px-4 md:px-10"
          animate={{ x: position }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
        >
          {[...services, ...services].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                rotateX: 6,
                rotateY: -6,
              }}
              className="min-w-[260px] sm:min-w-[300px] lg:min-w-[340px] p-6 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* COLOR LINE */}
              <div
                className={`h-1 w-full mb-6 rounded-full bg-gradient-to-r ${service.color}`}
              />

              <h3 className="text-lg md:text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-purple-500/20 blur-[120px] rounded-full" />
    </section>
  );
};

export default ServicesCarousel;