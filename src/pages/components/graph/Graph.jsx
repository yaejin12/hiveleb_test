import React, { useEffect, useState } from "react";
import styles from "./Graph.module.scss";

/**
 *
 * @param percent 배송 도착확률
 * @param percent blueActive blue_active 색상 반환
 * @returns
 */
function Graph({ percent, blueActive }) {
  const [active, setActive] = useState();

  useEffect(() => {
    setActive(blueActive ? styles.blue_active : styles.gray_active);
  }, [blueActive]);
  return (
    <div className={styles.graph_wrapper}>
      {Array(10)
        .fill(0)
        .map((_, index) => {
          return (
            <div
              key={index}
              className={`${styles.graph} ${
                Math.floor(percent / 10) > index ? active : ""
              }`}
            ></div>
          );
        })}
    </div>
  );
}

export default Graph;
