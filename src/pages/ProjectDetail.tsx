import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <Link to="/" className="text-primary hover:underline font-body">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const images = project.images || [];

  /* -----------------------------
     KEYBOARD NAVIGATION
  ----------------------------- */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length]);

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">

        <img
          src={images[0]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-xs text-background/60 hover:text-background transition"
            >
              <ArrowLeft size={14} />
              Back to Projects
            </Link>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-4">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-xs text-background/50">
              <span>{project.location}</span>
              <span>·</span>
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.year}</span>
              <span>·</span>
              <span>{project.area}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-28 md:py-40 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-16">

          {/* OVERVIEW */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-6">
              Overview
            </h2>
            <p className="text-muted-foreground leading-[1.8]">
              {project.description}
            </p>
          </div>

          {/* CHALLENGE / SOLUTION */}
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                The Challenge
              </h3>
              <p className="text-muted-foreground leading-[1.8]">
                {project.challenge}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Our Solution
              </h3>
              <p className="text-muted-foreground leading-[1.8]">
                {project.solution}
              </p>
            </div>
          </div>

          {/* 🔥 ULTRA PREMIUM GALLERY */}
          <div className="space-y-6 pt-10">

            <h2 className="font-display text-3xl font-bold">
              Project Gallery
            </h2>

            {/* MAIN VIEWER */}
            <div className="relative w-full h-[500px] md:h-[650px] rounded-3xl overflow-hidden group">

              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`
                    absolute inset-0 w-full h-full object-cover
                    transition-all duration-1000 ease-out
                    ${i === activeIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"}
                  `}
                />
              ))}

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

              {/* LEFT */}
              <button
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur text-white w-12 h-12 rounded-full flex items-center justify-center"
              >
                <ChevronLeft />
              </button>

              {/* RIGHT */}
              <button
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur text-white w-12 h-12 rounded-full flex items-center justify-center"
              >
                <ChevronRight />
              </button>

              {/* COUNTER */}
              <div className="absolute bottom-5 right-5 text-white text-xs bg-white/10 backdrop-blur px-3 py-1 rounded-full">
                {activeIndex + 1} / {images.length}
              </div>
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveIndex(i)}
                  className={`
                    w-28 h-20 object-cover rounded-xl cursor-pointer transition
                    ${i === activeIndex
                      ? "ring-2 ring-primary scale-105"
                      : "opacity-50"}
                  `}
                />
              ))}
            </div>

          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-2 gap-8 pt-12 border-t">
            {[
              { label: "Location", value: project.location },
              { label: "Category", value: project.category },
              { label: "Year", value: project.year },
              { label: "Area", value: project.area },
            ].map((item) => (
              <div key={item.label}>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </span>
                <p className="mt-2 font-medium">{item.value}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 bg-primary text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
            Interested in a Similar Project?
          </h2>

          <Link
            to="/#contact"
            className="inline-block bg-primary-foreground text-primary px-12 py-4 text-xs font-semibold uppercase rounded-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default ProjectDetail;