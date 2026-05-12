import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline font-body">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        <img
          src={project.image}
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
              className="inline-flex items-center gap-2 text-xs text-background/60 hover:text-background transition-colors duration-300 font-body mb-8 tracking-wide uppercase"
            >
              <ArrowLeft size={14} />
              Back to Projects
            </Link>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 font-body text-xs text-background/50 tracking-wide">
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

      {/* Content */}
      <section className="py-28 md:py-40 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-16"
          >
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="font-body text-muted-foreground leading-[1.8] text-base font-light">
                {project.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">The Challenge</h3>
                <p className="font-body text-muted-foreground leading-[1.8] font-light">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Our Solution</h3>
                <p className="font-body text-muted-foreground leading-[1.8] font-light">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-12 border-t border-border">
              {[
                { label: "Location", value: project.location },
                { label: "Category", value: project.category },
                { label: "Year", value: project.year },
                { label: "Area", value: project.area },
              ].map((item) => (
                <div key={item.label}>
                  <span className="font-body text-[10px] text-muted-foreground uppercase tracking-[0.2em]">{item.label}</span>
                  <p className="font-body text-foreground font-medium mt-2 text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 bg-primary text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-8">
            Interested in a Similar Project?
          </h2>
          <Link
            to="/#contact"
            className="inline-block bg-primary-foreground text-primary px-12 py-4 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-primary-foreground/90 transition-all duration-300 font-body rounded-sm hover:shadow-lg"
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
