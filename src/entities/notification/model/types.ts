
export type NotificationItem = {
  message: string;
  status: 'error' | 'success';
  timeFrom: string; 
}

export interface NotificationInitState {
  notificationList: NotificationItem[],
  timeOut: number,
}
