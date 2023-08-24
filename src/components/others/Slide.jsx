"use client";

import images from "@/assets";
import styles from "@/styles/Home.module.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

// locations data for progress bar
const locations = [
  {
    key: 0,
    label: "01. Khu vực Bắc Từ Liêm, Hà Nội",
    url: images.suggestionHP,
  },

  {
    key: 1,
    label: "02. Khu vực Thanh Xuân, Hà Nội",
    url: images.aboutBG,
  },
  {
    key: 2,
    label: "03. Khu vực Hà Đông, Hà Nội ",
    url: images.building,
  },
  {
    key: 3,
    label: "04. Khu vực Đống Đa, Hà Nội ",
    url: images.about2,
  },
];
export default function Slide() {
  const [locationActive, setLocationActive] = useState(0);
  const [progressVal, setProgressVal] = useState(0);
  // progress bar
  useEffect(() => {
    const running = setTimeout(() => {
      setProgressVal((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30);
    if (progressVal === 100) {
      setLocationActive((prev) => (prev === 3 ? 0 : prev + 1));
      setProgressVal(0);
    }
    return () => clearTimeout(running);
  }, [locationActive, progressVal]);

  return (
    <section className={styles["suggestion-wrapper"]}>
      {/* <div className={styles["slide-container"]}></div> */}
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
              <>
                <Image
                  src={location.url}
                  alt=""
                  className={`${styles["suggestion-img"]} ${
                    locationActive === location.key ? styles["active-img"] : ""
                  }`}
                />

                <div
                  className={styles["location"]}
                  key={location.key}
                  onClick={() => {
                    setLocationActive(location.key);
                    setProgressVal(0);
                  }}
                >
                  <progress
                    value={location.key === locationActive ? progressVal : 0}
                    max={100}
                    className={styles["progress"]}
                  ></progress>
                  <div>{location.label}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
