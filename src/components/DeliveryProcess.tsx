import packingImage from "@/assets/packing-process.jpg";
import labelingImage from "@/assets/labeling-process.jpg";
import transportImage from "@/assets/transport-process.jpg";
import trackingImage from "@/assets/tracking-process.jpg";
import dropoffImage from "@/assets/dropoff-process.jpg";
import heroImage from "@/assets/hero-delivery.jpg";

const DeliveryProcess = () => {
  const processes = [
    {
      title: "Pickup",
      description: "Our team arrives at your location to collect your returns",
      image: heroImage
    },
    {
      title: "Packing",
      description: "We carefully pack your items for secure shipping",
      image: packingImage
    },
    {
      title: "Labeling",
      description: "We ensure your returns are properly labeled for delivery",
      image: labelingImage
    },
    {
      title: "Transportation",
      description: "We handle the secure transport of your returns",
      image: transportImage
    },
    {
      title: "Tracking",
      description: "We provide real-time updates on your return status",
      image: trackingImage
    },
    {
      title: "Drop-Off",
      description: "We deliver your returns to the correct location",
      image: dropoffImage
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Our Delivery Process
          </h2>
          <p className="text-xl text-muted-foreground">
            See how our diverse team makes returns effortless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {processes.map((process, index) => (
            <div key={index} className="group">
              <div className="rounded-xl overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <img 
                  src={process.image} 
                  alt={`Baccksee staff member ${process.title.toLowerCase()}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {process.title}
              </h3>
              <p className="text-muted-foreground">
                {process.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Professional Service
            </h3>
            <p className="text-muted-foreground">
              Our trained staff provide exceptional service with every return
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Diverse Team
            </h3>
            <p className="text-muted-foreground">
              Our diverse staff provides inclusive service across Canada
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              End-to-End Solution
            </h3>
            <p className="text-muted-foreground">
              Complete returns management from pickup to delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryProcess;