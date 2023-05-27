import React, {PropsWithChildren} from "react";
import styles from "./style.m.scss";
import jc from "./../../../Helpers/joinClassnames";

interface IDescription {
  theme?: 'light' | 'dark';
}

const Description = ({children, theme = 'dark'}: PropsWithChildren<IDescription>) => (
  <p className={jc([styles.desc, styles[`desc_${theme}`]])}>
    {children}
  </p>
);

export default Description;