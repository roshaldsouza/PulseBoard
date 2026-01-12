import { ShoppingCart, Package, Truck, CheckCircle, XCircle, Clock, Eye, MoreHorizontal } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { StatCard } from "@/components/dashboard/StatCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, ComposedChart, Area
} from "recharts";

const orderTrendData = [
  { date: "Jan 1", orders: 45, revenue: 4500 },
  { date: "Jan 2", orders: 52, revenue: 5200 },
  { date: "Jan 3", orders: 48, revenue: 4800 },
  { date: "Jan 4", orders: 61, revenue: 6100 },
  { date: "Jan 5", orders: 55, revenue: 5500 },
  { date: "Jan 6", orders: 67, revenue: 6700 },
  { date: "Jan 7", orders: 72, revenue: 7200 },
  { date: "Jan 8", orders: 68, revenue: 6800 },
  { date: "Jan 9", orders: 75, revenue: 7500 },
  { date: "Jan 10", orders: 82, revenue: 8200 },
  { date: "Jan 11", orders: 78, revenue: 7800 },
];

const orderStatusData = [
  { name: "Delivered", value: 5420, color: "hsl(142, 76%, 46%)" },
  { name: "Shipped", value: 1840, color: "hsl(187, 85%, 53%)" },
  { name: "Processing", value: 920, color: "hsl(38, 92%, 50%)" },
  { name: "Cancelled", value: 367, color: "hsl(0, 84%, 60%)" },
];

const categoryData = [
  { category: "Electronics", orders: 2840, revenue: 284000 },
  { category: "Clothing", orders: 2120, revenue: 106000 },
  { category: "Home", orders: 1560, revenue: 78000 },
  { category: "Sports", orders: 980, revenue: 49000 },
  { category: "Books", orders: 720, revenue: 14400 },
];

const orders = [
  { id: "ORD-7821", customer: "Alex Thompson", items: 3, total: 284.00, status: "delivered", date: "Jan 11, 2026" },
  { id: "ORD-7820", customer: "Maria Garcia", items: 1, total: 89.50, status: "shipped", date: "Jan 11, 2026" },
  { id: "ORD-7819", customer: "James Wilson", items: 5, total: 567.00, status: "processing", date: "Jan 10, 2026" },
  { id: "ORD-7818", customer: "Emily Chen", items: 2, total: 156.25, status: "delivered", date: "Jan 10, 2026" },
  { id: "ORD-7817", customer: "Michael Brown", items: 4, total: 423.00, status: "cancelled", date: "Jan 09, 2026" },
  { id: "ORD-7816", customer: "Sarah Davis", items: 1, total: 78.00, status: "delivered", date: "Jan 09, 2026" },
];

const statusStyles = {
  delivered: { bg: "bg-success/10 text-success border-success/20", icon: CheckCircle },
  shipped: { bg: "bg-primary/10 text-primary border-primary/20", icon: Truck },
  processing: { bg: "bg-warning/10 text-warning border-warning/20", icon: Clock },
  cancelled: { bg: "bg-destructive/10 text-destructive border-destructive/20", icon: XCircle },
};

const stats = [
  { title: "Total Orders", value: 8547, change: 6.4, icon: <ShoppingCart className="w-5 h-5" /> },
  { title: "Processing", value: 920, change: -8.2, icon: <Package className="w-5 h-5" /> },
  { title: "Shipped", value: 1840, change: 12.1, icon: <Truck className="w-5 h-5" /> },
  { title: "Delivered", value: 5420, change: 9.8, icon: <CheckCircle className="w-5 h-5" /> },
];

