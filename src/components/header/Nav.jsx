import styles from "@/styles/Header.module.css";
import images from "@/assets";
import { Drawer, Select, Space } from "antd";
import Image from "next/image";
import { svgs } from "@/assets/svg";
import SelectLanguage from "./SelectLanguage";

const items = [
  {
    value: "biet_thu",
    label: <div>Biệt thự</div>,
  },
  {
    value: "nha_vuon",
    label: <div>Nhà vườn</div>,
  },
];
const Nav = ({ onClose, open }) => {
  return (
    <Drawer
      title={
        <header className={styles["nav-header"]}>
          <Image src={images.navLogo} alt="" />
          <div className={styles["nav-header-input"]}>
            <div className={styles["nav-header-dropdown"]}>
              <Space>
                <Select
                  defaultValue="biet_thu"
                  // onChange={handleChange}
                  options={items}
                  bordered={false}
                  suffixIcon={svgs.navDropdownIcon}
                  placement="bottomLeft"
                />
              </Space>
            </div>
            <div className={styles["input"]}>
              {svgs.navInputIcon}
              <input
                type="text"
                placeholder=""
                defaultValue={"Thành Phố Hà Nội"}
              />
            </div>
          </div>
          <span onClick={() => onClose()}>{svgs.navCloseIcon}</span>
        </header>
      }
      onClose={onClose}
      open={open}
      closeIcon={false}
      style={{ background: "#D6A279", color: "white" }}
      headerStyle={{
        padding: "10px",
        borderBottom: "1px solid rgb(255, 255, 255, 0.1)",
      }}
      bodyStyle={{ padding: "10px" }}
      className={styles["nav-wrapper"]}
    >
      <div className={styles["nav-list"]}>
        <div>Trang chủ</div>
        <div>Dự án</div>
        <div>Bán lại</div>
        <div>Thỏa thuận & Pháp lí</div>
      </div>

      <div className={styles["nav-sub-list"]}>
        <div className={styles["sub-list-item"]}>Về Kangnam</div>
        <div className={styles["sub-list-item"]}>Tin tức</div>
        <div className={styles["sub-list-item"]}>Liên hệ</div>
        <SelectLanguage />
      </div>

      <div className={styles["nav-info"]}>
        <div className={styles["nav-info-item"]}>
          <div>Email:</div>
          <span>kangnam@gmail.com.vn</span>
        </div>

        <div className={styles["nav-info-item"]}>
          <div>Địa chỉ:</div>
          <span>
            Villa E11, The Manor, kdt mới Mỹ Đình - Mễ Trì, Nam Từ Liêm, Hà Nội.
          </span>
        </div>
        <div className={styles["nav-info-item"]}>
          <div>Hotline:</div>
          <span>(+84) 254 3526981</span>
        </div>
      </div>
      <button className={styles["nav-btn"]}>Kí gửi nhà đất</button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={219}
        height={308}
        viewBox="0 0 219 308"
        fill="none"
        style={{ position: "absolute", top: "30%", right: "0" }}
      >
        <g style={{ mixBlendMode: "color-dodge" }} opacity="0.08">
          <path
            d="M179.268 121.179V79.6005L147.559 57.1255H148.121V27.3764L109.502 0L70.8839 27.3764V57.1255H71.4456L39.7372 79.6005V121.179L0 149.345V307.985L58.4533 307.995V301.671V295.347V225.437L77.581 238.996V307.995H99.3187V115.893L77.581 131.308V223.488L59.6251 210.758L58.4533 209.929V144.862L36.7155 160.278V210.041L46.8701 217.238L36.7155 222.392V295.352H12.6921V155.868L52.3227 127.776H52.4293V127.698L109.498 87.2448L166.566 127.698V127.776H166.672L206.303 155.868V295.347H182.28V222.392L172.125 217.238L182.28 210.041V160.278L160.542 144.862V209.929L159.37 210.758L141.414 223.488V131.308L119.676 115.893V308H141.414V239.001L160.542 225.442V295.352V307.995L219 307.985V149.345L179.263 121.174L179.268 121.179ZM83.5808 33.8953L109.502 15.5225L135.424 33.8953V48.5262L109.502 30.1486L83.5808 48.5262V33.8953ZM109.502 71.7272L52.4341 112.18V86.1194L109.502 45.6663L166.571 86.1194V112.18L109.502 71.7272Z"
            fill="url(#paint0_linear_1195_14476)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1195_14476"
            x1="109.5"
            y1={0}
            x2="109.5"
            y2={308}
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
    </Drawer>
  );
};

export default Nav;
