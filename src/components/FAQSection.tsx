import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "How do product tags help my Shopify store?",
      answer: "Product tags help organize your inventory, improve search functionality, enable automated collections, and boost SEO. They make it easier for you to manage products and for customers to find what they're looking for through site search and filters."
    },
    {
      question: "How many tags should I use per product?",
      answer: "We recommend using 10-20 relevant tags per product. This provides enough detail for organization without overwhelming your system. Quality is more important than quantity - focus on tags that accurately describe your product and will be useful for filtering and organization."
    },
    {
      question: "Can I edit the generated tags?",
      answer: "Absolutely! The generated tags are suggestions based on your product information. You can copy individual tags, modify them as needed, or use them as inspiration to create your own custom tags that better fit your brand and organization system."
    },
    {
      question: "Do tags affect my store's SEO?",
      answer: "While product tags aren't directly visible to customers, they can indirectly impact SEO by improving site organization, enabling better internal linking through automated collections, and helping search engines understand your product relationships. They also improve user experience through better search and filtering."
    },
    {
      question: "What's the difference between tags and collections?",
      answer: "Collections are customer-facing product groupings displayed on your storefront, while tags are internal organizational tools. Tags are more flexible and granular - you can have many tags per product, and they're perfect for behind-the-scenes organization, reporting, and automated collection rules."
    },
    {
      question: "How often should I update my product tags?",
      answer: "Review and update your tags quarterly or when adding new product lines. Update tags for seasonal items, trending keywords, or when your product focus changes. Regular maintenance ensures your tags remain relevant and useful for organization and discovery."
    },
    {
      question: "Can I use these tags for marketing campaigns?",
      answer: "Yes! Product tags are excellent for creating targeted marketing campaigns. You can use them to create automated email segments, social media ads targeting, inventory reports, and seasonal promotions. Tags make it easy to identify and group products for specific marketing initiatives."
    },
    {
      question: "Are there any tag limitations in Shopify?",
      answer: "Shopify allows up to 250 tags per product, but we recommend staying under 25 for optimal performance. Tags are case-sensitive, and spaces in tags will create separate words. Keep tags concise and avoid special characters except hyphens and underscores."
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center space-y-4 mb-12">
        <div className="flex items-center justify-center gap-3">
          <HelpCircle className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Everything you need to know about product tags and our generator
        </p>
      </div>

      <div className="glass-card p-8">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-white/10 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline px-6 py-4 text-left bg-white/5 hover:bg-white/10 transition-colors duration-300">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Contact section */}
      <div className="text-center mt-12 glass-card p-6">
        <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
        <p className="text-muted-foreground">
          This tool is designed to help Shopify store owners optimize their product organization. 
          For more advanced features or custom solutions, consider consulting with a Shopify expert.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;