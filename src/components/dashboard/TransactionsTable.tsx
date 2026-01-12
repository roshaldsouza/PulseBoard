import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const transactions = [
  {
    id: "TXN-001",
    customer: "Alex Thompson",
    email: "alex.t@email.com",
    amount: 1250.0,
    status: "completed",
    date: "Jan 11, 2026",
  },
  {
    id: "TXN-002",
    customer: "Maria Garcia",
    email: "maria.g@email.com",
    amount: 890.5,
    status: "pending",
    date: "Jan 11, 2026",
  },
  {
    id: "TXN-003",
    customer: "James Wilson",
    email: "james.w@email.com",
    amount: 2340.0,
    status: "completed",
    date: "Jan 10, 2026",
  },
  {
    id: "TXN-004",
    customer: "Emily Chen",
    email: "emily.c@email.com",
    amount: 567.25,
    status: "failed",
    date: "Jan 10, 2026",
  },
  {
    id: "TXN-005",
    customer: "Michael Brown",
    email: "michael.b@email.com",
    amount: 1890.0,
    status: "completed",
    date: "Jan 09, 2026",
  },
];

const statusStyles = {
  completed: "bg-success/10 text-success border-success/20",
  pending: "bg-warning/10 text-warning border-warning/20",
  failed: "bg-destructive/10 text-destructive border-destructive/20",
};

export const TransactionsTable = () => {
  return (
    <div className="glass rounded-xl p-6 card-shadow animate-fade-in" style={{ animationDelay: "0.6s" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          <p className="text-sm text-muted-foreground">Latest payment activities</p>
        </div>
        <button className="text-sm text-primary hover:text-primary/80 transition-colors">
          View all
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">
                Transaction
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">
                Customer
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">
                Amount
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">
                Status
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider pb-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {transactions.map((txn, index) => (
              <tr
                key={txn.id}
                className="hover:bg-muted/20 transition-colors animate-fade-in"
                style={{ animationDelay: `${0.7 + index * 0.05}s` }}
              >
                <td className="py-4">
                  <span className="text-sm font-medium">{txn.id}</span>
                </td>
                <td className="py-4">
                  <div>
                    <p className="text-sm font-medium">{txn.customer}</p>
                    <p className="text-xs text-muted-foreground">{txn.email}</p>
                  </div>
                </td>
                <td className="py-4">
                  <span className="text-sm font-semibold">${txn.amount.toLocaleString()}</span>
                </td>
                <td className="py-4">
                  <Badge
                    variant="outline"
                    className={cn("capitalize text-xs", statusStyles[txn.status as keyof typeof statusStyles])}
                  >
                    {txn.status}
                  </Badge>
                </td>
                <td className="py-4">
                  <span className="text-sm text-muted-foreground">{txn.date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
