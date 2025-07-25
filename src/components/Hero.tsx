import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/WhatsApp Video 2025-07-25 at 5.52.50 PM (1).mp4";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Hassle-Free Parcel Returns,{' '}
              <span className="text-primary">From Pickup to Drop-Off</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Baccksee is your complete pickup and return service that handles every step of the process. 
              No more packing, labeling, or trips to the post office.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                onClick={() => scrollToSection('book-pickup')}
              >
                Book a Pickup
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('how-it-works')}
              >
                Learn How It Works
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <video 
                src={heroVideo} 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[400px] lg:h-[500px] object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;