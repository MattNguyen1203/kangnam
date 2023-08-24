"use client";

import { Select, Space } from "antd";
import Image from "next/image";
import styles from "@/styles/Header.module.css";
import { CaretDownOutlined } from "@ant-design/icons";
import images from "@/assets";

const items = [
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
];

export default function SelectLanguage() {
  const handleChange = (value) => {
    // console.log(`selected ${value}`);
  };
  return (
    <Space wrap>
      <Select
        defaultValue="korea"
        onChange={handleChange}
        className={styles.dropdown}
        suffixIcon={<CaretDownOutlined />}
        options={items}
        bordered={false}
        popupClassName={styles["pop-up"]}
      />
    </Space>
  );
}
