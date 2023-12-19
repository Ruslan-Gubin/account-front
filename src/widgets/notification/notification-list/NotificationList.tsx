import { useEffect } from "react";
import * as entities from "../../../entities";

import styles from "./NotificationList.module.scss";


const NotificationList = () => {
  const { clearNotification } = entities.useClearNotification()
  const { notificationList, timeOut } = entities.useShowNotification()

 
  const chackClearNotification = () => {
    const currentDate = Date.now()
    const maxTimeNow = timeOut * 1000

    for (let i = 0; i < notificationList.length; i++) {
      const notDateString = notificationList[i].timeFrom
      const notNowDate = new Date(notDateString).getTime()

        if ((currentDate - notNowDate) >= maxTimeNow) {
          clearNotification({ time: notDateString })
        }
    }

  }

  useEffect(() => {
    if (notificationList.length === 0) return;

    const timeOut = setInterval(chackClearNotification, 1000) 

    return () => {
      clearInterval(timeOut)
    }
  }, [notificationList, timeOut])


  if (notificationList.length === 0) {
    return null;
  }

  return (
    <ul className={styles.wrapper}>
      {notificationList.map(((notification, index) => 
    <li key={`${index}${notification.timeFrom}`} className={notification.status === 'error' ? `${styles.root} ${styles.error}` : styles.root}>
      <div className={notification.status === 'error' ? styles.errorContainer : styles.successContainer}></div>
      <span className={styles.notificationText}>{notification.message}</span>
    </li>
    ))}
    </ul>
  );
};

export { NotificationList };