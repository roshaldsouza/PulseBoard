import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", sessions: 320, pageviews: 890 },
  { name: "Tue", sessions: 450, pageviews: 1200 },
  { name: "Wed", sessions: 380, pageviews: 980 },
  { name: "Thu", sessions: 520, pageviews: 1450 },
  { name: "Fri", sessions: 480, pageviews: 1300 },
  { name: "Sat", sessions: 290, pageviews: 720 },
  { name: "Sun", sessions: 310, pageviews: 780 },
];

export const PerformanceChart = () => {
  return (
    <div className="glass rounded-xl p-6 card-shadow animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Weekly Performance</h3>
          <p className="text-sm text-muted-foreground">Sessions and pageviews this week</p>
        </div>
      </div>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 32%, 15%)" vertical={false} />
            <XAxis dataKey="name" stroke="hsl(215, 20%, 55%)" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(222, 47%, 8%)",
                border: "1px solid hsl(217, 32%, 15%)",
                borderRadius: "8px",
              }}
              cursor={{ fill: "hsl(217, 32%, 12%)" }}
            />
            <Bar dataKey="sessions" fill="hsl(187, 85%, 53%)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="pageviews" fill="hsl(262, 83%, 58%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-primary" />
          <span className="text-muted-foreground">Sessions</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-secondary" />
          <span className="text-muted-foreground">Pageviews</span>
        </div>
      </div>
    </div>
  );
};
