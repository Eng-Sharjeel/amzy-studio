import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "AMZY Studio completely transformed my office space. Every corner is designed for productivity and elegance — it’s truly a workspace that inspires creativity.",
    name: "Rizwan Razi",
    project: "Commercial — Corporate Office",
  },
  {
    quote:
      "Working with AMZY was a dream come true. They designed my home with unmatched luxury, attention to detail, and timeless elegance. Every visit feels like a retreat.",
    name: "Sharjeel Ahmed",
    project: "Residential — Luxury Home",
  },
  {
    quote:
      "AMZY Studio handled our industrial project flawlessly. The design balances functionality, safety, and efficiency, yet still looks modern and impressive. Truly professional from start to finish.",
    name: "Umair",
    project: "Industrial — Manufacturing Facility",
  },
];

const Testimonials = () => {
  return (
    <section className="py-28 md:py-40 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#25D366] font-body font-semibold mb-5">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 flex flex-col h-full"
            >
              {/* Quote Icon */}
              <Quote className="text-[#25D366]/50 mb-6 mx-auto" size={32} />

              {/* Testimonial Text */}
              <p className="text-gray-800 leading-relaxed mb-8 italic font-body flex-grow text-lg">
                "{t.quote}"
              </p>

              {/* Client Info */}
              <div className="mt-auto">
                <p className="text-gray-900 font-semibold text-lg">{t.name}</p>
                <p className="text-gray-500 text-sm mt-1 tracking-wide">{t.project}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;