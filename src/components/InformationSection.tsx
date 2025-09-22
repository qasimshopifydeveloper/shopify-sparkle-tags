import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tags, Search, TrendingUp, Target, Zap, ShoppingBag } from 'lucide-react';

const InformationSection = () => {
  const benefits = [
    {
      icon: Tags,
      title: "Better Organization",
      description: "Organize your products systematically with relevant tags that make sense to both you and your customers."
    },
    {
      icon: Search,
      title: "Enhanced Discoverability", 
      description: "Help customers find your products faster with descriptive tags that match their search intent."
    },
    {
      icon: TrendingUp,
      title: "SEO Optimization",
      description: "Improve your store's search engine visibility with strategically chosen tags that boost organic traffic."
    },
    {
      icon: Target,
      title: "Targeted Marketing",
      description: "Create focused marketing campaigns by grouping products with similar tags and characteristics."
    },
    {
      icon: Zap,
      title: "Time Efficiency",
      description: "Generate comprehensive tag sets in seconds instead of spending hours brainstorming and researching."
    },
    {
      icon: ShoppingBag,
      title: "Increased Sales",
      description: "Better product organization and discoverability leads to improved customer experience and higher conversions."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
      {/* Main explanation */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Why Product Tags Matter for Your Shopify Store
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Product tags are powerful organizational tools that help categorize and classify your products beyond traditional collections. 
          They're essential for internal organization, customer navigation, and search engine optimization.
        </p>
      </div>

      {/* Benefits grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card 
            key={benefit.title}
            className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 rounded-full bg-primary/20 w-fit">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground leading-relaxed">
                {benefit.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Best practices */}
      <div className="glass-card p-8 space-y-6">
        <h3 className="text-2xl font-bold text-center mb-6">Best Practices for Shopify Product Tags</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">✅ Do This</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Use 10-20 relevant tags per product</li>
              <li>• Include product category and subcategory</li>
              <li>• Add target audience specifications</li>
              <li>• Include size, color, and material tags</li>
              <li>• Use seasonal and trending keywords</li>
              <li>• Add price range indicators</li>
              <li>• Include brand and quality descriptors</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-destructive">❌ Avoid This</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Don't use irrelevant or misleading tags</li>
              <li>• Avoid overly generic tags like "product"</li>
              <li>• Don't duplicate collection names as tags</li>
              <li>• Avoid using too many tags (over 25)</li>
              <li>• Don't use tags with spelling errors</li>
              <li>• Avoid tags that don't add value</li>
              <li>• Don't forget to update tags regularly</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-6 border-t border-white/10">
          <p className="text-sm text-muted-foreground">
            Remember: Tags are not visible to customers on your storefront, but they power your store's internal organization and can be used for automated collections, reporting, and marketing campaigns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;