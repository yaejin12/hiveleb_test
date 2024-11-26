import React, { useEffect, useState } from "react";
import styles from "./Test2Main.module.scss";
import infoIcon from "../../assets/img/circle-info-solid.svg";
import Graph from "../components/graph/Graph";
import { deliveryData } from "./textData/TextData";
import Modal from "./components/Modal";

function Test2Main() {
  const [isClickModalIcon, setIsClickModalIcon] = useState(false);
  const [isClickCloseDelivery, setIsClickCloseDelivery] = useState(false);

  const infoIconClickHandler = () => {
    setIsClickModalIcon(true);
  };
  const moreDeliveryInfoClickHandler = () => {
    setIsClickCloseDelivery((prev) => !prev);
  };

  return (
    <>
      <section className={styles.test2_main_section}>
        <div className="inner">
          {/* 상단 타이틀 */}
          <div className={styles.title_wrapper}>
            <h3 className={styles.title}>오늘 9/21(수) 출발 예정</h3>
            <button
              className={styles.info_icon_button}
              onClick={infoIconClickHandler}
            >
              <img src={infoIcon} alt="추가 정보를 확인" />
            </button>
            {/* 모달 */}
            <Modal
              styles={styles}
              isClickModalIcon={isClickModalIcon}
              setIsClickModalIcon={setIsClickModalIcon}
            />
          </div>

          <div
            className={`${styles.delivery_wrapper} ${
              isClickCloseDelivery ? styles.close_delivery : ""
            }`}
          >
            <div className={styles.delivery_title_wrapper}>
              <p>9/23(금)까지 도착 확률86%</p>
              <button
                className={styles.delivery_info_More_button}
                onClick={moreDeliveryInfoClickHandler}
              >
                접기
              </button>
            </div>

            <div className={styles.delivery_info_more_wrapper}>
              <ul className={styles.delivery_info_more_content}>
                {deliveryData.map((data, index) => (
                  <li
                    className={`${styles.delivery_info} ${
                      index === 1 ? styles.blueActive : ""
                    }`}
                    key={index}
                  >
                    <span>{data.title}</span>
                    <Graph percent={data.percent} blueActive={index === 1} />
                    <span>{data.percent}%</span>
                  </li>
                ))}
              </ul>
              <div className={styles.delivery_info_sub_text}>
                배송 분석 시스템으로 예측되었습니다.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Test2Main;
