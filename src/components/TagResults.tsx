import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Copy, Check, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface TagResultsProps {
  tags: string[];
}

const TagResults: React.FC<TagResultsProps> = ({ tags }) => {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});
  const { toast } = useToast();

  const copyToClipboard = async (tag: string) => {
    await navigator.clipboard.writeText(tag);
    setCopiedStates(prev => ({ ...prev, [tag]: true }));
    toast({
      title: "Copied to clipboard!",
      description: `Tag "${tag}" copied successfully`,
      duration: 2000,
    });
    
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [tag]: false }));
    }, 2000);
  };

  const copyAllTags = async () => {
    const allTags = tags.join(', ');
    await navigator.clipboard.writeText(allTags);
    toast({
      title: "All tags copied!",
      description: "All tags copied to clipboard as comma-separated values",
      duration: 3000,
    });
  };

  const exportAsCSV = () => {
    const csvContent = `Product Tags\n${tags.join('\n')}`;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'shopify-product-tags.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    
    toast({
      title: "CSV Downloaded!",
      description: "Tags exported as CSV file successfully",
      duration: 3000,
    });
  };

  if (tags.length === 0) return null;

  // Categorize tags for different colors
  const getTagVariant = (tag: string, index: number) => {
    const variants = ['default', 'secondary', 'outline'];
    return variants[index % variants.length];
  };

  const getTagColor = (tag: string, index: number) => {
    const colors = [
      'bg-primary/20 text-primary border-primary/30',
      'bg-accent/20 text-accent border-accent/30', 
      'bg-green-500/20 text-green-400 border-green-500/30',
      'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'bg-pink-500/20 text-pink-400 border-pink-500/30',
      'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="glass-card p-8 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold mb-2">Generated Tags ({tags.length})</h3>
          <p className="text-muted-foreground">Click any tag to copy it individually, or use the buttons below for bulk actions.</p>
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={copyAllTags}
            variant="outline"
            className="glass border-white/20 hover:bg-primary/20"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy All
          </Button>
          <Button 
            onClick={exportAsCSV}
            variant="outline"
            className="glass border-white/20 hover:bg-accent/20"
          >
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Tags Grid */}
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <div
            key={`${tag}-${index}`}
            className="tag-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Badge
              variant="outline"
              className={`${getTagColor(tag, index)} cursor-pointer hover:scale-105 transition-all duration-300 px-3 py-2 text-sm font-medium flex items-center gap-2 group`}
              onClick={() => copyToClipboard(tag)}
            >
              <span>{tag}</span>
              {copiedStates[tag] ? (
                <Check className="w-3 h-3 text-green-400" />
              ) : (
                <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </Badge>
          </div>
        ))}
      </div>

      {/* Tag Categories Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{tags.filter(tag => tag.includes('premium') || tag.includes('quality') || tag.includes('luxury')).length}</div>
          <div className="text-sm text-muted-foreground">Quality Tags</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">{tags.filter(tag => tag.includes('sale') || tag.includes('affordable') || tag.includes('budget')).length}</div>
          <div className="text-sm text-muted-foreground">Price Tags</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{tags.filter(tag => tag.includes('trending') || tag.includes('popular') || tag.includes('bestseller')).length}</div>
          <div className="text-sm text-muted-foreground">Trending Tags</div>
        </div>
      </div>
    </div>
  );
};

export default TagResults;