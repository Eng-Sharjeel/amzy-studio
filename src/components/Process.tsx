import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We start by understanding your vision, budget, and expectations to create a tailored plan.",
  },
  {
    number: "02",
    title: "Concept Design",
    description:
      "Our team crafts innovative design concepts exploring spaces, materials, and aesthetics.",
  },
  {
    number: "03",
    title: "3D Modelling & Visualization",
    description:
      "We bring your vision to life with detailed 3D models and realistic renderings.",
  },
  {
    number: "04",
    title: "Design Development",
    description:
      "Detailed drawings and specifications are finalized to ensure flawless execution.",
  },
  {
    number: "05",
    title: "Execution & Delivery",
    description:
      "We manage construction and quality checks to deliver your project on time.",
  },
];

const Process = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <section
      id="process"
      className="relative py-28 md:py-40 bg-gray-900 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-blue-300 font-body font-semibold mb-5">
            How We Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our 5-Step Process
          </h2>
          <p className="font-body text-base text-white/60 max-w-md mx-auto font-light leading-relaxed">
            A structured, client-focused process that ensures creativity, precision, and excellence.
          </p>
        </motion.div>

        {/* Step Card */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl mx-auto max-w-xl"
        >
          <div className="text-6xl font-display font-bold text-white/10 mb-6 select-none">
            {steps[currentStep].number}
          </div>
          <h3 className="font-display text-2xl font-semibold text-white mb-4">
            {steps[currentStep].title}
          </h3>
          <p className="font-body text-white/70 leading-relaxed">
            {steps[currentStep].description}
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="px-6 py-3 bg-white/10 text-white rounded-md font-medium uppercase tracking-wide disabled:opacity-30 hover:bg-white/20 transition"
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="px-6 py-3 bg-blue-500 text-white rounded-md font-medium uppercase tracking-wide disabled:opacity-30 hover:bg-blue-600 transition"
          >
            Next
          </button>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center gap-4 mt-8">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`w-4 h-4 rounded-full ${
                idx === currentStep ? "bg-blue-500" : "bg-white/20"
              } transition-all`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;