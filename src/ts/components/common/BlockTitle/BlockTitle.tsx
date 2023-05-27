import React, {PropsWithChildren} from "react";
import styles from "./style.m.scss";

const BlockTitle = ({children}: PropsWithChildren) => (
  <h2 className={styles.title}>
    {children}
  </h2>
);

export default BlockTitle;