import styles from "../styles/Dappstore.module.scss";
import MenuBar from "../components/menubar";
import Carousel from "../components/carousel";
import contentMap from "../public/contentMap.json";

function DappCategories() {
  console.log(contentMap);
  function setID(props) {
    if (typeof window !== "undefined") {
      localStorage.clear();
      //console.log("Clear Console: ", localStorage.getItem("projectID"));
      localStorage.setItem("projectID", JSON.stringify(props));
      console.log("LocalStorage: ", localStorage.getItem("projectID"));
    }
  }

  return (
    <div className={styles["container"]}>
      <head>
        <title>The Forest</title>
        <meta name="description" content="Blockchain Education for Everyone" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <main className={styles["dapp-categories-wrap"]}>
        <MenuBar />
        <div className={styles["dapp-store-wrap"]}>
          <div className={styles["disclaimer-full"]}>
            DISCLAIMER: SOME OF THESE SERVICES ARE NOT LIVE YET, AND ANY MARKET
            OPINIONS POSTED ON THIS SITE DO NOT CONSTITUTE ADVICE.
          </div>
          <div className={styles["carousel-all-wrap"]}>
            {contentMap.map((categoryObj) => {
              return (
                <Carousel Content={categoryObj} key={categoryObj.Category} />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default DappCategories;
