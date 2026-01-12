import { User, ShoppingCart, CreditCard, Star, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    icon: ShoppingCart,
    title: "New order placed",
    description: "Order #12847 - $284.00",
    time: "2 min ago",
    color: "text-primary bg-primary/10",
  },
  {
    id: 2,
    icon: User,
    title: "New user registered",
    description: "sarah.wilson@email.com",
    time: "15 min ago",
    color: "text-secondary bg-secondary/10",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Payment received",
    description: "Invoice #INV-2024-089",
    time: "32 min ago",
    color: "text-success bg-success/10",
  },
  {
    id: 4,
    icon: Star,
    title: "New review received",
    description: "5 stars from John D.",
    time: "1 hour ago",
    color: "text-warning bg-warning/10",
  },
  {
    id: 5,
    icon: MessageSquare,
    title: "Support ticket opened",
    description: "Ticket #TKT-4521",
    time: "2 hours ago",
    color: "text-muted-foreground bg-muted",
  },
];

export const ActivityFeed = () => {
  return (
    <div className="glass rounded-xl p-6 card-shadow animate-fade-in" style={{ animationDelay: "0.5s" }}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">Latest updates and events</p>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={cn(
              "flex items-start gap-4 p-3 rounded-lg transition-colors hover:bg-muted/30",
              "animate-slide-in-left"
            )}
            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
          >
            <div className={cn("p-2 rounded-lg", activity.color)}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{activity.title}</p>
              <p className="text-xs text-muted-foreground truncate">{activity.description}</p>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
