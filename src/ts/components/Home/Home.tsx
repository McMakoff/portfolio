import Wrapper from "./../common/Wrapper/Wrapper";
import styles from "./style.m.scss";
import LangSwitch from "./../langSwitch/langSwitch";
import React, {useContext, useEffect, useRef} from "react";
import {PAGES} from "./../../Enums/PAGES";
import {PageContext} from "./../Page";

const Home = () => {
  const {onScrollPage} = useContext(PageContext);
  const baseRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (baseRef.current) {
      onScrollPage(baseRef.current, PAGES.HOME);
    }
  }, []);

  return (
    <Wrapper ref={baseRef} id={PAGES.HOME} className={styles.home}>
      <div className={styles.top}>
        <svg className={styles.name}>
          <use xlinkHref={`./img/sprite.svg#name`}/>
        </svg>
        <LangSwitch className={styles.switch} size={'small'}/>
      </div>
      <img width="238" height="212"  src="./img/logo.png" alt="Logo" className={styles.logo}/>
    </Wrapper>
  )
};

export default Home