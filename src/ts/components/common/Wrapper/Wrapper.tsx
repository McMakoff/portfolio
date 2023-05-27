import React, {PropsWithChildren} from "react";
import styles from "./style.m.scss";
import jc from "./../../../Helpers/joinClassnames";

interface IWrapperBase {
  className?: string;
  id?: string;

  theme?: 'light' | 'dark';
  resetVerticalPadding?: boolean
}
const Wrapper = (props: PropsWithChildren<IWrapperBase>) => {
  const  {children, className, id, theme = 'light', resetVerticalPadding} = props;

  return (
    <section id={id} className={styles[`wrapper_${theme}`]}>
      <div
        className={jc([
          styles.wrapper,
          resetVerticalPadding && styles.wrapper_resetPV,
          Boolean(className) && className
        ])}
      >
        {children}
      </div>
    </section>
  )
}

export default Wrapper;