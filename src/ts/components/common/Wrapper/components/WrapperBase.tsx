import React, {PropsWithChildren} from "react";
import styles from "./style.m.scss";
import jc from "./../../../../Helpers/joinClassnames";

interface IContainer {
  className?: string;
  id?: string;
  resetVerticalPadding?: boolean
}
const WrapperBase = (props: PropsWithChildren<IContainer>) => {
  const  {children, className, id, resetVerticalPadding} = props;

  return (
    <section
      id={id}
      className={jc([
        styles.wrapper,
        resetVerticalPadding && styles.wrapper_resetPV,
        Boolean(className) && className
      ])}
    >
      {children}
    </section>
  )
}

export default WrapperBase;