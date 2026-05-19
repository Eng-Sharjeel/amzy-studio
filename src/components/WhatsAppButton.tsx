import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "923368531533";
  const message = "Hello! I want to discuss a project.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 group">

      {/* 💬 HOVER LABEL (PREMIUM SLIDE IN) */}
      <div
        className="
          hidden md:flex
          items-center
          translate-x-4 opacity-0
          group-hover:translate-x-0 group-hover:opacity-100
          transition-all duration-300 ease-out
        "
      >
        <div className="bg-black/60 text-white text-xs px-4 py-2 rounded-full backdrop-blur-md border border-white/10 shadow-lg">
          Let’s build something 👋
        </div>
      </div>

      {/* BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center"
      >
        {/* 🌟 OUTER RING (SOFT LUXURY PULSE) */}
        <span className="absolute w-16 h-16 rounded-full bg-green-400/20 blur-xl animate-pulse" />

        {/* 🌊 RIPPLE RING */}
        <span className="absolute w-14 h-14 rounded-full border border-green-400/40 animate-[ping_2s_ease-in-out_infinite]" />

        {/* MAIN BUTTON */}
        <div
          className="
            relative
            w-14 h-14 md:w-16 md:h-16
            flex items-center justify-center

            rounded-full
            bg-white/10 backdrop-blur-xl
            border border-white/20

            shadow-[0_20px_50px_rgba(0,0,0,0.35)]

            transition-all duration-300
            hover:scale-110 active:scale-95
          "
        >
          {/* ICON */}
          <MessageCircle className="w-6 h-6 text-green-400 drop-shadow-md" />
        </div>

        {/* 🟢 ONLINE DOT */}
        <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-green-400 rounded-full shadow-md" />

        {/* 🌊 FLOATING MICRO ANIMATION */}
        <style>
          {`
            @keyframes floatSoft {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-4px); }
              100% { transform: translateY(0px); }
            }
          `}
        </style>

        <div className="absolute inset-0 animate-[floatSoft_3.5s_ease-in-out_infinite]" />
      </a>
    </div>
  );
};

export default WhatsAppButton;