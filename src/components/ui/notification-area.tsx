import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  duration?: number;
}

const icons = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: XCircle,
};

const colors = {
  info: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
  success: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
  warning: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30',
  error: 'from-red-500/20 to-pink-500/20 border-red-500/30',
};

export function NotificationArea() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification = { ...notification, id };
    setNotifications(prev => [...prev, newNotification]);

    if (notification.duration !== 0) {
      setTimeout(() => {
        removeNotification(id);
      }, notification.duration || 5000);
    }
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Example notifications for demo
  useEffect(() => {
    const timer = setTimeout(() => {
      addNotification({
        type: 'info',
        title: 'Welcome!',
        message: 'DevTools Dashboard is ready to use.',
        duration: 3000,
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2 max-w-sm">
      <AnimatePresence>
        {notifications.map((notification) => {
          const Icon = icons[notification.type];
          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 300, scale: 0.3 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.5, transition: { duration: 0.2 } }}
              className={`p-4 rounded-lg backdrop-blur-sm border bg-gradient-to-r ${colors[notification.type]} shadow-lg`}
            >
              <div className="flex items-start gap-3">
                <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm">{notification.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeNotification(notification.id)}
                  className="h-6 w-6 p-0 hover:bg-background/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}