import React from "react";
import styles from "./Adding.module.css";

const Adding = ({ data }) => {
  return (
    <div className={styles.inp}>
      {data && data.map((el, i) => <p key={i}>{el}</p>)}
    </div>
  );
};

export default Adding;
