interface FormData {
  productTitle: string;
  category: string;
  description: string;
  priceRange: string;
  targetAudience: string[];
  features: string;
}

export const generateTags = (formData: FormData): string[] => {
  const tags: Set<string> = new Set();
  
  // Extract keywords from title
  const titleWords = formData.productTitle.toLowerCase()
    .split(/\s+/)
    .filter(word => word.length > 2)
    .filter(word => !['the', 'and', 'for', 'with', 'from'].includes(word));
  
  titleWords.forEach(word => {
    tags.add(word);
    tags.add(`${word}-product`);
  });

  // Category-based tags
  if (formData.category) {
    tags.add(formData.category.toLowerCase().replace(/\s+/g, '-'));
    tags.add(formData.category.toLowerCase());
    
    // Subcategory suggestions based on main category
    const categoryTags = getCategoryTags(formData.category);
    categoryTags.forEach(tag => tags.add(tag));
  }

  // Price range tags
  if (formData.priceRange) {
    const priceTagMap: { [key: string]: string[] } = {
      'Under $25': ['budget', 'affordable', 'cheap', 'under-25', 'budget-friendly'],
      '$25-$50': ['mid-range', 'moderate', '25-50', 'reasonable'],
      '$50-$100': ['premium', 'quality', '50-100', 'mid-premium'],
      '$100-$250': ['luxury', 'high-end', '100-250', 'premium-quality'],
      '$250+': ['luxury', 'exclusive', 'high-end', 'premium', 'expensive']
    };
    
    const priceTags = priceTagMap[formData.priceRange] || [];
    priceTags.forEach(tag => tags.add(tag));
  }

  // Target audience tags
  formData.targetAudience.forEach(audience => {
    tags.add(audience.toLowerCase());
    tags.add(`for-${audience.toLowerCase()}`);
    
    // Additional audience-based tags
    const audienceTags = getAudienceTags(audience);
    audienceTags.forEach(tag => tags.add(tag));
  });

  // Feature-based tags
  if (formData.features) {
    const featureWords = formData.features.toLowerCase()
      .split(/[,\s]+/)
      .filter(word => word.length > 2);
    
    featureWords.forEach(feature => {
      tags.add(feature);
      tags.add(`${feature}-feature`);
    });
  }

  // Description-based tags
  if (formData.description) {
    const descWords = extractKeywords(formData.description);
    descWords.forEach(word => tags.add(word));
  }

  // Add seasonal and trending tags
  const seasonalTags = getSeasonalTags();
  const trendingTags = getTrendingTags();
  
  // Add a few seasonal/trending tags randomly
  const randomSeasonal = seasonalTags.slice(0, 2);
  const randomTrending = trendingTags.slice(0, 3);
  
  randomSeasonal.forEach(tag => tags.add(tag));
  randomTrending.forEach(tag => tags.add(tag));

  // Add quality indicators
  const qualityTags = ['bestseller', 'popular', 'trending', 'new-arrival', 'featured'];
  qualityTags.slice(0, 2).forEach(tag => tags.add(tag));

  // Convert to array and limit to 25 tags
  const tagArray = Array.from(tags)
    .filter(tag => tag.length > 1)
    .slice(0, 25);

  return tagArray;
};

const getCategoryTags = (category: string): string[] => {
  const categoryMap: { [key: string]: string[] } = {
    'Electronics': ['tech', 'gadget', 'digital', 'smart', 'electronic-device'],
    'Clothing': ['fashion', 'apparel', 'wear', 'style', 'outfit'],
    'Home & Garden': ['home-decor', 'garden', 'house', 'outdoor', 'interior'],
    'Beauty': ['cosmetics', 'skincare', 'makeup', 'beauty-product', 'self-care'],
    'Sports': ['fitness', 'workout', 'active', 'athletic', 'exercise'],
    'Books': ['reading', 'literature', 'educational', 'learning', 'knowledge'],
    'Jewelry': ['accessories', 'precious', 'elegant', 'fashion-jewelry', 'gift'],
    'Toys': ['kids', 'fun', 'educational-toy', 'playtime', 'children'],
    'Food & Beverages': ['edible', 'consumable', 'nutrition', 'gourmet', 'food-item'],
    'Health': ['wellness', 'medical', 'healthcare', 'supplement', 'natural'],
    'Automotive': ['car', 'vehicle', 'auto-parts', 'driving', 'automotive-accessory'],
    'Other': ['miscellaneous', 'general', 'universal', 'multi-purpose']
  };

  return categoryMap[category] || [];
};

const getAudienceTags = (audience: string): string[] => {
  const audienceMap: { [key: string]: string[] } = {
    'Men': ['male', 'masculine', 'guys', 'gentlemen'],
    'Women': ['female', 'feminine', 'ladies', 'girls'],
    'Kids': ['children', 'child', 'young', 'junior'],
    'Teens': ['teenager', 'youth', 'adolescent', 'young-adult'],
    'Adults': ['grown-up', 'mature', 'adult-sized'],
    'Seniors': ['elderly', 'mature-adult', 'senior-citizen']
  };

  return audienceMap[audience] || [];
};

const extractKeywords = (text: string): string[] => {
  const stopWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those', 'a', 'an'];
  
  return text.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3)
    .filter(word => !stopWords.includes(word))
    .slice(0, 10);
};

const getSeasonalTags = (): string[] => {
  const month = new Date().getMonth();
  
  if (month >= 2 && month <= 4) return ['spring', 'fresh', 'renewal'];
  if (month >= 5 && month <= 7) return ['summer', 'vacation', 'outdoor'];
  if (month >= 8 && month <= 10) return ['autumn', 'fall', 'cozy'];
  return ['winter', 'holiday', 'gift'];
};

const getTrendingTags = (): string[] => {
  return [
    'eco-friendly',
    'sustainable',
    'organic',
    'handmade',
    'artisan',
    'vintage',
    'minimalist',
    'modern',
    'classic',
    'innovative'
  ];
};