import React from "react";
import ImgSlide from "../../../components/swiper/ImgSlide";
/** banner: 
    {
      highlights: "프레쉬",
      title: ["클럽 고객은", "매일 15% 할인"],
      subtitle: "클럽 첫 구매시 50% 할인",
    },
  
 * 
 * @param {*} param0 
 * @returns 
 */
function MainTop({ styles, data }) {
  if (!data) {
    return <div>데이터가 없습니다...</div>;
  }

  return (
    <section className={styles.main_top_section}>
      <div className="inner">
        <div className={styles.Main_top_title}>
          <h1>{data.h1}</h1>
          <a>바로가기</a>
        </div>
        {/* slide 배너 */}
        <div className={styles.main_banner}>
          <div className={styles.text_overlay}>
            <p className={styles.smile}>
              스마일<span>{data?.banner?.highlights}</span>
            </p>
            <div className={styles.banner_title}>
              <p>{data?.banner?.title[0]}</p>
              <p>{data?.banner?.title[1]}</p>
            </div>
            <p className={styles.banner_sub_title}>{data?.banner?.subtitle}</p>
          </div>
          <ImgSlide slideImages={data?.slideImages} />
        </div>
      </div>
    </section>
  );
}

export default MainTop;
