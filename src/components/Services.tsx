import { useEffect, useRef } from "react";
import {
  Building2,
  PenTool,
  Eye,
  Trees,
  Compass,
  Layers,
} from "lucide-react";

const services = [
  {
    title: "Architectural Design",
    desc: "Innovative and timeless architectural concepts tailored to your vision.",
    icon: Building2,
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "3D Visualization",
    desc: "Photorealistic renders that bring your ideas to life before construction.",
    icon: Eye,
    color: "from-indigo-500 to-indigo-700",
  },
  {
    title: "Interior Design",
    desc: "Luxury interior spaces balancing elegance, comfort, and function.",
    icon: PenTool,
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "Urban Planning",
    desc: "Smart and sustainable planning for modern communities.",
    icon: Compass,
    color: "from-teal-500 to-teal-700",
  },
  {
    title: "Landscape Design",
    desc: "Harmonizing nature with built environments beautifully.",
    icon: Trees,
    color: "from-green-500 to-green-700",
  },
  {
    title: "Concept Development",
    desc: "Transforming ideas into strong architectural directions.",
    icon: Layers,
    color: "from-pink-500 to-pink-700",
  },
];

const ServicesCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const position = useRef(0);

  const CARD_WIDTH = 260;
  const SPEED = 0.75;

  useEffect(() => {
    let frame: number;

    const loop = () => {
      position.current -= SPEED;

      const limit = services.length * CARD_WIDTH;

      if (Math.abs(position.current) >= limit) {
        position.current = 0;
      }

      if (trackRef.current) {
        trackRef.current.style.transform =
          `translate3d(${position.current}px,0,0)`;
      }

      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="services"
      className="relative py-28 bg-gray-900 overflow-hidden"
    >
      {/* HEADER */}
      <div className="text-center mb-16 px-4">
        <span className="text-blue-300 uppercase tracking-[0.3em] text-xs">
          Our Services
        </span>

        <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-white">
          Crafting Architecture That Defines Luxury
        </h2>
      </div>

      {/* CAROUSEL WRAPPER */}
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 px-8 w-max will-change-transform"
        >
          {[...services, ...services].map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="
                  relative

                  min-w-[230px] sm:min-w-[240px] md:min-w-[260px]

                  h-[200px]

                  rounded-2xl

                  border border-white/10
                  bg-white/5 backdrop-blur-xl

                  shadow-lg

                  flex flex-col items-center justify-center text-center

                  transition-all duration-300

                  hover:scale-[1.06]

                  overflow-hidden
                "
              >
                {/* 🔥 INNER GLOW ONLY (NO SPILL) */}
                <div
                  className="
                    absolute inset-0
                    opacity-0 hover:opacity-100
                    transition duration-500
                    bg-white/5
                  "
                />

                {/* TOP COLOR BAR */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}
                />

                {/* ICON */}
                <div
                  className="
                    relative z-10 mb-3
                    p-3 rounded-xl
                    bg-white/10
                    backdrop-blur-md
                  "
                >
                  <Icon className="text-white w-5 h-5" />
                </div>

                {/* TITLE */}
                <h3 className="relative z-10 text-sm md:text-base font-semibold text-white">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 text-xs text-gray-300 mt-2 px-3 leading-snug">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CENTER FADE (SPOTLIGHT EFFECT) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent" />

      {/* BACKGLOW */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/20 blur-[130px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/20 blur-[130px] rounded-full" />
    </section>
  );
};

export default ServicesCarousel;