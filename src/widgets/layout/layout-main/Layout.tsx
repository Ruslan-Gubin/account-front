import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { useSideIsOpen } from "../../../entities";
import { authAdapter } from "../../../entities/auth/service";
import { NotificationList } from "../../notification";
import { SideBar } from "../layout-side-bar/SideBar";
import { TopBar } from "../layout-top-bar/TopBar";

import styles from "./Layout.module.scss";

const Layout = () => {
  const { isOpen } = useSideIsOpen();
  const [isConnectServer, setIsConnectServer] = useState(false)

  const chackConnectServer = async() => {
    setIsConnectServer(true)
    const response = await authAdapter.connect()
    //@ts-ignore
    if (response.success) {
      setIsConnectServer(false)
    }
  }


  useEffect(() => {
    chackConnectServer()
  }, [])

  const classWrapper = [styles.contentWrapper];

  if (isOpen) {
    classWrapper.push(styles.open);
  }

  if (isConnectServer) {
    return (
      <div>There is a connection with the server, please wait...</div>
      )
  }

  return (
    <section className={styles.root}>
      <NotificationList />
      <SideBar />
      <div className={classWrapper.join(" ")}>
        <TopBar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export { Layout };
