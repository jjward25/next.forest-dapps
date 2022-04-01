import styles from "../styles/Dappstore.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard(props) {
  function setID(props) {
    if (typeof window !== "undefined") {
      localStorage.clear();
      localStorage.setItem("projectID", JSON.stringify(props));
      console.log(localStorage.getItem("projectID"));
    }
  }

  return (
    <Link href="/projectpage" passHref className={styles["projectcard"]}>
      <div className={styles["card-body"]}>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "15px",
          }}
        >
          <Image src={props.dapp.Logo} alt="Logo" width="140px" height="70px" />
        </div>
        <div className={styles["project-title"]}>{props.dapp.Project}</div>
        <div className={styles["meta-title"]}>Focus</div>
        <div className={styles["project-detail"]}>{props.dapp.Focus}</div>
      </div>
    </Link>
  );
}
