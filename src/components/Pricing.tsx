import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "No hidden fees",
    "No subscriptions", 
    "No stress",
    "Full-service pickup & delivery"
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            One flat fee. No surprises.
          </p>
          <p className="text-foreground">
            Pay once and enjoy all the benefits of Baccksee return service.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-xl border-2 border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Flat Rate
              </h3>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold text-primary">$12</span>
                <span className="text-xl text-muted-foreground ml-2">per pickup</span>
              </div>
              <p className="text-muted-foreground mt-4">
                Up to 5 items picked up from your door.<br />
                (max combined weight: 12 kg)
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-foreground">What's Included:</h4>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
              onClick={() => scrollToSection('book-pickup')}
            >
              Book Your Pickup
            </Button>

            <p className="text-center text-muted-foreground mt-6">
              Accepted Payment Methods
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;