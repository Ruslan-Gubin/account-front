import { useAppDispatch } from "../../../shared";
import { notificationAction, useNotificationSelect } from "../model";


export function useShowNotification() {
  const { notificationList, timeOut } = useNotificationSelect()
 
  return { notificationList, timeOut };
}

export function useActiveNotification() {
  const dispatch = useAppDispatch();
 
  const  activeNotification = ({ message, status }: { message: string, status: 'error' | 'success'; }) => {
    dispatch(notificationAction.activeNotification({ message, status }))
  }

  return { activeNotification };
}

export function useClearNotification() {
  const dispatch = useAppDispatch();

  async function clearNotification({ time }: { time: string }) {
    dispatch(notificationAction.clearNotification({ time }))
  }

  return { clearNotification };
}




