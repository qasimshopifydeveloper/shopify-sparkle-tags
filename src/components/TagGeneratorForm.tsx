import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, Sparkles } from 'lucide-react';
import RealTimeCounters from './RealTimeCounters';

interface FormData {
  productTitle: string;
  category: string;
  description: string;
  priceRange: string;
  targetAudience: string[];
  features: string;
}

interface TagGeneratorFormProps {
  onGenerate: (formData: FormData) => void;
  isLoading: boolean;
}

const TagGeneratorForm: React.FC<TagGeneratorFormProps> = ({ onGenerate, isLoading }) => {
  const [formData, setFormData] = useState<FormData>({
    productTitle: '',
    category: '',
    description: '',
    priceRange: '',
    targetAudience: [],
    features: '',
  });

  const categories = [
    'Electronics', 'Clothing', 'Home & Garden', 'Beauty', 'Sports', 
    'Books', 'Jewelry', 'Toys', 'Food & Beverages', 'Health', 'Automotive', 'Other'
  ];

  const priceRanges = [
    'Under $25', '$25-$50', '$50-$100', '$100-$250', '$250+'
  ];

  const audiences = [
    'Men', 'Women', 'Kids', 'Teens', 'Adults', 'Seniors'
  ];

  const handleAudienceChange = (audience: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      targetAudience: checked 
        ? [...prev.targetAudience, audience]
        : prev.targetAudience.filter(a => a !== audience)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <div className="glass-card p-8 max-w-6xl mx-auto">
      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Product Title */}
          <div className="space-y-2">
            <Label htmlFor="productTitle" className="text-lg font-semibold">Product Title</Label>
            <Input
              id="productTitle"
              placeholder="Enter your product title"
              value={formData.productTitle}
              onChange={(e) => setFormData(prev => ({ ...prev, productTitle: e.target.value }))}
              className="glass text-foreground placeholder:text-muted-foreground border-white/20 focus:border-primary/50 transition-all duration-300"
              required
            />
          </div>

          {/* Category and Price Range */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category" className="text-lg font-semibold">Product Category</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                <SelectTrigger className="glass border-white/20 focus:border-primary/50">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="glass-card border-white/20">
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priceRange" className="text-lg font-semibold">Price Range</Label>
              <Select value={formData.priceRange} onValueChange={(value) => setFormData(prev => ({ ...prev, priceRange: value }))}>
                <SelectTrigger className="glass border-white/20 focus:border-primary/50">
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent className="glass-card border-white/20">
                  {priceRanges.map(range => (
                    <SelectItem key={range} value={range}>{range}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-lg font-semibold">Product Description</Label>
            <Textarea
              id="description"
              placeholder="Enter a detailed description of your product..."
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="glass text-foreground placeholder:text-muted-foreground border-white/20 focus:border-primary/50 transition-all duration-300 min-h-32"
              rows={4}
            />
          </div>

          {/* Target Audience */}
          <div className="space-y-3">
            <Label className="text-lg font-semibold">Target Audience</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {audiences.map(audience => (
                <div key={audience} className="flex items-center space-x-2 glass-card p-3 rounded-lg">
                  <Checkbox
                    id={audience}
                    checked={formData.targetAudience.includes(audience)}
                    onCheckedChange={(checked) => handleAudienceChange(audience, checked as boolean)}
                    className="border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <label htmlFor={audience} className="text-sm font-medium cursor-pointer">{audience}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <Label htmlFor="features" className="text-lg font-semibold">Product Features</Label>
            <Input
              id="features"
              placeholder="e.g., waterproof, wireless, organic, premium quality"
              value={formData.features}
              onChange={(e) => setFormData(prev => ({ ...prev, features: e.target.value }))}
              className="glass text-foreground placeholder:text-muted-foreground border-white/20 focus:border-primary/50 transition-all duration-300"
            />
          </div>

          {/* Generate Button */}
          <Button
            type="submit"
            disabled={isLoading || !formData.productTitle || !formData.category}
            className="w-full gradient-primary hover:scale-105 transition-all duration-300 glow-primary text-lg py-6 font-semibold"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Generating Smart Tags...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Smart Tags ✨
              </>
            )}
          </Button>
        </div>

        {/* Real-time Counters Sidebar */}
        <div className="space-y-6">
          <div className="glass-card p-6 space-y-6">
            <h3 className="text-xl font-bold text-center">Live Analytics</h3>
            
            <RealTimeCounters text={formData.productTitle} label="Title" />
            <RealTimeCounters text={formData.description} label="Description" />
            <RealTimeCounters text={formData.features} label="Features" />
            
            {/* Form completion indicator */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Form Completion</p>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="gradient-primary h-2 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${((formData.productTitle ? 25 : 0) + 
                              (formData.category ? 25 : 0) + 
                              (formData.description ? 25 : 0) + 
                              (formData.priceRange ? 25 : 0))}%` 
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TagGeneratorForm;