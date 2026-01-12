import { Users as UsersIcon, UserPlus, UserCheck, UserX, MoreHorizontal, Search, Filter } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { StatCard } from "@/components/dashboard/StatCard";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from "recharts";

const userGrowthData = [
  { month: "Jul", users: 8200 },
  { month: "Aug", users: 9100 },
  { month: "Sep", users: 10400 },
  { month: "Oct", users: 11800 },
  { month: "Nov", users: 13200 },
  { month: "Dec", users: 14892 },
];

const demographicsData = [
  { name: "18-24", value: 2800, color: "hsl(187, 85%, 53%)" },
  { name: "25-34", value: 5200, color: "hsl(262, 83%, 58%)" },
  { name: "35-44", value: 3800, color: "hsl(142, 76%, 46%)" },
  { name: "45-54", value: 2100, color: "hsl(38, 92%, 50%)" },
  { name: "55+", value: 992, color: "hsl(0, 84%, 60%)" },
];

const activityData = [
  { day: "Mon", active: 4200, new: 320 },
  { day: "Tue", active: 4800, new: 410 },
  { day: "Wed", active: 4500, new: 380 },
  { day: "Thu", active: 5100, new: 450 },
  { day: "Fri", active: 4900, new: 420 },
  { day: "Sat", active: 3200, new: 280 },
  { day: "Sun", active: 2800, new: 240 },
];

const users = [
  { id: 1, name: "Sarah Wilson", email: "sarah.w@email.com", role: "Admin", status: "active", joined: "Jan 5, 2026", avatar: "SW" },
  { id: 2, name: "Michael Chen", email: "michael.c@email.com", role: "Editor", status: "active", joined: "Jan 3, 2026", avatar: "MC" },
  { id: 3, name: "Emily Rodriguez", email: "emily.r@email.com", role: "Viewer", status: "pending", joined: "Jan 2, 2026", avatar: "ER" },
  { id: 4, name: "James Thompson", email: "james.t@email.com", role: "Editor", status: "active", joined: "Dec 28, 2025", avatar: "JT" },
  { id: 5, name: "Lisa Park", email: "lisa.p@email.com", role: "Viewer", status: "inactive", joined: "Dec 20, 2025", avatar: "LP" },
  { id: 6, name: "David Kim", email: "david.k@email.com", role: "Admin", status: "active", joined: "Dec 15, 2025", avatar: "DK" },
];

const statusStyles = {
  active: "bg-success/10 text-success border-success/20",
  pending: "bg-warning/10 text-warning border-warning/20",
  inactive: "bg-muted text-muted-foreground border-border",
};

const roleColors = {
  Admin: "bg-primary/10 text-primary",
  Editor: "bg-secondary/10 text-secondary",
  Viewer: "bg-muted text-muted-foreground",
};

const stats = [
  { title: "Total Users", value: 14892, change: 8.2, icon: <UsersIcon className="w-5 h-5" /> },
  { title: "New This Month", value: 1247, change: 12.5, icon: <UserPlus className="w-5 h-5" /> },
  { title: "Active Users", value: 11420, change: 5.8, icon: <UserCheck className="w-5 h-5" /> },
  { title: "Churned", value: 324, change: -15.2, icon: <UserX className="w-5 h-5" /> },
];

const Users = () => {
  const totalDemo = demographicsData.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="min-h-screen flex w-full bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">User Management</h1>
            <p className="text-muted-foreground">Monitor and manage your user base.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.title} {...stat} delay={index * 100} />
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* User Growth */}
            <div className="lg:col-span-2 glass rounded-xl p-6 card-shadow animate-fade-in">
              <h3 className="text-lg font-semibold mb-1">User Growth</h3>
              <p className="text-sm text-muted-foreground mb-6">Monthly user acquisition</p>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={userGrowthData}>
                    <defs>
                      <linearGradient id="userGrowthGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(142, 76%, 46%)" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="hsl(142, 76%, 46%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 32%, 15%)" />
                    <XAxis dataKey="month" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                    <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(222, 47%, 8%)",
                        border: "1px solid hsl(217, 32%, 15%)",
                        borderRadius: "8px",
                      }}
                    />
                    <Area type="monotone" dataKey="users" stroke="hsl(142, 76%, 46%)" strokeWidth={2} fill="url(#userGrowthGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Demographics */}
            <div className="glass rounded-xl p-6 card-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-lg font-semibold mb-1">Age Demographics</h3>
              <p className="text-sm text-muted-foreground mb-4">User distribution by age</p>
              <div className="h-[180px] relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={demographicsData} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={3} dataKey="value" stroke="none">
                      {demographicsData.map((entry, index) => (
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
                  <span className="text-xl font-bold">{(totalDemo / 1000).toFixed(1)}K</span>
                  <span className="text-xs text-muted-foreground">Users</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {demographicsData.map((d) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                    <span className="text-xs text-muted-foreground">{d.name}: {((d.value / totalDemo) * 100).toFixed(0)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Chart */}
          <div className="glass rounded-xl p-6 card-shadow animate-fade-in mb-8" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold mb-1">Weekly Activity</h3>
            <p className="text-sm text-muted-foreground mb-6">Active and new users by day</p>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 32%, 15%)" vertical={false} />
                  <XAxis dataKey="day" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                  <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(222, 47%, 8%)",
                      border: "1px solid hsl(217, 32%, 15%)",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="active" name="Active Users" fill="hsl(187, 85%, 53%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="new" name="New Users" fill="hsl(262, 83%, 58%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Users Table */}
          <div className="glass rounded-xl p-6 card-shadow animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-semibold">All Users</h3>
                <p className="text-sm text-muted-foreground">Manage your team members</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search users..." className="pl-9 w-64 bg-muted/50" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">User</th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Role</th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Status</th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">Joined</th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {users.map((user, index) => (
                    <tr key={user.id} className="hover:bg-muted/20 transition-colors animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.05}s` }}>
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-9 h-9 bg-gradient-to-br from-primary to-secondary">
                            <AvatarFallback className="text-xs font-medium text-primary-foreground bg-transparent">{user.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className={cn("text-xs font-medium px-2 py-1 rounded-md", roleColors[user.role as keyof typeof roleColors])}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-4">
                        <Badge variant="outline" className={cn("capitalize text-xs", statusStyles[user.status as keyof typeof statusStyles])}>
                          {user.status}
                        </Badge>
                      </td>
                      <td className="py-4">
                        <span className="text-sm text-muted-foreground">{user.joined}</span>
                      </td>
                      <td className="py-4">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Users;
