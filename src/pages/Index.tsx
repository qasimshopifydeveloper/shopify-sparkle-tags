import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import TagGeneratorForm from '@/components/TagGeneratorForm';
import TagResults from '@/components/TagResults';
import InformationSection from '@/components/InformationSection';
import FAQSection from '@/components/FAQSection';
import { generateTags } from '@/utils/tagGenerator';

interface FormData {
  productTitle: string;
  category: string;
  description: string;
  priceRange: string;
  targetAudience: string[];
  features: string;
}

const Index = () => {
  const [generatedTags, setGeneratedTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateTags = async (formData: FormData) => {
    setIsLoading(true);
    
    // Simulate API call delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const tags = generateTags(formData);
    setGeneratedTags(tags);
    setIsLoading(false);

    // Smooth scroll to results
    setTimeout(() => {
      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <main className="container mx-auto px-6 space-y-16">
        {/* Form Section */}
        <section className="py-16">
          <TagGeneratorForm onGenerate={handleGenerateTags} isLoading={isLoading} />
        </section>

        {/* Results Section */}
        {generatedTags.length > 0 && (
          <section id="results-section" className="py-8">
            <TagResults tags={generatedTags} />
          </section>
        )}

        {/* Information Section */}
        <InformationSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-muted-foreground">
            Built with ❤️ for Shopify store owners. Generate smarter product tags to boost your store's organization and discoverability.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
