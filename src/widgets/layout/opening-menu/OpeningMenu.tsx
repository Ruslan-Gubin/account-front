import { useSideIsOpen, useToggleSideMenu } from '../../../entities/layout';

import styles from './OpeningMenu.module.scss';

const OpeningMenu = () => {
  const { toggleSideMenu } = useToggleSideMenu()

  const { isOpen } = useSideIsOpen()

  const handleClick = () => {
    toggleSideMenu({value: null})
  }

  return (
    <button
      onClick={handleClick}
      className={
        !isOpen
          ? `${styles.toggleMenuSvg} ${styles.active}`
          : styles.toggleMenuSvg
      }
    >
      <span></span>
    </button>
  );
};

export { OpeningMenu };