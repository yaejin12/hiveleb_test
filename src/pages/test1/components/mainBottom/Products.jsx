import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
/**
 * @returns productList 배열을 받아 각 상품을 렌더링합니다.
 * 하나의 상품 리스트를 렌더링
 */
function Products({ productList, styles }) {
  const location = useLocation();

  return (
    <ul className={styles.products_list_wrapper}>
      {productList?.map((product) => (
        <li className={styles.product_wrapper} key={product.title}>
          {/* 상품 이미지 */}
          <div className={styles.product_img}>
            <img src={product.img} alt={`${product.title} 이미지`}></img>
          </div>
          {/* 상품 상세 정보 */}
          <div className={styles.product_content}>
            {/* 뱃지 (badge) */}
            {product.badge && (
              <div
                className={`${styles.product_badge} ${
                  location.pathname === "/2" ? styles.blue_product_badge : ""
                }`}
              >
                {product.badge}
              </div>
            )}
            {/* 상품 제목 및 브랜드 */}
            <p className={styles.product_title}>
              <span className={styles.product_brand}>{product.brand}</span>
              {product.title}
            </p>
            {/* 상품 가격 */}
            <p className={styles.product_price}>
              {product.price}
              <span>원</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Products;
