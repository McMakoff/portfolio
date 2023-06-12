import jc from "./../../Helpers/joinClassnames";
import styles from "./style.m.scss";
import React, {useContext} from "react";
import {LANGS} from "./../../Enums/LANGS";
import {PageContext} from "./../Page";

interface ILangSwitch {
  className?: string;
  size?: 'big' | 'small';
}
const LangSwitch = ({className, size = 'big'}: ILangSwitch) => {
  const {lang, changeLang} = useContext(PageContext);
  const languages = [LANGS.RU, LANGS.EN];
  const onButtonClick = (item: LANGS) => {
    changeLang(item);
  };

  return (
    <div
      className={jc([styles.switch, Boolean(className) && className])}
    >
      {languages.map((item, index) => (
        <React.Fragment key={item}>
          <button
            className={jc([
              styles.switchBtn,
              styles[`switchBtn_${size}`],
              item === lang && styles.switchBtn_active,
            ])}
            onClick={() => onButtonClick(item)}
          >
            <svg className={styles.switchIcon}>
              <use xlinkHref={`./img/sprite.svg#${item}`}/>
            </svg>
          </button>
          {(languages.length - 1 > index) && (
            <span className={jc([styles.switchSeparator, styles[`switchSeparator_${size}`],])}/>
          )}
        </React.Fragment>
      ))}
    </div>
  )
};

export default LangSwitch