"use client";

import images from "@/assets";
import styles from "@/styles/Home.module.css";
import { Select, Space } from "antd";
import Image from "next/image";

const items = [
  {
    value: "mua_nha",
    label: <div className={styles["select-item"]}>Mua nhà</div>,
  },
  {
    value: "mua_dat",
    label: <div>Mua đất</div>,
  },
];

const Banner = () => {
  return (
    <div className={styles["banner-wrapper"]}>
      <div className={styles["banner-container"]}>
        <p>An tâm với 100% bất động sản được xác thực tại KANGNAM</p>
        <h2>Lựa chọn căn nhà ưng ý của bạn</h2>

        {/* search */}
        <div className={styles.search}>
          <div className={styles.dropdown}>
            <Space wrap>
              <Select
                defaultValue="mua_nha"
                // onChange={handleChange}
                options={items}
                bordered={false}
                suffixIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M16.3768 8.00237L15.3744 7L10.1884 12.1825L5.00237 7L4 8.00237L10.1884 14.1943L16.3768 8.00237Z"
                      fill="#D6A279"
                    />
                  </svg>
                }
              />
            </Space>
          </div>

          <input
            className={styles["input-search"]}
            placeholder="Nhập địa điểm cần tìm kiếm..."
          />
          <span className={styles["btn-map"]}>
            <span>Bản đồ</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
            >
              <path
                d="M9.50145 9.80328C9.88292 9.80328 10.2089 9.66745 10.4794 9.39579C10.7499 9.12415 10.8851 8.79758 10.8851 8.41611C10.8851 8.03464 10.7493 7.70866 10.4776 7.43818C10.206 7.16769 9.87941 7.03245 9.49793 7.03245C9.11647 7.03245 8.79049 7.16828 8.52001 7.43994C8.24952 7.71159 8.11428 8.03815 8.11428 8.41963C8.11428 8.80109 8.25011 9.12707 8.52177 9.39755C8.79341 9.66804 9.11998 9.80328 9.50145 9.80328ZM9.49969 16.3543C11.2546 14.7578 12.5509 13.3097 13.3888 12.0101C14.2266 10.7104 14.6455 9.56578 14.6455 8.5762C14.6455 7.02203 14.1488 5.74945 13.1554 4.75849C12.1619 3.76752 10.9434 3.27203 9.49969 3.27203C8.056 3.27203 6.83744 3.76752 5.84401 4.75849C4.85058 5.74945 4.35386 7.02203 4.35386 8.5762C4.35386 9.56578 4.78268 10.7104 5.64032 12.0101C6.49796 13.3097 7.78441 14.7578 9.49969 16.3543ZM9.49969 17.9179C7.37539 16.1102 5.78875 14.4312 4.7398 12.8809C3.69084 11.3305 3.16636 9.89564 3.16636 8.5762C3.16636 6.59703 3.80299 5.0203 5.07625 3.84599C6.34952 2.67169 7.824 2.08453 9.49969 2.08453C11.1754 2.08453 12.6499 2.67169 13.9231 3.84599C15.1964 5.0203 15.833 6.59703 15.833 8.5762C15.833 9.89564 15.3085 11.3305 14.2596 12.8809C13.2106 14.4312 11.624 16.1102 9.49969 17.9179Z"
                fill="white"
              />
            </svg>
          </span>
        </div>

        {/* suggest */}
        <div className={styles.suggestion}>
          <span>Gợi ý:</span>
          <ul>
            <li>vinhomes central park</li>
            <li>vinhomes central park</li>
            <li>vinhomes central park</li>
          </ul>
        </div>

        {/* Filter */}

        <ul className={styles.tags}>
          <li>
            <Image src={images.factory} alt="" /> Phân xưởng
          </li>
          <li>
            <Image src={images.apart} alt="" />
            Chung cư
          </li>
          <li>
            <Image src={images.villa} alt="" />
            Biệt thự
          </li>
          <li>
            <Image src={images.home} alt="" />
            Nhà mặt phố
          </li>
          <li>
            <Image src={images.map} alt="" />
            Đất nền
          </li>
        </ul>
      </div>
      <div className={styles["sub-logo"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={375}
          height={524}
          viewBox="0 0 375 524"
          fill="none"
        >
          <g style={{ mixBlendMode: "color-dodge" }}>
            <path
              d="M306.965 206.162V135.424L252.67 97.1875H253.632V46.5754L187.504 0L121.376 46.5754V97.1875H122.338L68.0431 135.424V206.162L0 254.08V523.975L100.091 523.992V513.233V502.474V383.536L132.844 406.604V523.992H170.066V197.168L132.844 223.394V380.221L102.098 358.562L100.091 357.153V246.454L62.869 272.68V357.343L80.257 369.586L62.869 378.356V502.482H21.733V265.179L89.5937 217.385H89.7761V217.252L187.496 148.43L285.216 217.252V217.385H285.398L353.259 265.179V502.474H312.123V378.356L294.735 369.586L312.123 357.343V272.68L274.9 246.454V357.153L272.894 358.562L242.148 380.221V223.394L204.925 197.168V524H242.148V406.612L274.9 383.544V502.482V523.992L375 523.975V254.08L306.957 206.153L306.965 206.162ZM143.118 57.6659L187.504 26.4085L231.891 57.6659V82.5575L187.504 51.2918L143.118 82.5575V57.6659ZM187.504 122.029L89.7844 190.852V146.515L187.504 77.692L285.224 146.515V190.852L187.504 122.029Z"
              fill="url(#paint0_linear_1195_1706)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1195_1706"
              x1="187.5"
              y1={0}
              x2="187.5"
              y2={524}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6A279" />
              <stop
                offset="0.713542"
                stopColor="#D6A279"
                stopOpacity="0.369792"
              />
              <stop offset={1} stopColor="#D6A279" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={styles["btn-down"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path d="M1 1L12 12L23 1" stroke="white" strokeWidth="2" />
          <path d="M1 12L12 23L23 12" stroke="white" strokeWidth="2" />
        </svg>
        <div>Cuộn xuống</div>
      </div>
    </div>
  );
};

export default Banner;
