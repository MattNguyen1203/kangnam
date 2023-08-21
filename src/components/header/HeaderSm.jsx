"use client";

import { svgs } from "@/assets/svg";
import styles from "@/styles/Header.module.css";
import { useState } from "react";
import Nav from "./Nav";

const HeaderSm = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.wrapper}>
      {svgs.logoMobile}
      <div className={styles.bars} onClick={showDrawer}>
        {svgs.bar}
        {svgs.bar}
        {svgs.bar}
      </div>

      <Nav onClose={onClose} open={open} />
    </div>
  );
};

export default HeaderSm;
