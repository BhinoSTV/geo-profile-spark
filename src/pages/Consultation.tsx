
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Clock, Video, Mail, Upload, Calendar as CalendarIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Consultation = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    purpose: '',
    details: '',
    files: [] as File[]
  });

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const consultationTypes = [
    { value: 'remote-sensing', label: 'Remote Sensing & GIS Consultation' },
    { value: 'water-resources', label: 'Water Resources Management' },
    { value: 'climate-adaptation', label: 'Climate Change Adaptation' },
    { value: 'research-collaboration', label: 'Research Collaboration' },
    { value: 'training', label: 'Training & Workshops' },
    { value: 'general', label: 'General Consultation' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        files: Array.from(e.target.files)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !consultationType) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // For now, show success message. Will integrate with Supabase later
    toast.success('Consultation request submitted! You will receive a confirmation email shortly.');
    console.log('Consultation booking:', {
      date: selectedDate,
      time: selectedTime,
      type: consultationType,
      ...formData
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              onClick={() => navigate('/')} 
              variant="ghost" 
              className="flex items-center gap-2 text-sm sm:text-base"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">Back to CV</span>
              <span className="sm:hidden">Back</span>
            </Button>
            <h1 className="text-lg sm:text-2xl font-bold text-primary">Book a Consultation</h1>
            <div></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Professional Consultation Services</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto px-4">
              Get expert guidance on Remote Sensing, GIS, Water Resources Management, and Climate Change Adaptation. 
              Schedule a personalized consultation to discuss your project needs and research objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Booking Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  Schedule Your Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold">Personal Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="text-sm sm:text-base"
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="text-sm sm:text-base"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="text-sm sm:text-base"
                      />
                      <Input
                        name="company"
                        placeholder="Company/Organization"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  {/* Consultation Details */}
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold">Consultation Details</h3>
                    <Select value={consultationType} onValueChange={setConsultationType}>
                      <SelectTrigger className="text-sm sm:text-base">
                        <SelectValue placeholder="Select consultation type *" />
                      </SelectTrigger>
                      <SelectContent>
                        {consultationTypes.map(type => (
                          <SelectItem key={type.value} value={type.value} className="text-sm sm:text-base">
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Input
                      name="purpose"
                      placeholder="Purpose of consultation *"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      required
                      className="text-sm sm:text-base"
                    />
                    
                    <Textarea
                      name="details"
                      placeholder="Additional details about your project or questions"
                      value={formData.details}
                      onChange={handleInputChange}
                      rows={4}
                      className="text-sm sm:text-base"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold">Supporting Documents</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center">
                      <Upload className="mx-auto mb-2 text-gray-400" size={20} />
                      <label className="cursor-pointer">
                        <span className="text-blue-600 hover:text-blue-700 text-sm sm:text-base">Click to upload files</span>
                        <span className="text-gray-500 text-sm sm:text-base"> or drag and drop</span>
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                      <p className="text-xs sm:text-sm text-gray-500 mt-2">
                        PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX (Max 10MB each)
                      </p>
                    </div>
                    {formData.files.length > 0 && (
                      <div className="text-xs sm:text-sm text-gray-600">
                        Selected files: {formData.files.map(f => f.name).join(', ')}
                      </div>
                    )}
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 text-sm sm:text-base">
                    <Mail className="mr-2" size={16} />
                    Submit Consultation Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Calendar and Time Selection */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <Clock size={20} className="text-green-600" />
                    Select Date & Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex justify-center">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                        className="rounded-md border w-full max-w-sm"
                      />
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-sm sm:text-base">Available Time Slots (GMT+8)</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map(time => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            onClick={() => setSelectedTime(time)}
                            className="text-xs sm:text-sm"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Consultation Info */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <Video size={20} className="text-purple-600" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-xs sm:text-sm">Video consultation via Zoom or Google Meet</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-xs sm:text-sm">Email confirmation with meeting link</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <span className="text-xs sm:text-sm">30-60 minute session depending on complexity</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span className="text-xs sm:text-sm">Follow-up email with recommendations</span>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <p className="text-xs sm:text-sm text-gray-600">
                      <strong>Response Time:</strong> I'll respond to your consultation request within 24 hours with confirmation and meeting details.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
