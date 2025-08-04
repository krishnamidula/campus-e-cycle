import { Button } from "@/components/ui/button";
import { Recycle, Mail, Phone, MapPin, Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-glow to-success text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Recycle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">EcoPredict</h3>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Transforming campus sustainability through AI-powered e-waste forecasting, 
              gamified rewards, and real-time environmental impact tracking.
            </p>
            <div className="flex gap-4">
              <Button variant="glass" size="icon" className="hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon" className="hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon" className="hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Dashboard', 'Analytics', 'Device Logger', 'Leaderboard', 'Documentation'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/60" />
                <span className="text-white/80 text-sm">contact@ecopredict.edu</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/60" />
                <span className="text-white/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-white/60" />
                <span className="text-white/80 text-sm">Campus Sustainability Office</span>
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Impact Stats */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">2,547</div>
              <div className="text-white/70 text-sm">Devices Recycled</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">15.7T</div>
              <div className="text-white/70 text-sm">CO₂ Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">89.3%</div>
              <div className="text-white/70 text-sm">Reuse Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">1.2M</div>
              <div className="text-white/70 text-sm">EcoPoints Earned</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {currentYear} EcoPredict. All rights reserved. Building a sustainable future together.
          </p>
          <div className="flex items-center gap-1 text-white/70 text-sm">
            Made with <Heart className="w-4 h-4 text-red-400 mx-1" fill="currentColor" /> for our planet
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;