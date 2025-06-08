
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Download, Send, Phone } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a toast. You'll implement actual form submission with Supabase
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleDownloadCV = () => {
    // Placeholder for CV download functionality
    toast.info('CV download functionality will be implemented with backend integration');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration or have questions about my research? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="text-blue-600" size={24} />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-muted-foreground" />
                  <span>juliusijimenez053@yahoo.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-muted-foreground" />
                  <div className="space-y-1">
                    <div>(+63) 956-306-3460</div>
                    <div>(+91) 843-917-6867</div>
                    <div>(+66) 65-381-6113</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-muted-foreground" />
                  <span>#3 Salbang Paoay (2902), Ilocos Norte, Philippines</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Download Full CV</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get the complete version of my curriculum vitae with detailed information about my research, publications, and experience.
                </p>
                <Button onClick={handleDownloadCV} className="w-full">
                  <Download className="mr-2" size={18} />
                  Download CV (PDF)
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Research</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span>Integrated Water Resources Management (IWRM) for Padsan River Watershed</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                    <span>Development of web-based Dynamic Decision Support Framework (Dynamic DSF)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                    <span>Groundwater Recharge Modelling for Sustainable Agricultural Water</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    <span>Climate Change Impact Assessment on Water Resources</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
