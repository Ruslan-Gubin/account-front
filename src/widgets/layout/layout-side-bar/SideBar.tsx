import { useCallback,  useMemo, useRef, useState } from "react";
import { SideBarItem } from "../layout-bar-item/SideBarItem";

import {
  useChangeMenuValue,
  useLayoutSelect,
  useSideIsOpen,
  useToggleSideMenu,
} from "../../../entities/layout";
import { MobileMenu } from "../mobile-menu/MobileMenu";
import {  useLogoutUser } from "../../../entities";
import { menuSideBarList, useNavigationReact, useScreenSize } from "../../../shared";
import { ModalConfirmation } from "../../../shared/ui/modal-confirmation/ModalConfirmation";

import styles from "./SideBar.module.scss";

const SideBar = () => { 
  const { changeMenu } = useChangeMenuValue();
  const { currentItemMenu } = useLayoutSelect();
  const { isOpen } = useSideIsOpen();
  const { router, pathName } = useNavigationReact();
  const { width } = useScreenSize();
  const { toggleSideMenu } = useToggleSideMenu()
  const { logoutUser } = useLogoutUser();
  const ref = useRef<HTMLDListElement>(null);
  const [isOpenLogout, setIsOpenLogout] = useState<boolean>(false)


  const handleNavigationMenu = useCallback((href: string | undefined) => {
    if (typeof href === "undefined") return;
    
    if (href === '/logout') {
      setIsOpenLogout(true)
    return;
    }

    router(href);

    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      
      if (width <= 784) {
        toggleSideMenu({ value: null })
      }
    }

  }, []);

  const handleActiveMenu = useCallback(
    ({ value, path }: { value: string; path: string | undefined }) => {

      changeMenu(value);

      if (path) {
        handleNavigationMenu(path);
      }
    },
    [menuSideBarList]
  );

  const handleLogout = () => {
    logoutUser()
    router('/')
    setIsOpenLogout(false)
  }



  const activePath = useMemo(() => {
    return pathName
  }, [ menuSideBarList, pathName]);



  return (
    <>
     <ModalConfirmation
      isOpen={isOpenLogout}
      closeModal={() => setIsOpenLogout(false)}
      onClick={handleLogout}
      status='error'
      titleText="Logout?"
      subTitleText="After confirmation, you will be redirected to the main page. We will be glad to see you again!"
      buttonText={{ cancel: "Close and don't go out", submit: 'Exit' }}
      />
      <aside
        ref={ref}
        className={
          !isOpen || width < 784
            ? `${styles.root} ${styles.smallRoot}`
            : styles.root
        }
      >
        <div className={styles.header}>
         <img src="/logo.jpg" alt="Logo" />
        </div>

        <nav
          className={
            isOpen || width < 1040 ? styles.linkList : styles.linkListSmall
          }
        >
          {menuSideBarList && menuSideBarList.map((menu) => (
            <SideBarItem
              isOpenBar={isOpen && !(isOpen && width <= 1040)}
              isOpen={currentItemMenu === menu.title}
              onClick={handleActiveMenu}
              key={menu.elem}
              item={menu}
              onClicNav={handleNavigationMenu}
              activePath={activePath}
            />
          ))}
        </nav>
      </aside>
      {width <= 784 && (
        <MobileMenu
          activePath={activePath}
          handleNavigationMenu={handleNavigationMenu}
          handleActiveMenu={handleActiveMenu}
          isOpen={isOpen}
          width={width}
          currentItemMenu={currentItemMenu}
        />
      )}
    </>
  );
};

export { SideBar };
