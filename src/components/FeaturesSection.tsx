import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  TrendingUp, 
  Award, 
  Shield, 
  Smartphone, 
  Recycle,
  Leaf,
  Globe,
  Zap,
  Target,
  Users,
  BarChart3
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Predictions",
      description: "Advanced ARIMA models forecast e-waste trends up to 6 months ahead with 94% accuracy",
      color: "from-primary to-primary-glow",
      delay: "0s"
    },
    {
      icon: Award,
      title: "EcoPoints Rewards",
      description: "Gamified sustainability system with points, leaderboards, and real rewards for participation",
      color: "from-warning to-secondary",
      delay: "0.1s"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live dashboard tracking device lifecycles, reuse rates, and environmental impact metrics",
      color: "from-info to-primary",
      delay: "0.2s"
    },
    {
      icon: Globe,
      title: "Carbon Footprint Tracking",
      description: "Precise CO₂ calculations showing environmental impact of every recycled device",
      color: "from-success to-primary-glow",
      delay: "0.3s"
    },
    {
      icon: Users,
      title: "Department Competition",
      description: "Inter-department challenges and rankings to drive campus-wide engagement",
      color: "from-secondary to-info",
      delay: "0.4s"
    },
    {
      icon: Shield,
      title: "Secure Data Management",
      description: "Enterprise-grade security ensuring all device and user data remains protected",
      color: "from-primary-glow to-success",
      delay: "0.5s"
    }
  ];

  const impactStats = [
    { icon: Recycle, value: "2,547", label: "Devices Recycled", trend: "+23%" },
    { icon: Leaf, value: "15.7T", label: "CO₂ Prevented", trend: "+18%" },
    { icon: Award, value: "1.2M", label: "EcoPoints Earned", trend: "+31%" },
    { icon: Target, value: "89.3%", label: "Reuse Rate", trend: "+5.2%" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent/30">
      <div className="container mx-auto px-6">
        {/* Features Grid */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Cutting-Edge Features
          </Badge>
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Next-Gen E-Waste Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining artificial intelligence, gamification, and real-time analytics 
            to revolutionize campus sustainability initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="card-3d border-0 group overflow-hidden"
              style={{ animationDelay: feature.delay }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-success opacity-10 rounded-3xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 border">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-foreground mb-4">
                Our Environmental Impact
              </h3>
              <p className="text-lg text-muted-foreground">
                Real numbers showing how our platform is making a difference
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground mb-2">{stat.label}</div>
                  <Badge 
                    variant="outline" 
                    className="text-success border-success bg-success/10"
                  >
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {stat.trend}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Ready to Transform Your Campus Sustainability?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students and faculty already making a difference with EcoPredict
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="eco3d" size="xl" className="group">
              <Smartphone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Get Started Today
            </Button>
            
            <Button variant="outline" size="xl" className="group">
              <BarChart3 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;