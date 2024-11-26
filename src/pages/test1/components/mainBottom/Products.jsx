import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Products({ productList, styles }) {
  const location = useLocation();

  return (
    <ul className={styles.products_list_wrapper}>
      {productList?.map((product) => (
        <li className={styles.product_wrapper} key={product.title}>
          <div className={styles.product_img}>
            <img src={product.img} alt={`${product.title} 이미지`}></img>
          </div>
          {/* 오른쪽 상품 상세 정보 */}
          <div className={styles.product_content}>
            {/* badge */}
            {product.badge && (
              <div
                className={`${styles.product_badge} ${
                  location.pathname === "/2" ? styles.blue_product_badge : ""
                }`}
              >
                {product.badge}
              </div>
            )}
            {/* Title */}
            <p className={styles.product_title}>
              <span className={styles.product_brand}>{product.brand}</span>
              {product.title}
            </p>
            {/* Price */}
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
