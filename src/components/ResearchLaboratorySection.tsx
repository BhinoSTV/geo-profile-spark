
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FlaskConical, MapPin, Users, Target } from 'lucide-react';

const ResearchLaboratorySection = () => {
  return (
    <section id="research-lab" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Research Laboratory</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading research initiatives in geospatial data science and technology applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg text-white">
                  <FlaskConical size={32} />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">
                    Geospatial Data Science and Technology Center
                  </CardTitle>
                  <Badge className="bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold">
                    GeoSpaDa Hub
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Target className="text-blue-600" size={20} />
                      Research Focus Areas
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Integrated Water Resources Management (IWRM)</li>
                      <li>• Remote Sensing Applications for Agriculture</li>
                      <li>• Climate Change Impact Assessment</li>
                      <li>• Groundwater Modeling and Sustainability</li>
                      <li>• Flood Risk Assessment and Management</li>
                      <li>• Geospatial Web-based Decision Support Tools</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <MapPin className="text-green-600" size={20} />
                      Location & Collaboration
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Based in Ilocos Norte, Philippines, with international collaborations 
                      across Asia and the Pacific region through partnerships with:
                    </p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Asian Institute of Technology (AIT), Thailand</li>
                      <li>• Indian Institute of Technology - Roorkee, India</li>
                      <li>• Mariano Marcos State University, Philippines</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Users className="text-purple-600" size={20} />
                      Research Impact
                    </h3>
                    <p className="text-muted-foreground">
                      Contributing to sustainable development goals through innovative 
                      geospatial solutions for water security, climate adaptation, 
                      and agricultural sustainability in Southeast Asia.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-center">Core Technologies</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Remote Sensing</Badge>
                  <Badge variant="secondary">Geographic Information Systems</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Hydrological Modeling</Badge>
                  <Badge variant="secondary">Climate Data Analysis</Badge>
                  <Badge variant="secondary">Web-GIS Development</Badge>
                  <Badge variant="secondary">Satellite Image Processing</Badge>
                  <Badge variant="secondary">Spatial Statistics</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResearchLaboratorySection;
