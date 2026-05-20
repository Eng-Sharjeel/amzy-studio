import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const FeaturedProjects = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="projects"
      className="py-20 md:py-40 bg-background overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
            Portfolio
          </p>

          <h2 className="text-3xl sm:text-5xl font-semibold">
            Featured Projects
          </h2>

          <p className="max-w-xl text-sm sm:text-base text-muted-foreground mt-4">
            Architectural storytelling through material, light, and form.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;

/* =========================
   PREMIUM OPTIMIZED CARD
========================= */

const ProjectCard = ({ project, index, inView }: any) => {
  const images = project.images || [];

  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  let t1: any;
  let t2: any;

  const startHover = () => {
    if (images.length === 0) return;

    setHovered(true);

    // image 2 quickly
    t1 = setTimeout(() => {
      setActive(1);
    }, 300);

    // image 3 slightly later
    t2 = setTimeout(() => {
      if (images[2]) setActive(2);
    }, 1200);
  };

  const stopHover = () => {
    setHovered(false);
    setActive(0);

    clearTimeout(t1);
    clearTimeout(t2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Link
        to={`/project/${project.id}`}
        className="block"
        onMouseEnter={startHover}
        onMouseLeave={stopHover}
      >

        {/* CARD */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-lg group aspect-[4/3]">

          {/* IMAGE */}
          <img
            src={images[active]}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-all duration-500 ease-out
              ${hovered ? "scale-105" : "scale-100"}
            `}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          {/* CATEGORY */}
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* ICON */}
          <div className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition">
            <ArrowUpRight size={16} className="text-white" />
          </div>

          {/* TEXT */}
          <div className="absolute bottom-0 p-4 sm:p-5 text-white z-10">
            <h3 className="text-lg sm:text-xl font-semibold tracking-wide">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              {project.location}
            </p>
          </div>

        </div>

      </Link>
    </motion.div>
  );
};