import { Outlet } from "react-router";
import { useSideIsOpen } from "../../../entities";
import { NotificationList } from "../../notification";
import { SideBar } from "../layout-side-bar/SideBar";
import { TopBar } from "../layout-top-bar/TopBar";

import styles from "./Layout.module.scss";

const Layout = () => {
  const { isOpen } = useSideIsOpen();

  const classWrapper = [styles.contentWrapper];

  if (isOpen) {
    classWrapper.push(styles.open);
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
