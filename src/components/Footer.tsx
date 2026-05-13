import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#1A2B42] overflow-hidden text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-white/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-16">

          {/* LOGO SECTION (FIXED VISIBILITY) */}
          <div className="md:col-span-1">

            <Link to="/" className="inline-flex items-center mb-5">
              <div className="relative">

                {/* glow */}
                <div className="absolute inset-0 bg-white/10 blur-2xl rounded-2xl scale-125" />

                {/* logo container */}
                <div className="relative bg-white px-4 py-2 rounded-sm shadow-lg">
                  <img
                    src="/logo.png"
                    alt="AMZY Studio"
                    className="h-12 w-auto object-contain"
                  />
                </div>

              </div>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed font-light">
              Designing spaces that tell stories
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">

              <a
                href="https://www.facebook.com/share/1E9AmyBZtK/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1A2B42] transition-all duration-300"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/amzystudio?igsh=ZWgwZHgzYXB0cDg5"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1A2B42] transition-all duration-300"
              >
                <Instagram size={18} />
              </a>

            </div>

          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-white/40 mb-5 font-semibold">
              Navigation
            </h4>

            <div className="space-y-3">
              {["Projects", "About", "Services", "Process", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    to={`/#${item.toLowerCase()}`}
                    className="block text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-white/40 mb-5 font-semibold">
              Services
            </h4>

            <div className="space-y-3 text-sm text-white/60 font-light">
              <p>Architectural Design</p>
              <p>Interior Design</p>
              <p>Construction</p>
              <p>Project Management</p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-white/40 mb-5 font-semibold">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-white/60 font-light leading-relaxed">

              <p>amzystudioofficial@gmail.com</p>

              <p>+92 (336) 8531533</p>

              <p>
                Lahore - Sheikhupura - Faisalabad Road,<br />
                Adjacent to Shifa International Hospital,<br />
                opposite to Al-Qadir Garden,<br />
                Faisalabad
              </p>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} AMZY Studio. All rights reserved.
          </p>

          <div className="flex gap-8 text-xs text-white/40">
            <Link
              to="/privacy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;