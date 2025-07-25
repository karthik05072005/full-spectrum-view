import { Package, Clock, PackageCheck, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Package className="h-12 w-12 text-primary" />,
      title: "Schedule Pickup",
      description: "Book online and tell us what you're returning"
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "We Arrive",
      description: "Our professional team picks up your items from your door"
    },
    {
      icon: <PackageCheck className="h-12 w-12 text-primary" />,
      title: "We Pack & Label",
      description: "We pack and label your parcels securely"
    },
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: "We Drop Off",
      description: "Items are delivered to the correct return location"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our hassle-free process makes returning items simple and convenient
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <p className="text-foreground font-medium">
            <strong>Note:</strong> Baccksee manages the entire process, but customers must cover the return shipping cost.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;