import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">
          <span className="text-primary">Bacck</span>
          <span className="text-foreground">see</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-foreground hover:text-primary transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
          <Button
            onClick={() => scrollToSection('book-pickup')}
            className="bg-primary hover:bg-primary/90"
          >
            Book a Pickup
          </Button>
        </nav>

        <Button
          className="md:hidden bg-primary hover:bg-primary/90"
          onClick={() => scrollToSection('book-pickup')}
        >
          Book Pickup
        </Button>
      </div>
    </header>
  );
};

export default Header;