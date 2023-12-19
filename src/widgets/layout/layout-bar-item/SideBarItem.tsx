import { memo } from "react";
import type { FC } from "react";
import { SvgIconComponent } from "../../../shared/types/svgIconComponsets";
import { TriangleSvg } from "../../../shared/svg/TriangleSvg";

import styles from "./SideBarItem.module.scss";


export interface IChildren {
  title: string;
  path: string;
  Icon: SvgIconComponent;
}

export interface Iitem {
  title: string;
  elem: string;
  path?: string;
  Icon: SvgIconComponent;
  children?: IChildren[];
}

interface IProps {
  item: Iitem;
  isOpen: boolean;
  isOpenBar: boolean;
  activePath: string;
  onClick: ({
    value,
    path,
  }: {
    value: string;
    path: string | undefined;
  }) => void;
  onClicNav: (href: string) => void;
}

const SideBarItem: FC<IProps> = memo(
  ({ item, onClick, activePath, isOpenBar }) => {
    const { title, Icon, path, elem }: Iitem = item;

    const activeItem = activePath !== '/' ?
      (path && activePath.includes(path)) || item.path?.includes(activePath) : false;

    const classesRoot = [styles.titleItem];

    if (activeItem) {
      classesRoot.push(styles.navActive);
    }

    if (!isOpenBar) {
      classesRoot.push(styles.navIconClose);
    }

    const logoutLink = elem === "logout";

    return (
      <>
        <li
          onClick={() => onClick({ value: title, path: item.path })}
          className={classesRoot.join(" ")}
        >
          <div className={styles.titleLeftContainer}>
            <div className={styles.iconMenu}>
              <Icon active={Boolean(activeItem)} />
            </div>
            <span
              className={
                isOpenBar
                  ? `${styles.iconText} ${styles.iconText_active}`
                  : styles.iconText
              }
            >
              {title}
            </span>
            {isOpenBar && (
              <div className={styles.triangleContainer}>
                {!logoutLink && <TriangleSvg active={Boolean(activeItem)} />}
              </div>
            )}
          </div>
        </li>
      </>
    );
  }
);

SideBarItem.displayName = "SideBarItem";

export { SideBarItem };
