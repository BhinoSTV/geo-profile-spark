
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, FileText } from 'lucide-react';

interface Publication {
  id: string;
  title: string;
  journal: string;
  year: string;
  status: 'published' | 'under-review' | 'in-preparation';
  doi?: string;
  tags: string[];
  abstract: string;
}

const publications: Publication[] = [
  {
    id: '1',
    title: 'Satellite-based Groundwater Monitoring in Arid Regions: A Machine Learning Approach',
    journal: 'Remote Sensing of Environment',
    year: '2023',
    status: 'published',
    doi: 'https://doi.org/10.1016/example',
    tags: ['Remote Sensing', 'Groundwater', 'Machine Learning', 'Arid Regions'],
    abstract: 'This study presents a novel approach to groundwater monitoring using satellite data and machine learning algorithms...'
  },
  {
    id: '2',
    title: 'Climate Change Impacts on Water Resources: A GIS-based Assessment',
    journal: 'Journal of Hydrology',
    year: '2024',
    status: 'under-review',
    tags: ['Climate Change', 'Water Resources', 'GIS', 'Impact Assessment'],
    abstract: 'We assess the potential impacts of climate change on regional water resources using advanced GIS modeling techniques...'
  },
  {
    id: '3',
    title: 'Integration of GRACE Data for Large-scale Groundwater Depletion Analysis',
    journal: 'Water Resources Research',
    year: '2024',
    status: 'in-preparation',
    tags: ['GRACE', 'Groundwater Depletion', 'Satellite Gravimetry'],
    abstract: 'This research integrates GRACE satellite data with local measurements to provide comprehensive groundwater depletion maps...'
  }
];

const PublicationsSection = () => {
  const getStatusColor = (status: string) => {
    const colors = {
      'published': 'bg-green-100 text-green-800',
      'under-review': 'bg-yellow-100 text-yellow-800',
      'in-preparation': 'bg-blue-100 text-blue-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (status: string) => {
    const texts = {
      'published': 'Published',
      'under-review': 'Under Review',
      'in-preparation': 'In Preparation'
    };
    return texts[status as keyof typeof texts] || status;
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Publications & Research</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peer-reviewed publications and ongoing research in remote sensing and water resources
          </p>
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {publications.map(pub => (
            <Card key={pub.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 flex items-center gap-2">
                      <FileText size={20} className="text-blue-600" />
                      {pub.title}
                      {pub.doi && (
                        <a 
                          href={pub.doi} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 ml-2"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </CardTitle>
                    <div className="text-muted-foreground mb-2">
                      <span className="font-medium">{pub.journal}</span> • {pub.year}
                    </div>
                  </div>
                  <Badge className={getStatusColor(pub.status)}>
                    {getStatusText(pub.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {pub.abstract}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
