import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  /* ---------------- SCROLL EFFECT ---------------- */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- CLOSE MOBILE ON ROUTE CHANGE ---------------- */
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  /* ---------------- LOCK BODY SCROLL ---------------- */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  /* ---------------- SMOOTH SCROLL FUNCTION ---------------- */
  const handleScroll = (id: string) => {
    setMobileOpen(false);

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* LOGO */}
            <Link to="/" className="z-50 flex items-center">
              <img
                src="/logo.png"
                alt="AMZY Studio"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform hover:scale-105"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-10">

              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className={`
                    text-xs uppercase tracking-[0.18em] font-medium
                    transition-colors duration-300
                    ${
                      scrolled
                        ? "text-[#1A2B42] hover:text-[#1A2B42]/70"
                        : "text-white hover:text-white/70"
                    }
                  `}
                >
                  {link.label}
                </button>
              ))}

              {/* CTA */}
              <button
                onClick={() => handleScroll("contact")}
                className="px-6 py-3 bg-[#1A2B42] text-white text-xs uppercase tracking-[0.15em] font-semibold rounded-sm hover:scale-105 transition"
              >
                Start Project
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden z-50 transition-colors duration-300 ${
                scrolled || mobileOpen ? "text-[#1A2B42]" : "text-white"
              }`}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="mb-7"
              >
                <button
                  onClick={() => handleScroll(link.id)}
                  className="text-[#1A2B42] text-lg uppercase tracking-[0.2em] font-light hover:opacity-60 transition"
                >
                  {link.label}
                </button>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6"
            >
              <button
                onClick={() => handleScroll("contact")}
                className="px-8 py-4 bg-[#1A2B42] text-white text-xs uppercase tracking-[0.15em] font-semibold rounded-sm hover:opacity-90 transition"
              >
                Start Project
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;