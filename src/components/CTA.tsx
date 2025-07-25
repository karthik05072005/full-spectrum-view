import { Button } from "@/components/ui/button";
import { Clock, Award, Save, Shield } from "lucide-react";

const CTA = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Convenience",
      description: "No need to leave your home. We come to you."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Expertise", 
      description: "Professional packing and handling of all items."
    },
    {
      icon: <Save className="h-8 w-8 text-primary" />,
      title: "Time-saving",
      description: "Focus on what matters while we handle the returns."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Peace of mind",
      description: "Track your returns from pickup to delivery."
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Make Returns Hassle-Free?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a pickup today and let us handle your returns from start to finish.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
            onClick={() => scrollToSection('book-pickup')}
          >
            Book a Pickup
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;