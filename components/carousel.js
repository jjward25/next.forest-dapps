import styles from "./Carousel.module.scss";
import DappCard from "./dappcard";
import { useRef } from "react";
export default function Carousel(props) {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <div className={styles["single-carousel"]}>
      <div className={styles["carousel-header"]}>{props.Content.Category}</div>
      <div className={styles["carousel-description"]}>
        {props.Content.CategoryDescription}
      </div>

      <div className={styles["carousel-wrap"]}>
        <div className={styles["carousel-cards-wrap"]} ref={ref}>
          {props.Content.DappList.map((dapp) => {
            return <DappCard dapp={dapp} key={dapp.Provider} />;
          })}
        </div>
        <button
          className={styles["scroll-button"]}
          onClick={() => scroll(675)}
        >{`>`}</button>
      </div>
    </div>
  );
}
