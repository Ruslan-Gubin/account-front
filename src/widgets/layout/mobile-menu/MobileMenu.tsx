import { menuSideBarList } from '../../../shared/constants/menu-side-bar';
import { SideBarItem } from '../layout-bar-item/SideBarItem';
import styles from './MobileMenu.module.scss';

type Props = {
  isOpen: boolean;
  width: number;
  currentItemMenu: string;
  handleActiveMenu: ({ value, path }: {
    value: string;
    path: string | undefined;
}) => void;
handleNavigationMenu: (href: string | undefined) => void
activePath: string
}

const MobileMenu = ({ activePath, isOpen, width, currentItemMenu, handleActiveMenu, handleNavigationMenu}: Props) => {


  return (
    <div className={isOpen  ? `${styles.root} ${styles.active}` : styles.root}>
      <div className={styles.header}></div>
      <div className={styles.content}>

<ul style={{backgroundColor: 'white'}} className={isOpen || width < 1040 ? styles.linkList : styles.linkListSmall}>
      {menuSideBarList.map((menu) => (
        <SideBarItem
        isOpenBar={isOpen &&  width <= 1040}
        isOpen={currentItemMenu === menu.title}
        onClick={handleActiveMenu}
        key={menu.elem}
        item={menu}
        onClicNav={handleNavigationMenu}
        activePath={activePath}
        />
        ))}
          </ul>
        </div>
      
    </div>
  );
};

export  {MobileMenu};