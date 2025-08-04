import EcoHeader from "@/components/EcoHeader";
import FeaturesSection from "@/components/FeaturesSection";
import DeviceLogger from "@/components/DeviceLogger";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <EcoHeader />
      <FeaturesSection />
      <DeviceLogger />
      <AnalyticsDashboard />
      <Footer />
    </div>
  );
};

export default Index;
