import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingCart,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
  Bell,
  CreditCard,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Users, label: "Users", path: "/users" },
  { icon: ShoppingCart, label: "Orders", path: "/orders" },
  { icon: CreditCard, label: "Payments", path: "/payments" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={cn(
        "h-screen sticky top-0 flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="p-6 flex items-center justify-between">
        <Link to="/" className={cn("flex items-center gap-3", collapsed && "justify-center w-full")}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="text-xl font-bold gradient-text">PulseBoard</span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-primary/10 text-primary glow"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
                collapsed && "justify-center px-0"
              )}
            >
              <item.icon className={cn("w-5 h-5 flex-shrink-0", isActive && "animate-pulse-slow")} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Help */}
      <div className="p-4 border-t border-sidebar-border">
        <button
          className={cn(
            "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-foreground transition-all",
            collapsed && "justify-center px-0"
          )}
        >
          <HelpCircle className="w-5 h-5" />
          {!collapsed && <span>Help & Support</span>}
        </button>
      </div>

      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
      >
        {collapsed ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronLeft className="w-4 h-4" />
        )}
      </button>
    </aside>
  );
};
