import React, {MouseEvent, useState} from "react";
import styles from "./style.m.scss";
import jc from "./../../Helpers/joinClassnames";
import LangSwitch from "./../langSwitch/langSwitch";

interface INav {
  title: string;
  url: string;
}

const navs: INav[] = [
  {title: 'Home', url: '#home'},
  {title: 'About me', url: '#about'},
  {title: 'Skills', url: '#skills'},
  {title: 'Portfolio', url: '#portfolio'},
  {title: 'Contacts', url: '#contacts'},
];
const Header = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [openMenu, setOpenMenu] = useState(false);
  const [animMenu, setAnimMenu] = useState(false);

  const onLinkClick = (e: MouseEvent, item: string) => {
    e.preventDefault();
    setActiveItem(item);
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
          className={jc([styles.navBurger, openMenu && styles.navBurgerActive])}
          onClick={onBurgerClick}
        >
          <div className={styles.navBurgerItem}/>
          <div className={styles.navBurgerItem}/>
          <div className={styles.navBurgerItem}/>
        </button>
        <nav
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
                className={jc([styles.navItem, activeItem === item.title && styles.navItemActive])}
              >
                <a
                  href={`${item.url}`}
                  className={styles.navLink}
                  onClick={(e) => onLinkClick(e, item.title)}
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