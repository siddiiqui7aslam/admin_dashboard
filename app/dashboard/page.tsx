import { UserList } from '@/components/dashboard/user-list';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Users Dashboard</h1>
        <p className="text-muted-foreground">
          View and manage all user accounts in your system.
        </p>
      </div>
      
      <UserList />
    </div>
  );
}