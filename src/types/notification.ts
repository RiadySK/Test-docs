export interface Notification {
  id: string;
  content: string;
  body: string;
  type: string;
  dateline: number;
  is_read: boolean;
  url: string;
}

export interface NotificationList {
  stats: {
    new_state: number,
    pm_unread: number,
  },
  notifications: Notification[]
}