import Wrapper from "./../common/Wrapper/Wrapper";
import styles from "./style.m.scss";
import LangSwitch from "./../langSwitch/langSwitch";
import React from "react";

const Home = () => (
  <Wrapper id="home" className={styles.home}>
    <div className={styles.top}>
      <svg className={styles.name}>
        <use xlinkHref={`./img/sprite.svg#name`}/>
      </svg>
      {/*<p className={styles.text}>
        Web Developer<br/>
        32 years old, Barnaul
      </p>*/}
      <LangSwitch className={styles.switch} size={'small'}/>
    </div>
    <img width="238" height="212"  src="./img/logo.png" alt="Logo" className={styles.logo}/>
  </Wrapper>
);

export default Home