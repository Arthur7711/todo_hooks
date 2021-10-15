import React from "react";
import styles from "./Adding.module.css";

const Adding = ({ data }) => {
  return (
    <div className={styles.inp}>
      {data &&
        data.map((el, i) => (
          <div key={i}>
            <p className={styles.text}>
              {el}
              <span>✅</span>
              <span>❌</span>
            </p>
          </div>
        ))}
    </div>
  );
};

export default Adding;
