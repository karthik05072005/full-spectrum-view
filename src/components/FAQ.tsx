import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you cover the cost of return shipping?",
      answer: "No, customers are responsible for covering the return shipping costs. We handle all the packing, labeling, and drop-off, but the actual shipping fees must be covered by you or the brand offering the return."
    },
    {
      question: "Can you return anything I give you?",
      answer: "We can handle most returnable items, but you need to ensure your items are eligible for return according to the retailer's return policy. We recommend checking with the original retailer before booking a pickup to confirm return eligibility."
    },
    {
      question: "How far in advance should I book a pickup?",
      answer: "We recommend booking your pickup at least 24-48 hours in advance to ensure availability. However, we often accommodate same-day or next-day pickups depending on our schedule and your location."
    },
    {
      question: "What areas do you service?",
      answer: "We currently provide service across major cities in Canada. Contact us to confirm if we service your specific area, as we're continuously expanding our coverage."
    },
    {
      question: "What happens if my return is rejected?",
      answer: "If a return is rejected by the retailer, we'll contact you immediately to discuss options. This could include returning the item to you or helping you understand why the return was rejected so you can address any issues."
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our service
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 border-none shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;