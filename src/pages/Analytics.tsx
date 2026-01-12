import { Globe, MousePointer, Clock, Eye, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { StatCard } from "@/components/dashboard/StatCard";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  FunnelChart, Funnel, LabelList
} from "recharts";

const pageViewsData = [
  { time: "00:00", views: 1200 },
  { time: "04:00", views: 800 },
  { time: "08:00", views: 2400 },
  { time: "12:00", views: 4200 },
  { time: "16:00", views: 3800 },
  { time: "20:00", views: 2900 },
  { time: "24:00", views: 1800 },
];

const bounceRateData = [
  { page: "Home", rate: 32 },
  { page: "Products", rate: 45 },
  { page: "Pricing", rate: 28 },
  { page: "Blog", rate: 52 },
  { page: "Contact", rate: 38 },
];

const engagementData = [
  { subject: "Page Views", A: 120, fullMark: 150 },
  { subject: "Sessions", A: 98, fullMark: 150 },
  { subject: "Bounce Rate", A: 86, fullMark: 150 },
  { subject: "Avg Duration", A: 99, fullMark: 150 },
  { subject: "Conversions", A: 85, fullMark: 150 },
  { subject: "Retention", A: 65, fullMark: 150 },
];

const funnelData = [
  { name: "Visitors", value: 10000, fill: "hsl(187, 85%, 53%)" },
  { name: "Leads", value: 6500, fill: "hsl(200, 80%, 50%)" },
  { name: "Qualified", value: 4200, fill: "hsl(230, 75%, 55%)" },
  { name: "Proposals", value: 2800, fill: "hsl(262, 83%, 58%)" },
  { name: "Customers", value: 1200, fill: "hsl(280, 80%, 50%)" },
];

const topPages = [
  { page: "/home", views: 45200, change: 12.4 },
  { page: "/products", views: 32100, change: 8.7 },
  { page: "/pricing", views: 28400, change: -3.2 },
  { page: "/blog/guide", views: 21800, change: 24.1 },
  { page: "/contact", views: 18900, change: 5.6 },
];

const stats = [
  { title: "Page Views", value: 284500, change: 15.2, icon: <Eye className="w-5 h-5" /> },
  { title: "Unique Visitors", value: 89420, change: 8.4, icon: <Globe className="w-5 h-5" /> },
  { title: "Avg. Session", value: 4.2, suffix: "m", change: 3.1, icon: <Clock className="w-5 h-5" /> },
  { title: "Click Rate", value: 6.8, suffix: "%", change: -1.2, icon: <MousePointer className="w-5 h-5" /> },
];

const Analytics = () => {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Analytics Overview</h1>
            <p className="text-muted-foreground">Track your website performance and user engagement.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.title} {...stat} delay={index * 100} />
            ))}
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Real-time Page Views */}
            <div className="glass rounded-xl p-6 card-shadow animate-fade-in">
              <h3 className="text-lg font-semibold mb-1">Real-time Page Views</h3>
              <p className="text-sm text-muted-foreground mb-6">Today's traffic pattern</p>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={pageViewsData}>
                    <defs>
                      <linearGradient id="pageViewGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(187, 85%, 53%)" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="hsl(187, 85%, 53%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 32%, 15%)" />
                    <XAxis dataKey="time" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                    <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(222, 47%, 8%)",
                        border: "1px solid hsl(217, 32%, 15%)",
                        borderRadius: "8px",
                      }}
                    />
                    <Area type="monotone" dataKey="views" stroke="hsl(187, 85%, 53%)" strokeWidth={2} fill="url(#pageViewGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Conversion Funnel */}
            <div className="glass rounded-xl p-6 card-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-lg font-semibold mb-1">Conversion Funnel</h3>
              <p className="text-sm text-muted-foreground mb-6">From visitors to customers</p>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <FunnelChart>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(222, 47%, 8%)",
                        border: "1px solid hsl(217, 32%, 15%)",
                        borderRadius: "8px",
                      }}
                    />
                    <Funnel dataKey="value" data={funnelData} isAnimationActive>
                      <LabelList position="center" fill="hsl(210, 40%, 98%)" fontSize={12} />
                    </Funnel>
                  </FunnelChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Charts Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Bounce Rate */}
            <div className="glass rounded-xl p-6 card-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-lg font-semibold mb-1">Bounce Rate by Page</h3>
              <p className="text-sm text-muted-foreground mb-6">Lower is better</p>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={bounceRateData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 32%, 15%)" horizontal={false} />
                    <XAxis type="number" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                    <YAxis dataKey="page" type="category" stroke="hsl(215, 20%, 55%)" fontSize={12} width={70} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(222, 47%, 8%)",
                        border: "1px solid hsl(217, 32%, 15%)",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => [`${value}%`, "Bounce Rate"]}
                    />
                    <Bar dataKey="rate" fill="hsl(262, 83%, 58%)" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Engagement Radar */}
            <div className="glass rounded-xl p-6 card-shadow animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-lg font-semibold mb-1">Engagement Score</h3>
              <p className="text-sm text-muted-foreground mb-6">Multi-metric analysis</p>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={engagementData}>
                    <PolarGrid stroke="hsl(217, 32%, 15%)" />
                    <PolarAngleAxis dataKey="subject" stroke="hsl(215, 20%, 55%)" fontSize={11} />
                    <PolarRadiusAxis stroke="hsl(217, 32%, 15%)" />
                    <Radar name="Score" dataKey="A" stroke="hsl(187, 85%, 53%)" fill="hsl(187, 85%, 53%)" fillOpacity={0.3} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Pages */}
            <div className="glass rounded-xl p-6 card-shadow animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-lg font-semibold mb-1">Top Pages</h3>
              <p className="text-sm text-muted-foreground mb-6">Most visited this month</p>
              <div className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={page.page} className="flex items-center justify-between animate-fade-in" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-medium">
                        {index + 1}
                      </span>
                      <span className="text-sm font-medium">{page.page}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">{page.views.toLocaleString()}</span>
                      <span className={`flex items-center text-xs ${page.change >= 0 ? "text-success" : "text-destructive"}`}>
                        {page.change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {Math.abs(page.change)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
