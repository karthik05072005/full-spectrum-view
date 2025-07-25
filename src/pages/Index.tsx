import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import DeliveryProcess from "@/components/DeliveryProcess";
import Pricing from "@/components/Pricing";
import TrustSafety from "@/components/TrustSafety";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Services />
      <DeliveryProcess />
      <Pricing />
      <TrustSafety />
      <FAQ />
      <CTA />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;