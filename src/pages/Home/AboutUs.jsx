"use client";

import images from "@/assets";
import styles from "@/styles/Home.module.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRef } from "react";

const AboutUs = ({ aboutUsRef }) => {
  return (
    <div className={styles["about-wrapper"]} ref={aboutUsRef}>
      <div className={styles["about-container"]}>
        <span>Câu chuyện thương hiệu</span>
        <h2>Chúng tôi là ai</h2>
        <p>
          Công ty Cổ phần bất động sản Kangnam là đơn vị môi giới bất động sản
          chuyên nghiệp, chuyên phân phối đa dạng các phân khúc bất động sản
          trải dài khắp miền Bắc và miền Trung với đội ngũ chuyên viên môi giới
          giày dạn kinh nghiệm được đào tạo bài bản
        </p>

        <div className={styles.slogan}>
          <div className={styles["slogan-item"]}>
            <Image src={images.slogan1} alt="" />
            <span>Cam kết xác thực</span>
          </div>
          <div className={styles["slogan-item"]}>
            <Image src={images.slogan2} alt="" />
            <span>Trọn hỗ trợ, chi phí thấp</span>
          </div>
          <div className={styles["slogan-item"]}>
            <Image src={images.slogan3} alt="" />
            <span>Thủ tục nhanh chóng</span>
          </div>
        </div>
        <div className={styles["about-btn"]}>
          <button>
            Xem dự án <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <button>
            Về chúng tôi <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <div className={styles["about-img"]}>
        <Image src={images.about1} alt="" />
        <Image src={images.about2} alt="" />
        <Image src={images.about3} alt="" />
        <Image src={images.about4} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
