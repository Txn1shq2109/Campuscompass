import { Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { notifications } from '@/lib/data';
import { formatDistanceToNow } from 'date-fns';

export default function NotificationsPage() {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <div className="flex items-center gap-4">
        <Bell className="h-6 w-6" />
        <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
      </div>
      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {notifications.map((notification, index) => (
              <div key={notification.id} className="flex items-start gap-4 p-4">
                 <div className="grid gap-1">
                  <div className="font-semibold">{notification.title}</div>
                  <p className="text-sm text-muted-foreground">{notification.description}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(notification.date, { addSuffix: true })}
                  </p>
                </div>
              </div>
            ))}
          </div>
           {notifications.length === 0 && (
            <div className="text-center p-12">
              <p className="text-lg font-semibold">No new notifications</p>
              <p className="text-muted-foreground">You're all caught up!</p>
            </div>
           )}
        </CardContent>
      </Card>
    </div>
  );
}
