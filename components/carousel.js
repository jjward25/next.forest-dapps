import styles from "./Carousel.module.scss";
import DappCard from "./dappcard";
export default function Carousel(props) {
  return (
    <div className={styles["single-carousel"]}>
      <div className={styles["carousel-header"]}>{props.Content.Category}</div>

      <div className={styles["carousel-cards-wrap"]}>
        {props.Content.DappList.map((dapp) => {
          return <DappCard dapp={dapp} key={dapp.Provider} />;
        })}
      </div>
    </div>
  );
}
