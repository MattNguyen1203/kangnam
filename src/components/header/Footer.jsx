"use client";

import styles from "@/styles/Header.module.css";
import Image from "next/image";
import images from "@/assets";
import { svgs } from "@/assets/svg";

const icons = [
  {
    url: images.icon1,
  },
  {
    url: images.icon2,
  },
  {
    url: images.icon3,
  },
  {
    url: images.icon4,
  },
  {
    url: images.icon5,
  },
  {
    url: images.icon6,
  },
];
const Footer = () => {
  return (
    <div className={styles["footer-wrapper"]}>
      <div className={styles["footer-container"]}>
        <div className={styles["logo-container"]}>
          <Image src={images.footerLogo} alt="" />
          <div className={styles["icon-container"]}>
            {icons.map((icon, index) => {
              return <Image src={icon.url} alt="" key={index} />;
            })}
          </div>
        </div>
        <div className={styles["contact-container"]}>
          <div className={styles["footer-title"]}>Liên hệ</div>
          <div className={styles.content}>
            <div className={styles["content-item"]}>
              {svgs.locationIcon}
              <span>
                Villa e11, The Manor, KĐT mới Mỹ Đình - Mễ Trì, Nam từ Liêm, Hà
                Nội
              </span>
            </div>

            <div className={styles["content-item"]}>
              {svgs.phoneIcon}
              <span>0637 858 974</span>
            </div>

            <div className={styles["content-item"]}>
              {svgs.phoneIcon}
              <span>0637 858 974</span>
            </div>
            <div className={styles["content-item"]}>
              {svgs.phoneIcon}
              <span>0637 858 974</span>
            </div>
          </div>
        </div>
        <div className={styles["routes-container"]}>
          <div className={styles["footer-title"]}>Điều hướng chung</div>
          <div className={styles.content}>
            <div className={styles["content-item"]}>
              <span>Trang chủ</span>
            </div>
            <div className={styles["content-item"]}>
              <span>Về KANGNAM </span>
            </div>
            <div className={styles["content-item"]}>
              <span>Dự án</span>
            </div>
            <div className={styles["content-item"]}>
              <span>Kí gửi nhà đất</span>
            </div>
            <div className={styles["content-item"]}>
              <span>Thỏa thuận & pháp lí</span>
            </div>
            <div className={styles["content-item"]}>
              <span>Tin tức</span>
            </div>
          </div>
        </div>
        <div className={styles["services-container"]}>
          <div className={styles["footer-title"]}>Dịch vụ</div>
          <div className={styles.content}>
            <div className={styles["content-item"]}>
              <span>Dự án mới</span>
            </div>
            <div className={styles["content-item"]}>
              <span>Thiết kế nhà đẹp</span>
            </div>
            <div className={styles["content-item"]}>
              <span>Kí gửi bất động sản</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["footer-sign"]}>
        © 2023 Copyright. Powered by OKHUB Viet Nam
      </div>
    </div>
  );
};

export default Footer;
