"use client";

import images from "@/assets";
import AboutUs from "@/pages/Home/AboutUs";
import Banner from "@/pages/Home/Banner";
import styles from "@/styles/Home.module.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select, Space } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

const locations = [
  {
    key: 1,
    label: "01. Khu vực Bắc Từ Liêm, Hà Nội",
  },

  {
    key: 2,
    label: "02. Khu vực Thanh Xuân, Hà Nội",
  },
  {
    key: 3,
    label: "03. Khu vực Hà Đông, Hà Nội ",
  },
  {
    key: 4,
    label: "04. Khu vực Đống Đa, Hà Nội ",
  },
];
export default function Home() {
  const [locationActive, setLocationActive] = useState(1);
  const [progressVal, setProgressVal] = useState(0);

  useEffect(() => {
    const running = setTimeout(() => {
      setProgressVal((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30);
    if (progressVal === 100) {
      setLocationActive((prev) => (prev === 4 ? 1 : prev + 1));
      setProgressVal(0);
    }
    return () => clearTimeout(running);
  }, [locationActive, progressVal]);

  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <Banner />
        <AboutUs />
      </section>

      <section className={styles["suggestion-wrapper"]}>
        <div className={styles["suggestion-container"]}>
          <div className={styles["suggestion-content"]}>
            <h2>Nổi bật theo khu vực</h2>
            <div>Căn hộ Vinhomes Grand Park hướng Bắc</div>
            <button>
              Chi tiết dự án <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
          <div className={styles["suggestion-locations"]}>
            {locations.map((location) => {
              return (
                <div
                  className={styles["location"]}
                  key={location.key}
                  onClick={() => {
                    setLocationActive(location.key);
                    setProgressVal(0);
                  }}
                >
                  {/* <div className={styles["progress"]}></div> */}

                  <progress
                    value={location.key === locationActive ? progressVal : 0}
                    max={100}
                    className={styles["progress"]}
                  ></progress>
                  <div>{location.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles["partner-wrapper"]}></section>
    </div>
  );
}