const Orders = () => {
  const totalStatus = orderStatusData.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="min-h-screen flex w-full bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Order Management</h1>
            <p className="text-muted-foreground">Track and manage all customer orders.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.title} {...stat} delay={index * 100} />
            ))}
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Order Trend */}
            <div className="lg:col-span-2 glass rounded-xl p-6 card-shadow animate-fade-in">
              <h3 className="text-lg font-semibold mb-1">Order Trend</h3>
              <p className="text-sm text-muted-foreground mb-6">Orders and revenue this month</p>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={orderTrendData}>
                    <defs>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 32%, 15%)" />
                    <XAxis dataKey="date" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                    <YAxis yAxisId="left" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                    <YAxis yAxisId="right" orientation="right" stroke="hsl(215, 20%, 55%)" fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(222, 47%, 8%)",
                        border: "1px solid hsl(217, 32%, 15%)",
                        borderRadius: "8px",
                      }}
                    />
                    <Area yAxisId="right" type="monotone" dataKey="revenue" fill="url(#revenueGradient)" stroke="hsl(262, 83%, 58%)" strokeWidth={2} />
                    <Line yAxisId="left" type="monotone" dataKey="orders" stroke="hsl(187, 85%, 53%)" strokeWidth={2} dot={{ fill: "hsl(187, 85%, 53%)", r: 4 }} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-center gap-6 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Orders</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="text-muted-foreground">Revenue</span>
                </div>
              </div>
            </div>

            {/* Order Status */}
            <div className="glass rounded-xl p-6 card-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-lg font-semibold mb-1">Order Status</h3>
              <p className="text-sm text-muted-foreground mb-4">Distribution by status</p>
              <div className="h-[180px] relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={orderStatusData} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={3} dataKey="value" stroke="none">
                      {orderStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(222, 47%, 8%)",
                        border: "1px solid hsl(217, 32%, 15%)",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold">{(totalStatus / 1000).toFixed(1)}K</span>
                  <span className="text-xs text-muted-foreground">Total</span>
                </div>
              </div>
              <div className="space-y-2 mt-4">
                {orderStatusData.map((d) => (
                  <div key={d.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                      <span className="text-sm">{d.name}</span>
                    </div>
                    <span className="text-sm font-medium">{d.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Category Performance */}
          <div className="glass rounded-xl p-6 card-shadow animate-fade-in mb-8" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold mb-1">Orders by Category</h3>
            <p className="text-sm text-muted-foreground mb-6">Top performing product categories</p>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 32%, 15%)" horizontal={false} />
                  <XAxis type="number" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                  <YAxis dataKey="category" type="category" stroke="hsl(215, 20%, 55%)" fontSize={12} width={80} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(222, 47%, 8%)",
                      border: "1px solid hsl(217, 32%, 15%)",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="orders" fill="hsl(187, 85%, 53%)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Orders Table */}
          <div className="glass rounded-xl p-6 card-shadow animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold">Recent Orders</h3>
                <p className="text-sm text-muted-foreground">Latest order activities</p>
              </div>
              <Button variant="outline" className="text-primary border-primary/30 hover:bg-primary/10">
                View All Orders
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Order ID</th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Customer</th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Items</th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Total</th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Status</th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Date</th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {orders.map((order, index) => {
                    const StatusIcon = statusStyles[order.status as keyof typeof statusStyles].icon;
                    return (
                      <tr key={order.id} className="hover:bg-muted/20 transition-colors animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.05}s` }}>
                        <td className="py-4">
                          <span className="text-sm font-medium text-primary">{order.id}</span>
                        </td>
                        <td className="py-4">
                          <span className="text-sm">{order.customer}</span>
                        </td>
                        <td className="py-4">
                          <span className="text-sm text-muted-foreground">{order.items} items</span>
                        </td>
                        <td className="py-4">
                          <span className="text-sm font-semibold">${order.total.toFixed(2)}</span>
                        </td>
                        <td className="py-4">
                          <Badge variant="outline" className={cn("capitalize text-xs gap-1", statusStyles[order.status as keyof typeof statusStyles].bg)}>
                            <StatusIcon className="w-3 h-3" />
                            {order.status}
                          </Badge>
                        </td>
                        <td className="py-4">
                          <span className="text-sm text-muted-foreground">{order.date}</span>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Orders;
