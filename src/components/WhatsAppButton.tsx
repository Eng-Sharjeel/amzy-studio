import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "923368531533";
  const message = "Hello! I want to discuss a project.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      
      {/* 💬 SIDE LABEL (DESKTOP ONLY) */}
      <div className="hidden md:flex items-center">
        <div className="bg-black/70 text-white text-xs px-3 py-2 rounded-full backdrop-blur border border-white/10 shadow-lg animate-fade-in">
          Let’s chat 👋
        </div>
      </div>

      {/* BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group"
      >
        {/* 🌊 FLOATING GLOW RINGS */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-20 blur-xl animate-ping" />
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-10 blur-2xl scale-125 animate-pulse" />

        {/* MAIN BUTTON */}
        <div
          className="
            relative
            w-14 h-14 md:w-16 md:h-16
            flex items-center justify-center
            rounded-full
            bg-gradient-to-br from-green-400 to-green-600
            text-white
            shadow-[0_15px_40px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
            transition-all duration-300
            hover:scale-110 active:scale-95
            animate-[float_3s_ease-in-out_infinite]
          "
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-12 transition" />
        </div>

        {/* SMALL STATUS DOT */}
        <span className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-80" />
      </a>

      {/* FLOAT ANIMATION */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
};

export default WhatsAppButton;