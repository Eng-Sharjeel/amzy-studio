import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <FeaturedProjects />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
