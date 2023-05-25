import jc from "./../../Helpers/joinClassnames";
import styles from "./style.m.scss";
import React, {useState} from "react";

interface ILangSwitch {
  className?: string;
  size?: 'big' | 'small';
}

enum LANGUAGES {
  RU = 'ru',
  EN = 'en'
}

const langs = [LANGUAGES.RU, LANGUAGES.EN];
const LangSwitch = ({className, size = 'big'}: ILangSwitch) => {

  const [lang, setLang] = useState(LANGUAGES.RU);
  const onButtonClick = (item: LANGUAGES) => {
    setLang(item);
  };

  return (
    <div
      className={jc([styles.switch, Boolean(className) && className])}
    >
      {langs.map((item, index) => (
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
          {(langs.length - 1 > index) && <span className={styles.switchSeparator}/>}
        </React.Fragment>
      ))}
    </div>
  )
};

export default LangSwitch