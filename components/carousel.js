import styles from "./Carousel.module.scss";
import CategoryCard from "./categorycard";
export default function Carousel() {
  return (
    <div>
      <div className={styles["carousel-header"]}>Featured Apps</div>
      <div className={styles["horizontal-wrap"]} style={{ display: "flex" }}>
        <div className={styles["carousel-cards-wrap"]}>
          <CategoryCard />
        </div>
      </div>
    </div>
  );
}
