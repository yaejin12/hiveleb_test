import React, { useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import linkIcon from "../../../../assets/img/link-icon.svg";
import Products from "./Products";

/**
 * @returns 상품 리스트들
 */
function MainBottom({ styles, data }) {
  // 탭 클릭한 번호 상태관리
  const [tabActive, setTabActive] = useState(0);
  const [productList, setProductList] = useState([]);

  // 탭 클릭 이벤트
  const ButtonClickHandler = (index) => {
    setTabActive(index); // 활성화된 탭 인덱스 변경
    setProductList(data.tabs[index].products); //클릭한 해당 제품들 불러오기
  };

  useEffect(() => {
    if (data?.tabs?.[0]?.products) {
      setProductList(data.tabs[0].products);
    }
  }, [data]);

  return (
    <section className={styles.main_bottom_section}>
      <div className="inner">
        {/* tab  */}
        <div className={styles.product_tabs}>
          {data.tabs &&
            data.tabs.map((tab, index) => (
              <div className={styles.tab} key={tab.text}>
                <Button
                  text={tab.text}
                  ButtonClickHandler={() => ButtonClickHandler(index)}
                  active={tabActive === index}
                  role="tab"
                  aria-selected={tabActive === index}
                />
              </div>
            ))}
        </div>
        {productList && <Products productList={productList} styles={styles} />}
        <Button styleType={"more"} text={` 상품 더보기`} icon={linkIcon} />
      </div>
    </section>
  );
}

export default MainBottom;
