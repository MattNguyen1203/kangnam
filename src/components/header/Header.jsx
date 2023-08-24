"use client";

import styles from "@/styles/Header.module.css";
import Image from "next/image";
import images from "@/assets";
import Link from "next/link";
import SelectLanguage from "./SelectLanguage";
import { useEffect, useRef, useState } from "react";

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
  const [scrollUp, setScrollUp] = useState(false);
  let lastScrollPosition = useRef(0);

  useEffect(() => {
    const checkScrollPosition = () => {
      let currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (
        currentScrollPosition < lastScrollPosition.current &&
        currentScrollPosition !== 0
      ) {
        setScrollUp(true);
        lastScrollPosition.current = currentScrollPosition;
      } else {
        setScrollUp(false);
        lastScrollPosition.current = currentScrollPosition;
      }
    };

    window.addEventListener("scroll", checkScrollPosition);

    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <div
      className={styles.wrapper}
      style={
        scrollUp
          ? {
              position: "fixed",
              background: "rgba(0, 0, 0, 0.2)",
            }
          : {}
      }
    >
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

          <SelectLanguage />
        </div>
      </div>
    </div>
  );
};

export default Header;
