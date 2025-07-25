import { Shirt, Smartphone, Package2, Layers } from "lucide-react";
import aritziaLogo from "@/assets/aritzia-logo.png";
import amazonLogo from "@/assets/amazon-logo.png";
import zaraLogo from "@/assets/zara-logo.png";
import hmLogo from "@/assets/hm-logo.png";
import bestbuyLogo from "@/assets/bestbuy-logo.png";

const Services = () => {
  const brands = [
    { name: "Aritzia", logo: aritziaLogo },
    { name: "Amazon.ca", logo: amazonLogo },
    { name: "Zara", logo: zaraLogo },
    { name: "H&M", logo: hmLogo },
    { name: "Best Buy", logo: bestbuyLogo },
    { name: "Aritzia", logo: aritziaLogo },
    { name: "Amazon.ca", logo: amazonLogo },
    { name: "Zara", logo: zaraLogo },
  ];

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

        {/* Scrolling Brand Logos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Returns made easy - even from 100+ stores, including:
          </h3>
          
          <div className="relative overflow-hidden py-8">
            {/* First row - scrolling left */}
            <div className="flex animate-scroll-left mb-8">
              {[...brands, ...brands].map((brand, index) => (
                <div key={`left-${index}`} className="flex-shrink-0 mx-8">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
            
            {/* Second row - scrolling right */}
            <div className="flex animate-scroll-right">
              {[...brands, ...brands].map((brand, index) => (
                <div key={`right-${index}`} className="flex-shrink-0 mx-8">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-center text-sm text-muted-foreground">
            All trademarks are the property of their respective owners. Baccksee is not affiliated with these brands. 
            We only pick up eligible items purchased online.
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