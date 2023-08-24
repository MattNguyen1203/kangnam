"use client";

import images from "@/assets";
import { svgs } from "@/assets/svg";
import Slide from "@/components/others/Slide";
import { windowSize } from "@/hooks";
import AboutUs from "@/pages/Home/AboutUs";
import Banner from "@/pages/Home/Banner";
import Features from "@/pages/Home/Features";
import styles from "@/styles/Home.module.css";
import { newsData } from "@/utils/configData";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "antd";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const fakeData = [
  {
    content: images.brandLogo,
  },
  {
    content: images.brandLogo,
  },
  {
    content: images.brandLogo,
  },
  {
    content: images.brandLogo,
  },
  {
    content: images.brandLogo,
  },
  {
    content: images.brandLogo,
  },
  {
    content: images.brandLogo,
  },
  {
    content: images.brandLogo,
  },
  {
    content: images.brandLogo,
  },
  {
    content: images.brandLogo,
  },
  {
    content: images.brandLogo,
  },
  {
    content: images.brandLogo,
  },
];
export default function Home() {
  const aboutUsRef = useRef();

  const windowWidth = windowSize().width;
  const isMobile = windowWidth <= 576;
  const [totalSlideItem, setTotalSlideItem] = useState(9);

  useEffect(() => {
    setTotalSlideItem(isMobile ? 9 : 10);
  }, [isMobile]);
  // fake data

  let result = [];
  let draft = [];
  fakeData.forEach((element, index) => {
    if (index === fakeData.length - 1) {
      draft.push(element);
      result.push(draft);
    } else if (index % (totalSlideItem - 1) > 0 || index === 0) {
      draft.push(element);
    } else if (index % (totalSlideItem - 1) === 0) {
      draft.push(element);
      result.push(draft);
      draft = [];
    }
  });

  console.log(result);

  // content-styles

  const contentStyle = {
    color: "black",
    boxShadow: "6px 0px 39.76811599731445px 0px rgba(0, 0, 0, 0.05)",
    borderRadius: "16px",
  };
  return (
    <div className={styles.wrapper}>
      <Features />
      <section className={styles.header}>
        <Banner aboutUsRef={aboutUsRef} />
        <AboutUs aboutUsRef={aboutUsRef} />
      </section>

      <Slide />

      <section className={styles["news-wrapper"]}>
        <div className={styles["partner-container"]}>
          <header className={styles["news-header"]}>
            <div className={styles["title"]}>
              <div>Tổng hợp các dự án</div>
              <h2>Đối tác của chúng tôi</h2>
            </div>
            {!isMobile && (
              <button>
                Trở thành đối tác <FontAwesomeIcon icon={faAngleRight} />
              </button>
            )}
          </header>
          <main className={styles["partner-main"]}>
            <Carousel draggable dots={false}>
              {result.map((group, index) => {
                return (
                  <div className={styles.group} key={index}>
                    {group.map((item, index) => {
                      const groupLength = group.length;
                      return (
                        <div key={index}>
                          <Image src={item.content} alt="" />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </Carousel>
          </main>
          {isMobile && (
            <button>
              Trở thành đối tác <FontAwesomeIcon icon={faAngleRight} />
            </button>
          )}
        </div>
        <div className={styles["news-container"]}>
          <header className={styles["news-header"]}>
            <div className={styles["title"]}>
              <div>Tổng hợp các dự án</div>
              <h2>Tin tức mới nhất</h2>
            </div>
            {!isMobile && (
              <button>
                Xem tất cả <FontAwesomeIcon icon={faAngleRight} />
              </button>
            )}
          </header>
          <div
            className="grid grid-rows-2 grid-cols-3 gap-6 sm:grid-rows-2 sm:grid-cols-1"
            style={{
              width: "100%",
              height: "fit-content",
            }}
          >
            {newsData.map((item, index) => {
              if (index === 0) {
                {
                  /*first-item*/
                }
                return (
                  <div
                    key={index}
                    className={`row-span-2 col-span-2 sm:col-span-1 ${styles["big-item"]}`}
                  >
                    <figure>
                      <Image
                        src={item.img}
                        alt=""
                        className={styles["content-img"]}
                      />
                    </figure>
                    <div>
                      <div className={styles["news-footer"]}>
                        <button>{item.tag}</button>
                        <div>
                          {svgs.calendar}
                          {item.time}
                        </div>
                      </div>

                      <div className={styles["news-content"]}>
                        <div className={styles["content-pg"]}>
                          <div className={styles["pg-title"]}>{item.title}</div>

                          <div className={styles["pg-main"]}>
                            {item.content}
                          </div>
                        </div>
                      </div>

                      <button>
                        Chi tiết <FontAwesomeIcon icon={faAngleRight} />
                      </button>
                    </div>
                  </div>
                );
              } else if (index > 0) {
                {
                  /* others-item */
                }

                if ((isMobile && index < 3) || !isMobile) {
                  return (
                    <div
                      className="col-span-1 p-6 flex flex-col justify-between"
                      style={contentStyle}
                      key={index}
                    >
                      <div className={styles["news-content"]}>
                        <figure>
                          <Image
                            src={item.img}
                            alt=""
                            className={styles["content-img"]}
                          />
                        </figure>
                        <div className={styles["content-pg"]}>
                          <div className={styles["pg-title"]}>{item.title}</div>

                          <div className={styles["pg-main"]}>
                            {item.content}
                          </div>
                        </div>
                      </div>

                      <div className={styles["news-footer"]}>
                        <button>{item.tag}</button>
                        <div>
                          {svgs.calendar}
                          {item.time}
                        </div>
                      </div>
                    </div>
                  );
                }
              }
            })}
          </div>

          {isMobile && (
            <button>
              Xem tất cả <FontAwesomeIcon icon={faAngleRight} />
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
