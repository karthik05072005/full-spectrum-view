import { Shield, Package, MapPin } from "lucide-react";

const TrustSafety = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Background-Checked Staff",
      description: "All our delivery professionals undergo thorough background checks and training"
    },
    {
      icon: <Package className="h-12 w-12 text-primary" />,
      title: "Secure Handling",
      description: "Your items are carefully packed and securely transported throughout the return process"
    },
    {
      icon: <MapPin className="h-12 w-12 text-primary" />,
      title: "Live Tracking",
      description: "Track your return from pickup to delivery with real-time updates"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Trust & Safety
          </h2>
          <p className="text-xl text-muted-foreground">
            Your items are in good hands with our professional team
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 text-center">
          <blockquote className="text-xl lg:text-2xl text-foreground italic mb-6">
            "Our commitment to professional service and customer satisfaction is at the heart of 
            everything we do. With Baccksee, you can trust that your returns are handled with care 
            from start to finish."
          </blockquote>
          <cite className="text-primary font-semibold">
            — The Baccksee Team
          </cite>
        </div>
      </div>
    </section>
  );
};

export default TrustSafety;