import React, {useState} from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contacts from "./Contacts/Contacts";
import {PAGES} from "./../Enums/PAGES";
import {LANGS} from "./../Enums/LANGS";

interface IPageContext {
  lang: LANGS;
  activePage: PAGES;
  changeLang: (lang: LANGS) => void;
  changePage: (page: PAGES) => void;

  onScrollPage: (el: HTMLElement, page: PAGES, callBack?: (y: number, elY: number, page: PAGES) => any) => void;
}

const defaultLang = localStorage.getItem('portfolioLang') as LANGS  || LANGS.RU;

export const PageContext = React.createContext<IPageContext>({
  lang: defaultLang,
  activePage: PAGES.HOME,
  changeLang: () => null,
  changePage: () => null,
  onScrollPage: () => null,
});

const Page = () => {
  const [lang, seLang] = useState(defaultLang);
  const [activePage, setActivePage] = useState(PAGES.HOME);

  const onScrollPage = (el: HTMLElement, page: PAGES, callBack?: (y: number, elY: number, page: PAGES) => any) => {
    window.addEventListener('scroll', () => {
      const headerHeight = getComputedStyle(document.body).getPropertyValue('--header-height');
      const shift = headerHeight ? Number(headerHeight.slice(0, -2)) : 0;
      if (el.getBoundingClientRect().top <= shift) {
        setActivePage(page);
      }

      if (page === PAGES.CONTACTS) {
        if (Math.abs(window.innerHeight - el.getBoundingClientRect().bottom) <= 1) {
          setActivePage(page);
        }
      }

      callBack && callBack(window.scrollY, el.clientTop, page);
    })
  };

  const changeLang = (lang: LANGS) => {
    localStorage.setItem('portfolioLang', lang);
    seLang(lang);
  }

  const changePage = (page: PAGES) => {
    setActivePage(page);
  }

  return (
    <PageContext.Provider value={{lang, activePage, onScrollPage, changeLang, changePage}}>
      <Header/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <Contacts/>
    </PageContext.Provider>
  )
};

export default Page;