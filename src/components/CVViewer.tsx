

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface CVEntry {
  id: string;
  type: 'education' | 'work' | 'training' | 'publication' | 'award' | 'seminar';
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
  // Training - Complete list
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
    title: 'Geospatial Technologies for Urban and Flood Mapping lecture seminar-workshop',
    institution: 'Drone Entry Co. – Asian Institute of Technology',
    location: 'Thailand',
    year: '2024',
    description: 'International Research Internship on AI for Civil Engineering and Drone Technologies - Resource Person',
    tags: ['Geospatial Technologies', 'Flood Mapping', 'AI', 'Drone Technologies']
  },
  {
    id: '16',
    type: 'training',
    title: 'International Training Workshop on Applying Geospatial Data for Governance',
    institution: 'Mariano Marcos State University, Philippines, and Asian Institute of Technology, Thailand',
    location: 'City of Batac, Ilocos Norte, Philippines',
    year: '2023',
    description: 'Resource Person/Trainer for workshop on applying geospatial data for governance towards sustainable development',
    tags: ['Geospatial Data', 'Governance', 'Sustainable Development', 'Training']
  },
  {
    id: '17',
    type: 'training',
    title: 'Bridging the Gap between Data and Information for Adaptation Planning',
    institution: 'Regional Resource Centre for Asia and Pacific, Asian Institute of Technology, Thailand & Ministry of Environment, Japan',
    location: 'Bangkok, Thailand',
    year: '2023',
    description: 'Resource Person, Organizer and Trainer - lecture during Regional Training Workshop on Climate Adaptation Tools',
    tags: ['Adaptation Planning', 'Climate Tools', 'Data Analysis', 'Information Systems']
  },
  {
    id: '18',
    type: 'training',
    title: 'Introducing FloodS Tool for Adaptation Planning',
    institution: 'Regional Resource Centre for Asia and Pacific, Asian Institute of Technology, Thailand & Ministry of Environment, Japan',
    location: 'Bangkok, Thailand',
    year: '2023',
    description: 'Resource Person - lecture in Regional Training Workshop on Building Cities Resilience to Climate and Disaster Risks',
    tags: ['FloodS Tool', 'Adaptation Planning', 'Climate Resilience', 'Disaster Risk']
  },
  {
    id: '19',
    type: 'training',
    title: 'Regional Training Workshop on Building Cities Resilience to Climate and Disaster Risks',
    institution: 'Regional Resource Centre for Asia and Pacific, Asian Institute of Technology, Thailand & Ministry of Environment, Japan',
    location: 'Bangkok, Thailand',
    year: '2023',
    description: 'Trainee/Participant in regional training workshop',
    tags: ['Climate Resilience', 'Disaster Risk', 'Urban Planning', 'Regional Development']
  },
  {
    id: '20',
    type: 'training',
    title: 'Water Resources Assessment Under Climate Uncertainties',
    institution: 'Department of Water Resources Development and management, Indian Institute of Technology and Indian Space Research Organisation-ISRO-RESPOND Programme',
    location: 'India',
    year: '2023',
    description: 'Participant in water resources assessment training under climate uncertainties',
    tags: ['Water Resources', 'Climate Assessment', 'ISRO', 'Uncertainty Analysis']
  },
  {
    id: '21',
    type: 'training',
    title: 'Climate Change risk Assessment for Southeast Asian Lakes (CCRASEAL)',
    institution: 'Asian Institute of Technology and Asia-Pacific Network for Global Change Research',
    location: 'Pathum Thani, Thailand',
    year: '2023',
    description: 'Participant - Thematic Regional Workshop on Integration of Earth Observation, Geospatial and Conventional Technologies for Water Quality and Quantity Monitoring',
    tags: ['Climate Change', 'Lakes Assessment', 'Earth Observation', 'Water Quality']
  },
  {
    id: '22',
    type: 'training',
    title: 'Vulnerability Assessment and Socio-Economic Component for Watershed Seminar',
    institution: 'National Irrigation Administration – Region 1',
    location: 'Laoag City, Ilocos Norte',
    year: '2022',
    description: 'Resource Speaker/Trainer for regional training on watershed vulnerability assessment',
    tags: ['Vulnerability Assessment', 'Socio-Economic', 'Watershed Management', 'Regional Training']
  },
  {
    id: '23',
    type: 'training',
    title: 'Training on the Preparation of Watershed management Plan for Sulvec Small Reservoir Irrigation Project',
    institution: 'National Irrigation Administration – Region 1',
    location: 'Philippines',
    year: '2021',
    description: 'Resource Speaker/Trainer for regional training on watershed management planning',
    tags: ['Watershed Management', 'Irrigation Planning', 'Small Reservoir', 'Regional Training']
  },
  {
    id: '24',
    type: 'training',
    title: 'Basic GIS and Remote Sensing Training Course',
    institution: 'Mariano Marcos State University',
    location: 'City of Batac, Ilocos Norte',
    year: '2019',
    description: 'Trainee in basic GIS and remote sensing applications',
    tags: ['GIS', 'Remote Sensing', 'Basic Training', 'Geospatial Technology']
  },
  {
    id: '25',
    type: 'training',
    title: 'REDAS Crop Damage Assessment Training',
    institution: 'Mariano Marcos State University and The Philippine Institute of Volcanology and Seismology (PHILVOLCS)',
    location: 'Philippines',
    year: '2019',
    description: 'National training for State, Colleges, Universities and LGUs on crop damage assessment',
    tags: ['Crop Damage Assessment', 'REDAS', 'PHILVOLCS', 'Disaster Assessment']
  },
  {
    id: '26',
    type: 'training',
    title: 'National Sepak Takraw and Hoop Technical Rules Training and Coaching',
    institution: 'Pilipinas Sepak Takraw Association Inc.',
    location: 'Philippines',
    year: '2018',
    description: 'National training and updating seminar on technical rules and coaching',
    tags: ['Sports Training', 'Technical Rules', 'Coaching', 'National Level']
  },
  {
    id: '27',
    type: 'training',
    title: 'Resource Mapping Forum and Maps Turnover Ceremony',
    institution: 'Phil-LiDAR 2 Project Mariano Marcos State University',
    location: 'Philippines',
    year: '2017',
    description: 'Participant in national resource mapping forum (January 26-27, 2017)',
    tags: ['Resource Mapping', 'Phil-LiDAR', 'National Project', 'Mapping Technology']
  },
  {
    id: '28',
    type: 'training',
    title: 'Resource Mapping Forum and Maps Turnover Ceremony',
    institution: 'Phil-LiDAR 2 Project Mariano Marcos State University',
    location: 'Philippines',
    year: '2017',
    description: 'Participant in national resource mapping forum (June 28-29, 2017)',
    tags: ['Resource Mapping', 'Phil-LiDAR', 'National Project', 'Mapping Technology']
  },
  {
    id: '29',
    type: 'training',
    title: 'On-the-Job Training',
    institution: 'National Irrigation Administration',
    location: 'San Nicolas, Ilocos Norte',
    year: '2015',
    description: 'On-the-job training at National Irrigation Administration (April-May 2015)',
    tags: ['On-the-Job Training', 'Irrigation Administration', 'Practical Training', 'Field Experience']
  },
  // Seminars/Conferences
  {
    id: '30',
    type: 'seminar',
    title: 'NERPS Conference 2023 in Thailand',
    institution: 'Network for Education and Research on Peace and Sustainability (NERPS) at Hiroshima University and Asia Institute of Technology',
    location: 'Pathum Thani, Thailand',
    year: '2023',
    description: 'Paper Presenter/Participant at international conference on peace and sustainability',
    tags: ['Peace Studies', 'Sustainability', 'International Conference', 'Paper Presentation']
  },
  {
    id: '31',
    type: 'seminar',
    title: 'Geospatial Application in Water Resources Management (WRM)',
    institution: 'KL Deemed to be University',
    location: 'India',
    year: '2023',
    description: 'Guest Lecturer on geospatial applications in water resources management',
    tags: ['Guest Lecture', 'Geospatial Applications', 'Water Resources', 'International']
  },
  {
    id: '32',
    type: 'seminar',
    title: 'EduCamp 2022 – Inspire-Ignite-Innovate',
    institution: 'Asian Institute of Technology',
    location: 'Bangkok, Thailand',
    year: '2022',
    description: 'Facilitator - Special Degree Program international short course',
    tags: ['Education Innovation', 'International Course', 'Facilitator', 'Special Program']
  },
  {
    id: '33',
    type: 'seminar',
    title: 'Water Security and Climate Change, 2022 (WSCC, 2022)',
    institution: 'Asian Institute of Technology',
    location: 'Bangkok, Thailand',
    year: '2022',
    description: 'Participant in international conference on water security and climate change',
    tags: ['Water Security', 'Climate Change', 'International Conference', 'Participant']
  },
  {
    id: '34',
    type: 'seminar',
    title: 'Inter-Academia Asia 2019',
    institution: 'Shizuoka University',
    location: 'Shizuoka, Japan',
    year: '2019',
    description: 'Presenter at inter-academic conference in Asia',
    tags: ['Inter-Academia', 'International Presenter', 'Academic Conference', 'Japan']
  },
  {
    id: '35',
    type: 'seminar',
    title: 'Geospatial Application on Water Resources Management',
    institution: 'Asian Institute of Technology',
    location: 'Thailand',
    year: '2019',
    description: 'Resource Speaker - EduCamp – Inspire-Ignite-Innovate Special Degree Program international lecture',
    tags: ['Resource Speaker', 'Water Resources', 'Geospatial Applications', 'International Lecture']
  },
  {
    id: '36',
    type: 'seminar',
    title: '16th International Agricultural and Biosystems Engineering Conference and Exhibition',
    institution: 'Philippine Society of Agricultural and Biosystem Engineers',
    location: 'Philippines',
    year: '2019',
    description: 'International Presenter - 30th Philippine Agriculture Engineering Week, 69th PSABE Annual National Convention',
    tags: ['Agricultural Engineering', 'International Conference', 'Presenter', 'PSABE']
  },
  {
    id: '37',
    type: 'seminar',
    title: 'ABEngrs: Assembling the Agricultural Engineering Graduated for a Better Career Prospect',
    institution: 'Mariano Marcos State University',
    location: 'City of Batac, Ilocos Norte',
    year: '2019',
    description: 'Guest Speaker - Culminating Activity at Crop Research Laboratory',
    tags: ['Guest Speaker', 'Agricultural Engineering', 'Career Development', 'University Event']
  },
  {
    id: '38',
    type: 'seminar',
    title: 'Capability Building of MMSU Personnel under the DOST-Balik Scientist Program',
    institution: 'MMSU Hostel',
    location: 'City of Batac, Ilocos Norte',
    year: '2019',
    description: 'Participant in capability building program for university personnel',
    tags: ['Capability Building', 'DOST Program', 'Balik Scientist', 'University Development']
  },
  {
    id: '39',
    type: 'seminar',
    title: 'Seminar on Mitigation Hazardous Emissions through Innovative Swine Manure System',
    institution: 'Mariano Marcos State University',
    location: 'Philippines',
    year: '2019',
    description: 'Participant in seminar on innovative agricultural waste management systems',
    tags: ['Environmental Management', 'Agricultural Innovation', 'Waste Management', 'Emissions Control']
  },
  {
    id: '40',
    type: 'seminar',
    title: 'National Scientific Forum on Corn Production and Utilization',
    institution: 'Isabela State University City Government of Ilogan Isabela Department of Agriculture',
    location: 'Isabela, Philippines',
    year: '2018',
    description: 'National participant in scientific forum on corn production and utilization',
    tags: ['Corn Production', 'Agricultural Science', 'National Forum', 'Crop Utilization']
  },
  {
    id: '41',
    type: 'seminar',
    title: 'Local Stakeholders Convergence',
    institution: 'Schools Division of Ilocos Norte Conference Hall',
    location: 'Laoag City, Philippines',
    year: '2018',
    description: 'Participant in local stakeholders convergence meeting',
    tags: ['Stakeholder Engagement', 'Local Development', 'Convergence Meeting', 'Community Planning']
  },
  {
    id: '42',
    type: 'seminar',
    title: 'Meteorological Orientation Program: An Introduction to Climate, Weather, Hydrometerology and PAGASA Services',
    institution: 'Mariano Marcos State University',
    location: 'City of Batac, Ilocos Norte',
    year: '2017',
    description: 'Participant in meteorological orientation program covering climate and weather systems',
    tags: ['Meteorology', 'Climate Science', 'PAGASA', 'Weather Systems']
  },
  {
    id: '43',
    type: 'seminar',
    title: '2017 International Society for Southeast Asian Agricultural Sciences (ISSAAS) National Congress',
    institution: 'MMSU Teatro Ilocandia',
    location: 'City of Batac, Province of Ilocos Norte',
    year: '2017',
    description: 'Participant in international agricultural sciences congress and general meeting',
    tags: ['Agricultural Sciences', 'International Congress', 'ISSAAS', 'Southeast Asia']
  },
  {
    id: '44',
    type: 'seminar',
    title: '13th International Agricultural Engineering Conference & Exhibition',
    institution: 'Philippine Society of Agricultural Engineering',
    location: 'MMSU, City of Batac, Ilocos Norte',
    year: '2015',
    description: 'Participant - 66th Philippine Society of Agricultural Engineering Annual National Convention, 27th Philippine Agricultural Engineering Week',
    tags: ['Agricultural Engineering', 'International Conference', 'National Convention', 'Engineering Week']
  },
  {
    id: '45',
    type: 'seminar',
    title: 'Irrigation and Drainage, Soil and Water Conservation, Grains Postharvest Technology',
    institution: 'AVR MMSU-COE',
    location: 'Philippines',
    year: '2015',
    description: 'Participant in updates on agricultural engineering topics',
    tags: ['Irrigation', 'Drainage', 'Soil Conservation', 'Postharvest Technology']
  },
  {
    id: '46',
    type: 'seminar',
    title: 'Going ASEAN through ABE (Agricultural and Biosystems Engineering) Program',
    institution: 'Cavite State University',
    location: 'Philippines',
    year: '2014',
    description: 'Participant in national convention on ASEAN agricultural and biosystems engineering program',
    tags: ['ASEAN Program', 'Agricultural Engineering', 'Biosystems Engineering', 'National Convention']
  },
  // Awards
  {
    id: '47',
    type: 'award',
    title: 'Best Green Financing Solution for Emission Reduction',
    institution: '"Hacking Zero" Hackathon – Sustainability Expo, Asian Institute of Technology',
    location: 'Thailand',
    year: '2023',
    description: 'Recognized for innovative green financing solution during sustainability hackathon',
    tags: ['Innovation', 'Sustainability', 'Green Finance', 'Hackathon']
  },
  {
    id: '48',
    type: 'award',
    title: 'DOST PhD Scholar 2022',
    institution: 'Science Education Institute – Department of Science and Technology, Philippines',
    location: 'Philippines',
    year: '2022',
    description: 'Foreign Graduate Scholarship Program for PhD in Remote Sensing and Geographic Information Systems',
    tags: ['Scholarship', 'PhD', 'Government Recognition', 'Education']
  },
  {
    id: '49',
    type: 'award',
    title: '1st Place – Technical Paper Presenters',
    institution: '16th International Agricultural and Biosystems Engineering Conference',
    location: 'Philippines',
    year: '2019',
    description: 'First place for "Flood Risk Assessment as Affected by Land Use Change for Policy Intervention: A Quiaoit River Watershed Case Study"',
    tags: ['Research Excellence', 'Conference Award', 'Technical Paper', 'Flood Risk']
  },
  {
    id: '50',
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
    { value: 'seminar', label: 'Seminars/Conferences' },
    { value: 'publication', label: 'Publications' },
    { value: 'award', label: 'Awards' }
  ];

  const years = ['all', ...Array.from(new Set(cvData.map(item => item.year.split('-')[0]))).sort().reverse()];

  const filteredData = cvData.filter(item => {
    const typeMatch = selectedFilter === 'all' || item.type === selectedFilter;
    const yearMatch = selectedYear === 'all' || item.year.includes(selectedYear);
    return typeMatch && yearMatch;
  }).sort((a, b) => {
    // Sort by year (latest first)
    const yearA = parseInt(a.year.split('-')[0]);
    const yearB = parseInt(b.year.split('-')[0]);
    return yearB - yearA;
  });

  const getTypeColor = (type: string) => {
    const colors = {
      education: 'bg-blue-100 text-blue-800',
      work: 'bg-green-100 text-green-800',
      training: 'bg-purple-100 text-purple-800',
      seminar: 'bg-pink-100 text-pink-800',
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

