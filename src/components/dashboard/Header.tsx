import { Search, Bell, User, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 glass border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search anything..."
            className="pl-10 bg-muted/50 border-border focus:border-primary focus:ring-primary/20"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-destructive animate-pulse" />
          </button>

          {/* User Menu */}
          <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <User className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="text-left hidden md:block">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Admin</p>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground hidden md:block" />
          </button>
        </div>
      </div>
    </header>
  );
};
