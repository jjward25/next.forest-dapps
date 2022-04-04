import styles from "./Menubar.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Menubar() {
  return (
    <div className={styles["menubar"]}>
      <div className={styles["menubar-container"]}>
        <div className={styles["menubar-img-overlay"]}>
          <div className={styles["menubar-img-wrap"]}>
            <Image
              src="/the-forest.png"
              alt="the-forest"
              title={`the-forest`}
              layout="fill"
            />
          </div>
        </div>

        <Link href="/" passHref>
          <div className={styles["logo-wrap"]}>
            <Image
              src="/logo-nobg.png"
              alt="the-forest"
              title={`the-forest`}
              layout="fill"
            />
          </div>
        </Link>

        <div className={styles["menu-button-wrap"]}>
          <Link href="/dappstore" passHref className={styles["menu-button"]}>
            <div className={styles["menu-button"]}> Apps</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
