import React, {MouseEvent, useContext, useEffect, useRef, useState} from "react";
import styles from "./style.m.scss";
import jc from "./../../Helpers/joinClassnames";
import LangSwitch from "./../langSwitch/langSwitch";
import {PAGES} from "./../../Enums/PAGES";
import {PageContext} from "./../Page";

interface INav {
  title: string;
  alias: PAGES;
}

const navs: INav[] = [
  {title: 'Home', alias: PAGES.HOME},
  {title: 'About me', alias: PAGES.ABOUT_ME},
  {title: 'Skills', alias: PAGES.SKILLS},
  {title: 'Portfolio', alias: PAGES.PORTFOLIO},
  {title: 'Contacts', alias: PAGES.CONTACTS},
];
const Header = () => {
  const {activePage, changePage} = useContext(PageContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [animMenu, setAnimMenu] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const onLinkClick = (e: MouseEvent, item: PAGES) => {
    e.preventDefault();

    if (openMenu) {
      setAnimMenu(true);
      setOpenMenu(false);
    }

    changePage(item);

    const isBurgerVisible: boolean =
      burgerRef.current
        ? getComputedStyle(burgerRef.current).getPropertyValue('--burger-visible') === '1'
        : false;

    const itemEl = document.getElementById(item);

    if (itemEl) {
      const headerHeight = navRef.current?.offsetHeight ? navRef.current.offsetHeight : 0;
      const offset =
        (isBurgerVisible || item === PAGES.HOME)
          ? itemEl.offsetTop
          : itemEl.offsetTop - headerHeight;

      window.scrollTo({
        top: offset,
        behavior: isBurgerVisible ? 'auto' : 'smooth',
      });
    }
  };

  const onBurgerClick = () => {
    setOpenMenu(!openMenu);
    setAnimMenu(true);
  }

  const onNavTransitionEnd = () => {
    setAnimMenu(false);
  }

  return (
    <>
      <header className={styles.header}>
        <button
          ref={burgerRef}
          className={jc([styles.navBurger, openMenu && styles.navBurgerActive])}
          onClick={onBurgerClick}
        >
          <div className={styles.navBurgerItem}/>
          <div className={styles.navBurgerItem}/>
          <div className={styles.navBurgerItem}/>
        </button>
        <nav
          ref={navRef}
          className={jc([
            styles.nav,
            animMenu && styles.navAnim,
            openMenu && styles.navOpen,
          ])}
          onTransitionEnd={onNavTransitionEnd}
        >
          <ul className={styles.navList}>
            {navs.map((item: INav) => (
              <li
                key={item.title}
                className={jc([styles.navItem, activePage === item.alias && styles.navItemActive])}
              >
                <a
                  href={`#${item.alias}`}
                  className={styles.navLink}
                  onClick={(e) => onLinkClick(e, item.alias)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <LangSwitch className={styles.navSwitch}/>
        </nav>
      </header>
    </>
  );
};

export default Header;