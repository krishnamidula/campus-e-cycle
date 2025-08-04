import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Recycle, Award, BarChart3, PieChart } from "lucide-react";

const AnalyticsDashboard = () => {
  const mockData = {
    monthlyTrends: [
      { month: 'Jan', devices: 45, reuse: 38 },
      { month: 'Feb', devices: 52, reuse: 45 },
      { month: 'Mar', devices: 48, reuse: 42 },
      { month: 'Apr', devices: 61, reuse: 55 },
      { month: 'May', devices: 58, reuse: 52 },
      { month: 'Jun', devices: 67, reuse: 60 }
    ],
    departments: [
      { name: 'CSE', devices: 156, ecoPoints: 23400, trend: '+12%' },
      { name: 'ECE', devices: 134, ecoPoints: 20100, trend: '+8%' },
      { name: 'ME', devices: 98, ecoPoints: 14700, trend: '+15%' },
      { name: 'EEE', devices: 87, ecoPoints: 13050, trend: '+5%' },
      { name: 'DS', devices: 76, ecoPoints: 11400, trend: '+18%' }
    ],
    forecast: [
      { month: 'Jul', predicted: 72 },
      { month: 'Aug', predicted: 68 },
      { month: 'Sep', predicted: 75 },
      { month: 'Oct', predicted: 82 },
      { month: 'Nov', predicted: 79 },
      { month: 'Dec', predicted: 88 }
    ]
  };

  return (
    <section id="analytics-dashboard" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Real-Time Analytics Dashboard
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Monitor campus e-waste trends, forecast future needs, and track sustainability impact
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="card-3d border-0 bg-gradient-to-br from-primary to-primary-glow text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Total Devices</p>
                  <p className="text-3xl font-bold">2,547</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">+12% this month</span>
                  </div>
                </div>
                <BarChart3 className="w-12 h-12 text-white/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-3d border-0 bg-gradient-to-br from-success to-secondary text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Reuse Rate</p>
                  <p className="text-3xl font-bold">89.3%</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">+3.2% from last month</span>
                  </div>
                </div>
                <Recycle className="w-12 h-12 text-white/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-3d border-0 bg-gradient-to-br from-warning to-info text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">CO₂ Saved</p>
                  <p className="text-3xl font-bold">15.7T</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">+850kg this week</span>
                  </div>
                </div>
                <PieChart className="w-12 h-12 text-white/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-3d border-0 bg-gradient-to-br from-info to-primary text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80">Total EcoPoints</p>
                  <p className="text-3xl font-bold">1.2M</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">+15K today</span>
                  </div>
                </div>
                <Award className="w-12 h-12 text-white/60" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Monthly Trends */}
          <Card className="card-3d">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Monthly Device Collection Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.monthlyTrends.map((item, index) => (
                  <div key={item.month} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 text-sm font-medium">{item.month}</div>
                      <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${(item.devices / 70) * 100}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                    <div className="text-sm font-medium w-12 text-right">{item.devices}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 6-Month Forecast */}
          <Card className="card-3d">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-success" />
                6-Month E-Waste Forecast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.forecast.map((item, index) => (
                  <div key={item.month} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 text-sm font-medium">{item.month}</div>
                      <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-success to-secondary transition-all duration-1000 ease-out opacity-80"
                          style={{ 
                            width: `${(item.predicted / 90) * 100}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                    <div className="text-sm font-medium w-12 text-right">{item.predicted}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-success/10 rounded-lg">
                <p className="text-sm text-success-foreground">
                  📈 Predicted 8% increase in Q4 due to academic year-end device upgrades
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Leaderboard */}
        <Card className="card-3d">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-warning" />
                Department EcoPoints Leaderboard
              </div>
              <Button variant="outline" size="sm">View All</Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.departments.map((dept, index) => (
                <div key={dept.name} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-accent to-transparent hover:from-primary/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold">{dept.name}</h4>
                      <p className="text-sm text-muted-foreground">{dept.devices} devices logged</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{dept.ecoPoints.toLocaleString()}</div>
                    <Badge variant={dept.trend.includes('+') ? 'default' : 'secondary'} className="text-xs">
                      {dept.trend}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;