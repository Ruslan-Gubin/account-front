import { useEffect, useRef } from 'react';
import { useSideIsOpen } from '../../../entities/layout';
import {  useNavigationReact } from '../../../shared';
import { OpeningMenu } from '../opening-menu/OpeningMenu';
import { debounce } from '../../../shared/utils/debounce';

import styles from './TopBar.module.scss';


const TopBar = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const { pathName } = useNavigationReact();
  const { isOpen } = useSideIsOpen();

  const handleScroll = () => {
    const node = headerRef.current
    if (!node) return;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      node?.classList.add(styles.transparent)
    } else {
      node?.classList.remove(styles.transparent)
    }

  }

  useEffect(() => {
    const debonceScroll = debounce(handleScroll,300)

    window.addEventListener('scroll', debonceScroll)
   
    return () => {
      window.removeEventListener('scroll', debonceScroll)
    }
  }, [])


  const headerTitleList: {[key:string]: string} = {
    '/account': 'Profile',
    '/people': 'Accounts',
    '/account/edit': 'Edit',
    '/': 'Home',
  } 

  return (
    <header  className={styles.root}>
      <div  className={isOpen ? `${styles.headerContent} ${styles.headerContentOpen}` : styles.headerContent}>
        <div className={styles.leftSize}>
        <img width={150} height={45} src='/logo.jpg' alt='Logo' className={styles.leftSizeLogo} />
      <OpeningMenu />
   <span className={styles.title}>{headerTitleList[pathName]}</span>
      </div> 
        </div>
        <div ref={headerRef}></div>
   <div className={styles.footerLine}></div>

  </header>
  );
};

export { TopBar };
