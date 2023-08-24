import images from "@/assets";
import styles from "@/styles/Features.module.css";
import Image from "next/image";

const icons = [images.feature, images.feature, images.feature, images.feature];
const Features = () => {
  return (
    <div className={styles["features-wrapper"]}>
      {icons.map((icon, index) => {
        return (
          <div key={index}>
            <Image src={icon} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Features;
