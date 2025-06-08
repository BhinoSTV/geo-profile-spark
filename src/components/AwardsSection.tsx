
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Trophy, Star, Medal } from 'lucide-react';

interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  type: 'excellence' | 'research' | 'academic' | 'recognition';
}

const awards: AwardItem[] = [
  {
    id: '1',
    title: 'Excellence in Remote Sensing Research Award',
    organization: 'International Society for Remote Sensing',
    year: '2023',
    description: 'Recognized for outstanding contributions to groundwater monitoring using satellite technologies',
    type: 'excellence'
  },
  {
    id: '2',
    title: 'Best PhD Dissertation Award',
    organization: 'University Name',
    year: '2020',
    description: 'Awarded for exceptional research on satellite-based water resource assessment',
    type: 'academic'
  },
  {
    id: '3',
    title: 'Young Researcher Grant',
    organization: 'National Science Foundation',
    year: '2022',
    description: 'Competitive grant for early-career researchers in Earth observation sciences',
    type: 'research'
  },
  {
    id: '4',
    title: 'Outstanding Paper Award',
    organization: 'Remote Sensing Conference',
    year: '2023',
    description: 'Best paper award at the International Conference on Remote Sensing Applications',
    type: 'recognition'
  }
];

const AwardsSection = () => {
  const getAwardIcon = (type: string) => {
    const icons = {
      excellence: Trophy,
      research: Star,
      academic: Medal,
      recognition: Award
    };
    const IconComponent = icons[type as keyof typeof icons] || Award;
    return <IconComponent size={32} className="text-yellow-600" />;
  };

  const getAwardColor = (type: string) => {
    const colors = {
      excellence: 'border-l-yellow-500 bg-yellow-50',
      research: 'border-l-blue-500 bg-blue-50',
      academic: 'border-l-purple-500 bg-purple-50',
      recognition: 'border-l-green-500 bg-green-50'
    };
    return colors[type as keyof typeof colors] || 'border-l-gray-500 bg-gray-50';
  };

  return (
    <section id="awards" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Awards & Recognition</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Honors and achievements recognizing excellence in research and academic contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {awards.map(award => (
            <Card 
              key={award.id} 
              className={`hover:shadow-lg transition-all duration-200 border-l-4 ${getAwardColor(award.type)}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {getAwardIcon(award.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {award.title}
                    </h3>
                    <div className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">{award.organization}</span> • {award.year}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
