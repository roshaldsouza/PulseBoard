import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { TrafficChart } from "@/components/dashboard/TrafficChart";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { TransactionsTable } from "@/components/dashboard/TransactionsTable";

const stats = [
  {
    title: "Total Revenue",
    value: 284500,
    prefix: "$",
    change: 12.5,
    icon: <DollarSign className="w-5 h-5" />,
  },
  {
    title: "Total Users",
    value: 14892,
    change: 8.2,
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Total Orders",
    value: 8547,
    change: -2.4,
    icon: <ShoppingCart className="w-5 h-5" />,
  },
  {
    title: "Conversion Rate",
    value: 3.2,
    suffix: "%",
    change: 4.1,
    icon: <TrendingUp className="w-5 h-5" />,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, <span className="gradient-text">John</span> 👋
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your business today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.title} {...stat} delay={index * 100} />
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <TrafficChart />
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TransactionsTable />
            </div>
            <ActivityFeed />
          </div>

          {/* Performance Chart */}
          <div className="mt-8">
            <PerformanceChart />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
