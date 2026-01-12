import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Direct", value: 4500, color: "hsl(187, 85%, 53%)" },
  { name: "Organic", value: 3200, color: "hsl(262, 83%, 58%)" },
  { name: "Referral", value: 2100, color: "hsl(142, 76%, 46%)" },
  { name: "Social", value: 1800, color: "hsl(38, 92%, 50%)" },
];

export const TrafficChart = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="glass rounded-xl p-6 card-shadow animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Traffic Sources</h3>
        <p className="text-sm text-muted-foreground">Where your visitors come from</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="h-[200px] w-[200px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(222, 47%, 8%)",
                  border: "1px solid hsl(217, 32%, 15%)",
                  borderRadius: "8px",
                }}
                formatter={(value: number) => [value.toLocaleString(), "Visitors"]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">{(total / 1000).toFixed(1)}K</span>
            <span className="text-xs text-muted-foreground">Total</span>
          </div>
        </div>
        <div className="flex-1 space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm">{item.name}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium">{((item.value / total) * 100).toFixed(0)}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
