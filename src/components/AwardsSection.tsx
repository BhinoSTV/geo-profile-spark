
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
    title: 'Third Place, Brown Bag Research Presentation Competition',
    organization: 'Asian Institute of Technology, Pathum Thani, Thailand - Language Center & Research Support Program',
    year: '2025',
    description: 'Third place in Brown Bag Research Presentation Competition conducted by the Language Center & Research Support Program (14 May – 18 June 2025)',
    type: 'research'
  },
  {
    id: '2',
    title: 'Certificate of Achievement - AIT Mini Olympics 2025',
    organization: 'Asian Institute of Technology, Student Union',
    year: '2025',
    description: 'Certificate of Achievement for participating and securing position in Badminton (Mat, Doubles) in AIT Mini Olympics organized by Student Union - Sports Committee',
    type: 'recognition'
  },
  {
    id: '3',
    title: 'Best Green Financing Solution for Emission Reduction',
    organization: '"Hacking Zero" Hackathon – Sustainability Expo, Asian Institute of Technology',
    year: '2023',
    description: 'Recognized for innovative green financing solution during sustainability hackathon in Thailand',
    type: 'excellence'
  },
  {
    id: '4',
    title: 'DOST PhD Scholar 2022',
    organization: 'Science Education Institute – Department of Science and Technology, Philippines',
    year: '2022',
    description: 'Foreign Graduate Scholarship Program for PhD in Remote Sensing and Geographic Information Systems',
    type: 'academic'
  },
  {
    id: '5',
    title: '1st Place – Technical Paper Presenters',
    organization: '16th International Agricultural and Biosystems Engineering Conference',
    year: '2019',
    description: 'First place for "Flood Risk Assessment as Affected by Land Use Change for Policy Intervention: A Quiaoit River Watershed Case Study"',
    type: 'research'
  },
  {
    id: '6',
    title: '2nd Place – Technical Paper Presenters',
    organization: '16th International Agricultural and Biosystems Engineering Conference',
    year: '2019',
    description: 'Second place for "Quantifying the Impact of Land Use Change as Affected by Groundwater Hydrology Using SWAT-MODFLOW Modeling"',
    type: 'research'
  },
  {
    id: '7',
    title: '1st Place Track and Field – Relay (100 m) Tournament',
    organization: 'AIT Mini Olympics, Asian Institute of Technology',
    year: '2023',
    description: 'First place in 100m relay during AIT Mini Olympics sports tournament',
    type: 'recognition'
  },
  {
    id: '8',
    title: '1st Place Basketball Tournament',
    organization: 'AIT Mini Olympics, Asian Institute of Technology',
    year: '2023',
    description: 'First place in basketball tournament during AIT Mini Olympics',
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
            Honors and achievements recognizing excellence in research, academics, and sports
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
