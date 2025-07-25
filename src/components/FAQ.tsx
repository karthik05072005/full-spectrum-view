import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqData = {
    "managing": {
      title: "Managing Your Pickup",
      questions: [
        {
          question: "The pickup date/time I requested no longer works. Can I cancel or reschedule?",
          answer: "Absolutely. You can cancel or reschedule your pickup by letting us know at least 3 hours before your scheduled window."
        },
        {
          question: "I've changed my mind about my pickup — can I update it?",
          answer: "Yes — as long as you notify us at least 3 hours in advance, we'll happily update your pickup time."
        },
        {
          question: "What days and times can I schedule a pickup?",
          answer: "You can book pickups 6 days a week — with time slots available from 6PM to 9PM."
        },
        {
          question: "Do I need to be home at the time of pickup?",
          answer: "Nope. Just leave your item at the door (or a safe place), and we'll grab it during your chosen time window."
        },
        {
          question: "Do you return in-store purchases?",
          answer: "No — we only handle returns for online purchases that come with a return label or QR code."
        }
      ]
    },
    "service": {
      title: "Service and Pick ups",
      questions: [
        {
          question: "What if my return is more than 15kg or 5 items?",
          answer: "No problem — just let us know before booking. We may apply a small additional fee."
        },
        {
          question: "What do I need to do before Baccksee picks it up?",
          answer: "You'll need to file the return with the store and send us the return label."
        },
        {
          question: "What stores can I return to?",
          answer: "100+ stores supported — Amazon, Zara, Best Buy, etc."
        },
        {
          question: "Can I include pre-packed items?",
          answer: "Yes — if your item is already boxed and labeled, that's totally fine."
        },
        {
          question: "What happens after the driver picks up my return?",
          answer: "We'll deliver it and notify you once it's been dropped off."
        }
      ]
    },
    "pricing": {
      title: "Pricing and Payment",
      questions: [
        {
          question: "When do I need to pay?",
          answer: "You pay when you schedule your return pickup — not before."
        },
        {
          question: "How much does it cost?",
          answer: "Flat $12 for up to 5 items (or 15kg total). No surprises."
        },
        {
          question: "Do I need to box the item before pickup?",
          answer: "No. Just leave it in any shopping bag or pouch — we'll handle the rest."
        },
        {
          question: "How and when will I get my refund?",
          answer: "Your refund comes from the store, after we drop off your return."
        }
      ]
    },
    "general": {
      title: "General",
      questions: [
        {
          question: "Is Baccksee affiliated with these brands?",
          answer: "Nope. We just do the legwork — you get the refund."
        },
        {
          question: "Do you cover the cost of return shipping?",
          answer: "No — the return shipping must be prepaid by you or the retailer. If there's no label, we can help pack and drop it off, but you cover the cost."
        },
        {
          question: "Can you return anything I give you?",
          answer: "Not everything is eligible. Make sure the item is eligible before pickup. We help with packing, labeling, and drop-off — but shipping costs must be covered by you or the brand."
        }
      ]
    }
  };

  const filterQuestions = (questions: any[]) => {
    if (!searchQuery) return questions;
    return questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with search */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Frequently asked questions
          </h2>
          <div className="relative lg:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Looking for something?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background border-muted-foreground/20 focus:border-primary"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="managing" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-muted/30 p-1 h-auto">
            <TabsTrigger 
              value="managing" 
              className="text-sm font-medium py-3 px-4 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              Managing Your Pickup
            </TabsTrigger>
            <TabsTrigger 
              value="service"
              className="text-sm font-medium py-3 px-4 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              Service and Pick ups
            </TabsTrigger>
            <TabsTrigger 
              value="pricing"
              className="text-sm font-medium py-3 px-4 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              Pricing and Payment
            </TabsTrigger>
            <TabsTrigger 
              value="general"
              className="text-sm font-medium py-3 px-4 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              General
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          {Object.entries(faqData).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <Accordion type="single" collapsible className="space-y-4">
                {filterQuestions(category.questions).map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${key}-item-${index}`}
                    className="bg-card rounded-lg border border-border/50 px-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              {filterQuestions(category.questions).length === 0 && searchQuery && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No questions found matching your search.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FAQ;