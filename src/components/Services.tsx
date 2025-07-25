import { Shirt, Smartphone, Package2, Layers } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Shirt className="h-8 w-8 text-primary" />,
      title: "Clothing Returns",
      description: "No need to find the right box or packaging"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Electronics",
      description: "Safe handling of delicate items"
    },
    {
      icon: <Package2 className="h-8 w-8 text-primary" />,
      title: "Large Items",
      description: "No hassle with awkward parcels"
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Multiple Returns",
      description: "One pickup for multiple packages"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            We Make Returns Effortless
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're returning clothes, electronics, or household items, we make returns effortless — 
            no more trips to the post office or worrying about packing.
          </p>
          <p className="text-foreground">
            Before we pick it up, make sure your item is eligible for return. We'll help with packing, 
            labeling, and dropping it off — but the return shipping cost must be covered by you or the brand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;