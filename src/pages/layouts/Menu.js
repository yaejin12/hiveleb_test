import React from "react";
import styles from "./Layout.module.scss";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <section className={styles.menu_section}>
      <div className="inner">
        <nav className={styles.menu_section_nav}>
          <Link to={"/1"}>
            <div className={styles.menu_button}>
              <Button text={"[과제 1-1] 스마일프레시"} styleType={"more"} />
            </div>
          </Link>
          <Link to={"/2"}>
            <div className={styles.menu_button}>
              <Button text={"[과제 1-2] 스마일배송"} styleType={"more"} />
            </div>
          </Link>
          <Link to={"/test2"}>
            <div className={styles.menu_button}>
              <Button text={"[과제 2] 배송 예정"} styleType={"more"} />
            </div>
          </Link>
        </nav>
      </div>
    </section>
  );
}

export default Menu;
