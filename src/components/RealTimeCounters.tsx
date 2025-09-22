import React from 'react';
import { Badge } from '@/components/ui/badge';

interface RealTimeCountersProps {
  text: string;
  label: string;
}

const RealTimeCounters: React.FC<RealTimeCountersProps> = ({ text, label }) => {
  // Calculate metrics
  const characters = text.length;
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const paragraphs = text.trim() === '' ? 0 : text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;

  const counters = [
    { label: 'Characters', value: characters, className: 'counter-characters' },
    { label: 'Words', value: words, className: 'counter-words' },
    { label: 'Sentences', value: sentences, className: 'counter-sentences' },
    { label: 'Paragraphs', value: paragraphs, className: 'counter-paragraphs' },
  ];

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-muted-foreground">{label} Metrics</p>
      <div className="grid grid-cols-2 gap-2">
        {counters.map((counter) => (
          <Badge
            key={counter.label}
            variant="outline"
            className={`${counter.className} justify-between px-3 py-1 transition-all duration-300 hover:scale-105`}
          >
            <span className="text-xs">{counter.label}</span>
            <span className="font-bold">{counter.value}</span>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default RealTimeCounters;