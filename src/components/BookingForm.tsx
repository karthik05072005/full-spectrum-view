import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pickupDate: "",
    address: "",
    parcelDetails: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pickup Scheduled!",
      description: "We'll contact you soon to confirm your pickup details.",
    });
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      pickupDate: "",
      address: "",
      parcelDetails: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="book-pickup" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Book a Pickup
          </h2>
          <p className="text-xl text-muted-foreground">
            Fill out the form below to schedule your return pickup
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickupDate">Preferred Pickup Date</Label>
                <Input
                  id="pickupDate"
                  name="pickupDate"
                  type="date"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Pickup Address</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your full pickup address"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="parcelDetails">Parcel Details</Label>
              <Textarea
                id="parcelDetails"
                name="parcelDetails"
                value={formData.parcelDetails}
                onChange={handleChange}
                placeholder="Please describe the items you need to return (e.g., clothing, electronics, number of items, approximate weight)"
                rows={4}
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              Book Pickup
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;