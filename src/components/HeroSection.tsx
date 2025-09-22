import React from 'react';
import { Sparkles, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] gradient-hero overflow-hidden">
      {/* Floating animated elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="float absolute top-20 left-10 w-16 h-16 bg-primary/30 rounded-full blur-sm"></div>
        <div className="float absolute top-40 right-20 w-24 h-24 bg-accent/30 rounded-full blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="float absolute bottom-20 left-1/4 w-20 h-20 bg-secondary/30 rounded-full blur-sm" style={{ animationDelay: '4s' }}></div>
        <div className="float absolute top-32 right-1/3 w-12 h-12 bg-primary/20 rounded-full blur-sm" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Title with tooltip */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Shopify Product Tag Generator
            </h1>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="w-8 h-8 text-white/70 hover:text-white cursor-help transition-colors duration-300" />
                </TooltipTrigger>
                <TooltipContent className="glass-card border-white/20 text-white max-w-sm p-4">
                  <p>Enter your product details above, then click Generate Tags to create optimized tags for better product organization and searchability</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            Generate optimized product tags instantly to boost your store's organization and discoverability
          </p>
          
          {/* Value proposition */}
          <div className="flex flex-wrap justify-center gap-4 text-white/70">
            <div className="flex items-center gap-2 glass-card px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Save Hours of Manual Work</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Boost SEO Performance</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span>Improve Store Organization</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;