import React, { useEffect, useState } from "react";
import styles from "./Button.module.scss";
import { useLocation } from "react-router-dom";

/**
 *
 * @param text 버튼 text
 * @param ButtonClickHandler 클릭이벤트
 * @param active 활성화 상태인지
 * @param styleType styleType === "more" 이면 더보기 스타일로 적용
 * @param icon 더보기 text 뒤에 icon 있으면 넣기
 * @returns
 */
function Button({ text, ButtonClickHandler, active, styleType, icon }) {
  const location = useLocation();
  const [activeStyle, setActiveStyle] = useState();

  const colorActive = () => {
    if (location.pathname === "/1") {
      setActiveStyle(styles.greenActive);
    } else {
      setActiveStyle(styles.blueActive);
    }
  };
  useEffect(() => {
    colorActive();
  }, [location]);

  return (
    <button
      className={`${styleType === "more" ? styles.more : styles.tabButton} ${
        active ? activeStyle : ""
      }`}
      onClick={ButtonClickHandler}
    >
      {text}
      {icon && <img className={styles.icon} src={icon} alt="icon"></img>}
    </button>
  );
}

export default Button;
