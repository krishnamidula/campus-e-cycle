import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { Laptop, Tablet, Monitor, Smartphone, Award, Zap } from "lucide-react";

const DEPARTMENTS = ['CSE', 'ECE', 'ME', 'CE', 'EEE', 'DS', 'MBA', 'Admin', 'Security', 'Maintenance'];
const CONDITIONS = ['New', 'Good', 'Average', 'Old', 'Broken'];

const DeviceLogger = () => {
  const [department, setDepartment] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [age, setAge] = useState([5]);
  const [condition, setCondition] = useState('');
  const { toast } = useToast();

  const deviceIcons = {
    'Laptop': Laptop,
    'Tablet': Tablet,
    'Desktop': Monitor,
    'Monitor': Monitor,
    'Smartphone': Smartphone
  };

  const handleSubmit = () => {
    if (!department || !deviceType || !condition) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const ecoPoints = Math.floor(age[0] * 15 + Math.random() * 50);
    const co2Saved = (age[0] * 2.5).toFixed(1);
    
    toast({
      title: "🎉 Device Successfully Logged!",
      description: `+${ecoPoints} EcoPoints earned! ~${co2Saved}kg CO₂ saved from landfills.`,
      className: "bg-success text-success-foreground",
    });

    // Reset form
    setDepartment('');
    setDeviceType('');
    setAge([5]);
    setCondition('');
  };

  const IconComponent = deviceType ? deviceIcons[deviceType as keyof typeof deviceIcons] || Monitor : Monitor;

  return (
    <section className="py-16 bg-gradient-to-br from-accent to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Log Your E-Waste Device
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Register your old devices and earn EcoPoints while contributing to campus sustainability
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="card-3d border-0">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                Device Registration
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select value={department} onValueChange={setDepartment}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select your department" />
                    </SelectTrigger>
                    <SelectContent>
                      {DEPARTMENTS.map(dept => (
                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="device-type">Device Type</Label>
                  <Select value={deviceType} onValueChange={setDeviceType}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select device type" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(deviceIcons).map(device => (
                        <SelectItem key={device} value={device}>
                          <div className="flex items-center gap-2">
                            {React.createElement(deviceIcons[device as keyof typeof deviceIcons], { 
                              className: "w-4 h-4" 
                            })}
                            {device}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Device Age: {age[0]} years</Label>
                <Slider
                  value={age}
                  onValueChange={setAge}
                  max={20}
                  min={0}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>New</span>
                  <span>Very Old</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="condition">Device Condition</Label>
                <Select value={condition} onValueChange={setCondition}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONDITIONS.map(cond => (
                      <SelectItem key={cond} value={cond}>{cond}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-6">
                <Button 
                  onClick={handleSubmit} 
                  variant="eco3d" 
                  size="xl" 
                  className="w-full group"
                >
                  <Award className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Log Device & Earn EcoPoints
                  <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">+{Math.floor(age[0] * 15)}</div>
                  <div className="text-sm text-muted-foreground">Est. EcoPoints</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">~{(age[0] * 2.5).toFixed(1)}kg</div>
                  <div className="text-sm text-muted-foreground">CO₂ Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-info">95%</div>
                  <div className="text-sm text-muted-foreground">Reuse Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeviceLogger;