import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "923368531533";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20AMZY%20Studio%2C%20I%27m%20interested%20in%20discussing%20a%20project.`;

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-body font-semibold mb-5">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
              Ready to Build Something
              <br />
              <span className="italic font-normal">Exceptional</span>
            </h2>
            <p className="font-body text-muted-foreground leading-[1.8] mb-12 font-light">
              Whether you're planning a new build, renovation, or simply exploring possibilities, we'd love to hear from you.
            </p>

            <div className="space-y-7">
              <div className="flex items-center gap-5">
                <Mail className="text-primary" size={18} strokeWidth={1.5} />
                <span className="font-body text-sm text-foreground font-light">amzystudioofficial@gmail.com</span>
              </div>
              <div className="flex items-center gap-5">
                <Phone className="text-primary" size={18} strokeWidth={1.5} />
                <span className="font-body text-sm text-foreground font-light">+92 (336) 8531533</span>
              </div>
              <div className="flex items-center gap-5">
                <MapPin className="text-primary" size={18} strokeWidth={1.5} />
                <span className="font-body text-sm text-foreground font-light">Lahore - Sheikhupura - Faisalabad Road, Adjacent to Shifa International Hospital, opposite to Al-Qadir Garden, Faisalabad</span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle size={18} fill="white" strokeWidth={0} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {[ 
              { type: "text", placeholder: "Your Name", key: "name", required: true, maxLength: 100 },
              { type: "email", placeholder: "Email Address", key: "email", required: true, maxLength: 255 },
              { type: "tel", placeholder: "Phone Number", key: "phone", required: false, maxLength: 20 },
            ].map((field) => (
              <input
                key={field.key}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                maxLength={field.maxLength}
                value={formData[field.key as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                className="w-full bg-white border border-border px-6 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors duration-300 rounded-sm font-light"
              />
            ))}
            <textarea
              placeholder="Tell us about your project"
              required
              maxLength={1000}
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white border border-border px-6 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors duration-300 resize-none rounded-sm font-light"
            />

            {/* Send Message Button with Brand Color & Hover Animation */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(26,43,66,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 font-body rounded-sm text-white"
              style={{ backgroundColor: "#1A2B42" }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;