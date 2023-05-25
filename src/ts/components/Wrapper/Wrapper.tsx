import React, {PropsWithChildren} from "react";
import styles from "./style.m.scss";
import jc from "./../../Helpers/joinClassnames";

interface IContainer {
  className?: string;
  isResetVerticalPadding?: boolean
}
const Wrapper = (props: PropsWithChildren<IContainer>) => {
  const  {children, className, isResetVerticalPadding} = props;

  return (
    <section
      className={jc([
        styles.wrapper,
        isResetVerticalPadding && styles.wrapperResetPV,
        Boolean(className) && className
      ])}
    >
      {children}
    </section>
  )
}

export default Wrapper;