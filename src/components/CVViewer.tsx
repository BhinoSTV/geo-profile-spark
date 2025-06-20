
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

const cvData: CVEntry[] = [
  // Education
  {
    id: '1',
    type: 'education',
    title: 'PhD, Remote Sensing and Geographic Information Systems',
    institution: 'Asian Institute of Technology',
    location: 'Pathum Thani, Thailand',
    year: '2022-Present',
    description: 'PhD Scholar/Candidate in Remote Sensing and GIS applications for water resources management',
    tags: ['Remote Sensing', 'GIS', 'Water Resources', 'Climate Change']
  },
  {
    id: '2',
    type: 'education',
    title: 'PhD, Water Resources Development and Management',
    institution: 'Indian Institute of Technology - Roorkee',
    location: 'Uttarakhand, India',
    year: '2022-Present',
    description: 'Dual doctorate degree program focusing on water resources development and management',
    tags: ['Water Resources', 'Hydrology', 'Groundwater']
  },
  {
    id: '3',
    type: 'education',
    title: 'MS, Engineering - Soil and Water Resources Engineering',
    institution: 'Mariano Marcos State University-Graduate School',
    location: 'City of Batac, Ilocos Norte, Philippines',
    year: '2017-2020',
    description: 'Master of Science in Engineering specializing in Soil and Water Resources Engineering',
    tags: ['Soil Engineering', 'Water Resources', 'Environmental Engineering']
  },
  {
    id: '4',
    type: 'education',
    title: 'BS, Agricultural Engineering',
    institution: 'Mariano Marcos State University',
    location: 'City of Batac, Philippines',
    year: '2016',
    description: 'Bachelor of Science in Agricultural Engineering',
    tags: ['Agricultural Engineering', 'Irrigation', 'Water Management']
  },
  // Work Experience
  {
    id: '5',
    type: 'work',
    title: 'Center Head/Lead Research',
    institution: 'Geospatial Data Science and Technology Center (GeoSpaDa Hub)',
    location: 'Ilocos Norte, Philippines',
    year: '2023-Present',
    description: 'Leading research initiatives in geospatial data science and technology applications',
    tags: ['Geospatial Analysis', 'Data Science', 'Research Leadership']
  },
  {
    id: '6',
    type: 'work',
    title: 'RS&GIS Specialist',
    institution: 'Asian Institute of Technology, Regional Resource Center for Asia and Pacific Region (AIT-RRC.AP)',
    location: 'Thailand',
    year: '2023-Present',
    description: 'Remote Sensing and GIS specialist for regional projects across Asia and Pacific',
    tags: ['Remote Sensing', 'GIS', 'Regional Development', 'Climate Adaptation']
  },
  {
    id: '7',
    type: 'work',
    title: 'Instructor 1',
    institution: 'Mariano Marcos State University, College of Agriculture Food and Sustainable Development',
    location: 'Philippines',
    year: '2017-Present',
    description: 'Teaching and research in agricultural engineering and sustainable development',
    tags: ['Teaching', 'Agricultural Engineering', 'Sustainable Development']
  },
  // Publications - Updated with correct list without duplications
  {
    id: '8',
    type: 'publication',
    title: 'Assessment of the spatiotemporal dynamics of river discharge and groundwater recharge to support sustainable water management for irrigated agriculture in the Padsan River watershed',
    institution: 'Earth Science Informatics',
    location: 'International',
    year: '2025',
    description: 'Earth Sci Inform 18, 203 (2025). Assessment of spatiotemporal dynamics using advanced remote sensing and hydrological modeling techniques.',
    tags: ['Groundwater Recharge', 'River Discharge', 'Sustainable Agriculture', 'Water Management', 'Remote Sensing'],
    link: 'https://doi.org/10.1007/s12145-025-01707-1'
  },
  {
    id: '9',
    type: 'publication',
    title: 'Quantifying Impacts of Climate and Land Use Change on Groundwater Hydrology and Sustainability of the Quiaoit River Watershed',
    institution: 'Advances in Social Science, Education and Humanities Research',
    location: 'International',
    year: '2022',
    description: 'Advances in Social Science, Education and Humanities Research, 60. Quantifying impacts using integrated modeling approaches and scenario analysis.',
    tags: ['Climate Change', 'Land Use Change', 'Groundwater Hydrology', 'Watershed Sustainability'],
    link: 'https://doi.org/10.2991/assehr.k.220103.018'
  },
  {
    id: '10',
    type: 'publication',
    title: 'Quantified Impact of Projected Climate Change on Groundwater Recharge and River Discharge Leveraging the Use of Open Access Geospatial Data',
    institution: 'Research Square',
    location: 'International',
    year: '2025',
    description: 'PREPRINT (Version 1) available at Research Square. Quantifying projected impacts using open access geospatial data and climate models.',
    tags: ['Climate Change', 'Groundwater Recharge', 'River Discharge', 'Geospatial Data', 'Open Access'],
    link: 'https://doi.org/10.21203/rs.3.rs-6333077/v1'
  },
  {
    id: '11',
    type: 'publication',
    title: 'Flood Risk Assessment as Affected by Land Use Change for Policy Intervention: a case study of Quiaoit River Watershed',
    institution: 'Philippine Agricultural and Biosystems Engineering Journal',
    location: 'Philippines',
    year: '2022',
    description: 'Philippine Agricultural and Biosystems Engineering Journal, 3(1). ISSN: 2619-6913. pp. 28-43. Assessment of flood risk patterns for policy interventions.',
    tags: ['Flood Risk Assessment', 'Land Use Change', 'Policy Intervention', 'Watershed Management'],
    link: 'https://www.researchgate.net/publication/363212549_FLOOD_RISK_ASSESSMENT_AS_AFFECTED_BY_LAND_USE_CHANGE_FOR_POLICY_Philippine_Agricultural_and_Biosystems_Engineering_Journal'
  },
  {
    id: '12',
    type: 'publication',
    title: 'Quantifying the Impact of Land Use Change as Affected by Groundwater Hydrology Using SWAT-MODFLOW Modeling',
    institution: 'Philippine Agricultural and Biosystems Engineering Journal',
    location: 'Philippines',
    year: '2022',
    description: 'Philippine Agricultural and Biosystems Engineering Journal, 3(1). ISSN: 2619-6913. pp. 16-27. Integration of SWAT and MODFLOW models.',
    tags: ['Land Use Change', 'Groundwater Hydrology', 'SWAT-MODFLOW', 'Hydrological Modeling'],
    link: 'https://www.researchgate.net/publication/363212286_Quantifying_the_Impact_of_Land_Use_Change_as_Affected_by_Groundwater_Hydrology_Using_SWAT-_MODFLOW_Modeling_Philippine_Agricultural_and_Biosystems_Engineering_Journal'
  },
  {
    id: '13',
    type: 'publication',
    title: 'SUPPLEMENTARY INFORMATION: Detailed and Technical Procedures for Quartile Mapping as Bias Correction for CHIRPS',
    institution: 'Earth Science Informatics',
    location: 'International',
    year: '2025',
    description: 'Earth Sci Inform 18, 203 (2025). Detailed technical procedures and supplementary information for quartile mapping as bias correction.',
    tags: ['Supplementary Information', 'Technical Procedures', 'CHIRPS', 'Bias Correction', 'Quartile Mapping'],
    link: 'http://dx.doi.org/10.13140/RG.2.2.28749.14560'
  },
  // Training - No duplications, focused list
  {
    id: '14',
    type: 'training',
    title: 'Regional Training Workshop on Enhancing Climate and Disaster Risk Resilient Cities',
    institution: 'Regional Resource Centre for Asia and the Pacific – Asian Institute of Technology',
    location: 'Bangkok, Thailand',
    year: '2024',
    description: 'Training on climate and disaster risk resilience for cities in Asia and the Pacific region',
    tags: ['Climate Resilience', 'Disaster Risk', 'Urban Planning', 'Adaptation']
  },
  {
    id: '15',
    type: 'training',
    title: 'International Training Workshop on Applying Geospatial Data for Governance',
    institution: 'Mariano Marcos State University, Philippines, and Asian Institute of Technology, Thailand',
    location: 'City of Batac, Ilocos Norte, Philippines',
    year: '2023',
    description: 'Resource Person/Trainer for workshop on applying geospatial data for governance towards sustainable development',
    tags: ['Geospatial Data', 'Governance', 'Sustainable Development', 'Training']
  },
  // Awards - No duplications, focused list
  {
    id: '16',
    type: 'award',
    title: 'Best Green Financing Solution for Emission Reduction',
    institution: '"Hacking Zero" Hackathon – Sustainability Expo, Asian Institute of Technology',
    location: 'Thailand',
    year: '2023',
    description: 'Recognized for innovative green financing solution during sustainability hackathon',
    tags: ['Innovation', 'Sustainability', 'Green Finance', 'Hackathon']
  },
  {
    id: '17',
    type: 'award',
    title: 'DOST PhD Scholar 2022',
    institution: 'Science Education Institute – Department of Science and Technology, Philippines',
    location: 'Philippines',
    year: '2022',
    description: 'Foreign Graduate Scholarship Program for PhD in Remote Sensing and Geographic Information Systems',
    tags: ['Scholarship', 'PhD', 'Government Recognition', 'Education']
  },
  {
    id: '18',
    type: 'award',
    title: '1st Place – Technical Paper Presenters',
    institution: '16th International Agricultural and Biosystems Engineering Conference',
    location: 'Philippines',
    year: '2019',
    description: 'First place for "Flood Risk Assessment as Affected by Land Use Change for Policy Intervention: A Quiaoit River Watershed Case Study"',
    tags: ['Research Excellence', 'Conference Award', 'Technical Paper', 'Flood Risk']
  },
  {
    id: '19',
    type: 'award',
    title: '2nd Place – Technical Paper Presenters',
    institution: '16th International Agricultural and Biosystems Engineering Conference',
    location: 'Philippines',
    year: '2019',
    description: 'Second place for "Quantifying the Impact of Land Use Change as Affected by Groundwater Hydrology Using SWAT-MODFLOW Modeling"',
    tags: ['Research Excellence', 'Conference Award', 'Technical Paper', 'Hydrological Modeling']
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
            Explore my academic and professional journey.
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
