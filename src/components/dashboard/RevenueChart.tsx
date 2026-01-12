import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", revenue: 4000, profit: 2400 },
  { name: "Feb", revenue: 3000, profit: 1398 },
  { name: "Mar", revenue: 5000, profit: 3800 },
  { name: "Apr", revenue: 4780, profit: 3908 },
  { name: "May", revenue: 5890, profit: 4800 },
  { name: "Jun", revenue: 6390, profit: 5300 },
  { name: "Jul", revenue: 7490, profit: 6100 },
  { name: "Aug", revenue: 8200, profit: 6800 },
  { name: "Sep", revenue: 7800, profit: 5900 },
  { name: "Oct", revenue: 9100, profit: 7200 },
  { name: "Nov", revenue: 9800, profit: 7800 },
  { name: "Dec", revenue: 11200, profit: 8900 },
];

export const RevenueChart = () => {
  return (
    <div className="glass rounded-xl p-6 card-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Revenue Overview</h3>
          <p className="text-sm text-muted-foreground">Monthly revenue and profit trends</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-muted-foreground">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <span className="text-muted-foreground">Profit</span>
          </div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(187, 85%, 53%)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="hsl(187, 85%, 53%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 32%, 15%)" />
            <XAxis dataKey="name" stroke="hsl(215, 20%, 55%)" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(222, 47%, 8%)",
                border: "1px solid hsl(217, 32%, 15%)",
                borderRadius: "8px",
                boxShadow: "0 4px 24px hsl(222 47% 4% / 0.5)",
              }}
              labelStyle={{ color: "hsl(210, 40%, 98%)" }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(187, 85%, 53%)"
              strokeWidth={2}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke="hsl(262, 83%, 58%)"
              strokeWidth={2}
              fill="url(#colorProfit)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
