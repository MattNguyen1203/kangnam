"use client";

import styles from "@/styles/Header.module.css";
import Image from "next/image";
import images from "@/assets";
import { Select, Space } from "antd";
import Link from "next/link";
import { CaretDownOutlined } from "@ant-design/icons";

const navList = [
  {
    title: "Về chúng tôi",
    href: "",
  },
  {
    title: "Dự án",
    href: "",
  },
  {
    title: "Bán lại",
    href: "",
  },
  {
    title: "Thỏa thuận & Pháp lý",
    href: "",
  },
  {
    title: "Tin tức",
    href: "",
  },
  {
    title: "Liên hệ",
    href: "",
  },
];
const Header = () => {
  const handleChange = (value) => {
    // console.log(`selected ${value}`);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Image src={images.logo} alt="" />
      </div>
      <div className={styles["nav-container"]}>
        <div className={styles.routing}>
          {navList.map((item, index) => (
            <Link href={item.href} key={index}>
              {item.title}
            </Link>
          ))}
        </div>
        <button className={styles.btn}>Ký gửi BĐS</button>
        <div className={styles.language}>
          <div className={styles.title}>Chọn ngôn ngữ</div>
          <Space wrap>
            <Select
              defaultValue="korea"
              onChange={handleChange}
              className={styles.dropdown}
              suffixIcon={<CaretDownOutlined />}
              options={[
                {
                  value: "korea",
                  label: (
                    <div className={styles["dropdown-item"]}>
                      <Image src={images.korea} alt="" />
                      <span>Korea</span>
                    </div>
                  ),
                },
                {
                  value: "vietnam",
                  label: (
                    <div className={styles["dropdown-item"]}>
                      <Image src={images.korea} alt="" />
                      <span>Korea</span>
                    </div>
                  ),
                },
              ]}
            />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Header;
