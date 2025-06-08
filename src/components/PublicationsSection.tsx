
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
    title: 'Assessment of the spatiotemporal dynamics of river discharge and groundwater recharge to support sustainable water management for irrigated agriculture in the Padsan River watershed',
    journal: 'Earth Science Informatics',
    year: '2025',
    status: 'published',
    doi: 'https://doi.org/10.1007/s12145-025-01707-1',
    tags: ['Groundwater Recharge', 'River Discharge', 'Sustainable Agriculture', 'Water Management', 'Remote Sensing'],
    abstract: 'This study assesses the spatiotemporal dynamics of river discharge and groundwater recharge to support sustainable water management for irrigated agriculture in the Padsan River watershed using advanced remote sensing and hydrological modeling techniques.'
  },
  {
    id: '2',
    title: 'Quantified Impact of Projected Climate Change on Groundwater Recharge and River Discharge Leveraging Open Access Geospatial Data',
    journal: 'Under Review',
    year: '2025',
    status: 'under-review',
    tags: ['Climate Change', 'Groundwater Recharge', 'River Discharge', 'Geospatial Data', 'Impact Assessment'],
    abstract: 'This research quantifies the projected impacts of climate change on groundwater recharge and river discharge patterns using open access geospatial data and climate models to support water resource planning and adaptation strategies.'
  },
  {
    id: '3',
    title: 'Municipal-level Flood Vulnerability, Extent and Depth Assessment using Validated High-Resolution Satellite Data and Interactive Web-based Flood Tool',
    journal: 'Under Review',
    year: '2025',
    status: 'under-review',
    tags: ['Flood Vulnerability', 'Satellite Data', 'Web-based Tools', 'Municipal Planning', 'Disaster Risk'],
    abstract: 'Development of a comprehensive municipal-level flood vulnerability assessment using validated high-resolution satellite data and an interactive web-based flood tool for enhanced disaster risk management and urban planning.'
  },
  {
    id: '4',
    title: 'Quantifying Impacts of Climate and Land Use Change on Groundwater Hydrology and Sustainability of the Quiaoit River Watershed',
    journal: 'Advances in Social Science, Education and Humanities Research',
    year: '2022',
    status: 'published',
    doi: 'https://doi.org/10.2991/assehr.k.220103.018',
    tags: ['Climate Change', 'Land Use Change', 'Groundwater Hydrology', 'Watershed Sustainability'],
    abstract: 'This study quantifies the impacts of climate and land use change on groundwater hydrology and sustainability in the Quiaoit River Watershed using integrated modeling approaches and scenario analysis.'
  },
  {
    id: '5',
    title: 'Flood Risk Assessment as Affected by Land Use Change for Policy Intervention: a case study of Quiaoit River Watershed',
    journal: 'Philippine Agricultural and Biosystems Engineering Journal',
    year: '2022',
    status: 'published',
    tags: ['Flood Risk Assessment', 'Land Use Change', 'Policy Intervention', 'Watershed Management'],
    abstract: 'Assessment of flood risk patterns affected by land use changes in the Quiaoit River Watershed, providing scientific basis for policy interventions and sustainable watershed management strategies.'
  },
  {
    id: '6',
    title: 'Quantifying the Impact of Land Use Change as Affected by Groundwater Hydrology Using SWAT-MODFLOW Modeling',
    journal: 'Philippine Agricultural and Biosystems Engineering Journal',
    year: '2022',
    status: 'published',
    tags: ['Land Use Change', 'Groundwater Hydrology', 'SWAT-MODFLOW', 'Hydrological Modeling'],
    abstract: 'Integration of SWAT and MODFLOW models to quantify the impact of land use changes on groundwater hydrology, providing insights for sustainable land and water resource management.'
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
            Peer-reviewed publications and ongoing research in remote sensing, water resources, and climate change adaptation
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
