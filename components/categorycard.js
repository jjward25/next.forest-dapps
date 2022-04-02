import styles from "./Categorycard.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function CategoryCard(props) {
  function setID(props) {
    if (typeof window !== "undefined") {
      localStorage.clear();
      localStorage.setItem("projectID", JSON.stringify(props));
      console.log(localStorage.getItem("projectID"));
    }
  }
  return (
    <div className={styles["card"]}>
      <div className={styles["content"]}>
        <div className={styles["front"]}>
          <Image src={props.dapp.Logo} alt="Logo" width="140px" height="70px" />
        </div>
        <div className={styles["project-title"]}>{props.dapp.Project}</div>
        <div className={styles["meta-title"]}>Focus</div>
        <div className={styles["project-detail"]}>{props.dapp.Focus}</div>
      </div>
      <div className={styles["back"]}>
        <Link href="/projectpage" passHref className={styles["projectcard"]}>
          <div className={styles["project-detail"]}>{props.dapp.Focus}</div>
        </Link>
      </div>
    </div>
  );
}
