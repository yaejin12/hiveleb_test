import React from "react";
import closeIcon from "../../../assets/img/xmark-solid.svg";

/**
 * 
 * @param isClickModalIcon 모달을 클릭했는지 상태
 * @param setIsClickModalIcon 모달을 클릭했는지 상태변경
 * @returns 
 */
function Modal({ styles, isClickModalIcon, setIsClickModalIcon }) {
  const modalCloseClickHandler = () => {
    setIsClickModalIcon(false);
  };
  return (
    <section
      className={`${styles.modal_section} ${
        isClickModalIcon ? styles.view_modal : ""
      }`}
    >
      <div className={styles.modal_top}>
        <h2>배송안내</h2>
        <button
          className={styles.modal_close_button}
          onClick={modalCloseClickHandler}
        >
          <img src={closeIcon} alt="모달창 닫기" />
        </button>
      </div>
      <ul className={styles.modal_bottom}>
        <li>
          출발일과 도착일은 판매자, 택배사, 기상상황 등에 따라 달라질 수
          있습니다.
        </li>

        <li>
          판매자 사정 또는 여러 상품을 함깨 주문한 경우 출발 예정일이나 배송사가
          변동 될 수 있습니다.
        </li>
      </ul>
    </section>
  );
}

export default Modal;
