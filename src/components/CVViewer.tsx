
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface CVEntry {
  id: string;
  type: 'education' | 'work' | 'training' | 'publication' | 'award';
  title: string;
  institution: string;
  location: string;
  year: string;
  description: string;
  tags?: string[];
  link?: string;
}

// Sample data - replace with your actual CV data
const cvData: CVEntry[] = [
  {
    id: '1',
    type: 'education',
    title: 'Ph.D. in Remote Sensing',
    institution: 'University Name',
    location: 'City, Country',
    year: '2020',
    description: 'Dissertation on groundwater monitoring using satellite data',
    tags: ['Remote Sensing', 'Groundwater', 'Satellite Data']
  },
  {
    id: '2',
    type: 'work',
    title: 'Senior Research Scientist',
    institution: 'Research Institute',
    location: 'City, Country',
    year: '2021-Present',
    description: 'Leading research projects on climate change impacts on water resources',
    tags: ['Climate Change', 'Water Resources', 'GIS']
  },
  {
    id: '3',
    type: 'publication',
    title: 'Groundwater Depletion Assessment Using Remote Sensing',
    institution: 'Journal of Hydrology',
    location: 'International',
    year: '2023',
    description: 'Peer-reviewed article on satellite-based groundwater monitoring',
    tags: ['Remote Sensing', 'Groundwater', 'GRACE'],
    link: 'https://doi.org/example'
  },
  {
    id: '4',
    type: 'training',
    title: 'Advanced GIS and Remote Sensing',
    institution: 'NASA Training Center',
    location: 'USA',
    year: '2022',
    description: 'Intensive training on latest satellite technologies',
    tags: ['GIS', 'Satellite Technology', 'NASA']
  }
];

const CVViewer = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'education', label: 'Education' },
    { value: 'work', label: 'Work Experience' },
    { value: 'training', label: 'Training' },
    { value: 'publication', label: 'Publications' },
    { value: 'award', label: 'Awards' }
  ];

  const years = ['all', ...Array.from(new Set(cvData.map(item => item.year.split('-')[0]))).sort().reverse()];

  const filteredData = cvData.filter(item => {
    const typeMatch = selectedFilter === 'all' || item.type === selectedFilter;
    const yearMatch = selectedYear === 'all' || item.year.includes(selectedYear);
    return typeMatch && yearMatch;
  });

  const getTypeColor = (type: string) => {
    const colors = {
      education: 'bg-blue-100 text-blue-800',
      work: 'bg-green-100 text-green-800',
      training: 'bg-purple-100 text-purple-800',
      publication: 'bg-orange-100 text-orange-800',
      award: 'bg-yellow-100 text-yellow-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="cv" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Curriculum Vitae</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my academic and professional journey through interactive filters
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map(filter => (
              <Button
                key={filter.value}
                variant={selectedFilter === filter.value ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter.value)}
                className="transition-all duration-200"
              >
                {filter.label}
              </Button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-muted-foreground self-center mr-2">Year:</span>
            {years.map(year => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedYear(year)}
                className="transition-all duration-200"
              >
                {year === 'all' ? 'All Years' : year}
              </Button>
            ))}
          </div>
        </div>

        {/* CV Entries */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {filteredData.map(entry => (
            <Card key={entry.id} className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 flex items-center gap-2">
                      {entry.title}
                      {entry.link && (
                        <a 
                          href={entry.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </CardTitle>
                    <div className="space-y-1 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{entry.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{entry.year}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={getTypeColor(entry.type)}>
                    {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{entry.description}</p>
                {entry.tags && (
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No entries match your current filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CVViewer;
