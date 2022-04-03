import styles from "./Dappcard.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function DappCard(props) {
  function setID(props) {
    if (typeof window !== "undefined") {
      localStorage.clear();
      localStorage.setItem("projectID", JSON.stringify(props));
      //console.log(localStorage.getItem("projectID"));
    }
  }
  return (
    <div className={styles["card"]}>
      <div className={styles["content"]}>
        <div className={styles["front"]}>
          <div className={styles["project-title"]}>{props.dapp.Provider}</div>
          <div className={styles["project-logo"]}>
            <Image src={props.dapp.AppLogo} alt="Logo" layout="fill" />
          </div>
          <div className={styles["project-tags-wrap"]}>
            {props.dapp.Tags.map((tag) => {
              return (
                <div className={styles["project-tags"]} key={tag}>
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles["back"]}>
          <div className={styles["project-detail"]}>
            {props.dapp.AppDescription}
          </div>

          <div
            className={styles["project-link"]}
            onClick={() => setID(props.dapp.Provider)}
          >
            <Link href="/projectpage" passHref>
              Project Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
