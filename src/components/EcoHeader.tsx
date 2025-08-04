import { Button } from "@/components/ui/button";
import { Recycle, Leaf, Globe, Award } from "lucide-react";
import heroBackground from "@/assets/hero-eco-background.jpg";

const EcoHeader = () => {
  return (
    <header 
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-success"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary-glow/70 to-success/80"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 float">
        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Recycle className="w-10 h-10 text-white" />
        </div>
      </div>
      
      <div className="absolute top-20 right-20 float" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
          <Leaf className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/3 float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <Globe className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="pulse-eco">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Recycle className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
            Eco<span className="text-secondary">Predict</span>
          </h1>
          
          <p className="text-2xl text-white/90 mb-4 font-light">
            Campus E-Waste Forecasting & Management Platform
          </p>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Revolutionizing campus sustainability through intelligent e-waste prediction, 
            device lifecycle management, and eco-friendly incentive systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="eco3d" 
              size="xl" 
              className="group"
              onClick={() => document.getElementById('device-logger')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Award className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Start Earning EcoPoints
            </Button>
            
            <Button 
              variant="glass" 
              size="xl" 
              className="group"
              onClick={() => document.getElementById('analytics-dashboard')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Analytics
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2.5K</div>
              <div className="text-white/70">Devices Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">89%</div>
              <div className="text-white/70">Reuse Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15T</div>
              <div className="text-white/70">CO₂ Saved</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EcoHeader;