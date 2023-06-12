import React, {MouseEvent, useContext, useRef, useState} from "react";
import styles from "./style.m.scss";
import jc from "./../../Helpers/joinClassnames";
import LangSwitch from "./../langSwitch/langSwitch";
import {PAGES} from "./../../Enums/PAGES";
import {LANGS} from "./../../Enums/LANGS";
import {PageContext} from "./../Page";

interface INav {
  title: string;
  alias: PAGES;
}
const Header = () => {
  const {activePage, changePage, lang, headerHeight} = useContext(PageContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [animMenu, setAnimMenu] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const isRu = lang === LANGS.RU;

  const navs: INav[] = [
    {
      title: isRu ? 'Главная' : 'Home',
      alias: PAGES.HOME
    },
    {
      title: isRu ? 'Обо мне' : 'About me',
      alias: PAGES.ABOUT_ME
    },
    {title: isRu ? 'Навыки' : 'Skills',
      alias: PAGES.SKILLS
    },
    {
      title: isRu ? 'Портфолио' : 'Portfolio',
      alias: PAGES.PORTFOLIO
    },
    {
      title: isRu ? 'Контакты' : 'Contacts',
      alias: PAGES.CONTACTS
    },
  ];

  const onLinkClick = (e: MouseEvent, item: PAGES) => {
    e.preventDefault();

    if (openMenu) {
      setAnimMenu(true);
      setOpenMenu(false);
    }

    changePage(item);

    const itemEl = document.getElementById(item);

    if (itemEl) {
      const offset =
        (headerHeight === 0 || item === PAGES.HOME)
          ? itemEl.offsetTop
          : itemEl.offsetTop - headerHeight;

      window.scrollTo({
        top: offset,
        behavior: headerHeight === 0 ? 'auto' : 'smooth',
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