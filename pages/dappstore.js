import styles from "../styles/Dappstore.module.scss";
import MenuBar from "../components/menubar";
import ProjectCard from "../components/projectcard";
import dapps from "../public/dapps.json";
import Link from "next/link";
import Image from "next/image";

function DappCategories() {
  function setID(props) {
    if (typeof window !== "undefined") {
      localStorage.clear();
      console.log("Clear Console: ", localStorage.getItem("projectID"));
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

          <div className={styles["carousel-header"]}>Featured Apps</div>

          <div className="horizontal-wrap" style={{ display: "flex" }}>
            <div className={styles["carousel-wrap"]}>
              {dapps
                .filter((app) => app.Featured === "TRUE")
                .map((dapp) => {
                  return (
                    <div
                      className={styles["projectcard"]}
                      key={dapp.ProjectID}
                      onClick={() => setID(dapp.ProjectID)}
                    >
                      <Link href="/projectpage" passHref>
                        <div className={styles["card-body"]}>
                          <div className={styles["project-logo"]}>
                            <Image
                              src={dapp.Logo}
                              alt="Logo"
                              width="140px"
                              height="70px"
                            />
                          </div>
                          <div className={styles["project-title"]}>
                            {dapp.Project}
                          </div>
                          <div className={styles["meta-title"]}>Category</div>
                          <div className={styles["project-detail"]}>
                            {dapp.Category}
                          </div>
                          <div className={styles["meta-title"]}>Focus</div>
                          <div className={styles["project-detail"]}>
                            {dapp.Focus}
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
            <div
              style={{
                backgroundColor: "lightgrey",
                height: "400px",
                width: "1.5vw",
                zIndex: "2",
                marginLeft: "1vw",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Image
                alt=""
                src="/right-carrot.png"
                height={"227"}
                width={"222"}
              ></Image>
            </div>
          </div>

          <div
            className={styles["carousel-header"]}
          >{`Cloud Computing & Storage`}</div>
          <div className="horizontal-wrap" style={{ display: "flex" }}>
            <div className={styles["carousel-wrap"]}>
              {dapps
                .filter((app) => app.Category === "Cloud Computing & Storage")
                .map((dapp) => {
                  return (
                    <div
                      className={styles["projectcard"]}
                      key={dapp.ProjectID}
                      onClick={() => setID(dapp.ProjectID)}
                    >
                      {" "}
                      <ProjectCard dapp={dapp} />
                    </div>
                  );
                })}
            </div>
            <div
              style={{
                backgroundColor: "lightgrey",
                height: "400px",
                width: "1.5vw",
                zIndex: "2",
                marginLeft: "1vw",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Image
                alt=""
                src="/right-carrot.png"
                height={"227"}
                width={"222"}
              ></Image>
            </div>
          </div>

          <div
            className={styles["carousel-header"]}
          >{`Private Chains / Custom Solutions`}</div>
          <div className="horizontal-wrap" style={{ display: "flex" }}>
            <div className={styles["carousel-wrap"]}>
              {dapps
                .filter(
                  (app) => app.Category === "Private Chains / Custom Solutions"
                )
                .map((dapp) => {
                  return (
                    <div
                      className={styles["projectcard"]}
                      key={dapp.ProjectID}
                      onClick={() => setID(dapp.ProjectID)}
                    >
                      {" "}
                      <ProjectCard dapp={dapp} />
                    </div>
                  );
                })}
            </div>
            <div
              style={{
                backgroundColor: "lightgrey",
                height: "400px",
                width: "1.5vw",
                zIndex: "2",
                marginLeft: "1vw",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Image
                alt=""
                src="/right-carrot.png"
                height={"227"}
                width={"222"}
              ></Image>
            </div>
          </div>

          <div
            className={styles["carousel-header"]}
          >{`Content Management / Media`}</div>
          <div className="horizontal-wrap" style={{ display: "flex" }}>
            <div className={styles["carousel-wrap"]}>
              {dapps
                .filter((app) => app.Category === "Content Management / Media")
                .map((dapp) => {
                  return (
                    <div
                      className={styles["projectcard"]}
                      key={dapp.ProjectID}
                      onClick={() => setID(dapp.ProjectID)}
                    >
                      {" "}
                      <ProjectCard dapp={dapp} />
                    </div>
                  );
                })}
            </div>
            <div
              style={{
                backgroundColor: "lightgrey",
                height: "400px",
                width: "1.5vw",
                zIndex: "2",
                marginLeft: "1vw",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Image
                alt=""
                src="/right-carrot.png"
                height={"227"}
                width={"222"}
              ></Image>
            </div>
          </div>

          <div
            className={styles["carousel-header"]}
          >{`Banking, Custody & Investments`}</div>
          <div className="horizontal-wrap" style={{ display: "flex" }}>
            <div className={styles["carousel-wrap"]}>
              {dapps
                .filter(
                  (app) => app.Category === "Banking, Custody & Investments"
                )
                .map((dapp) => {
                  return (
                    <div
                      className={styles["projectcard"]}
                      key={dapp.ProjectID}
                      onClick={() => setID(dapp.ProjectID)}
                    >
                      {" "}
                      <ProjectCard dapp={dapp} />
                    </div>
                  );
                })}
            </div>
            <div
              style={{
                backgroundColor: "lightgrey",
                height: "400px",
                width: "1.5vw",
                zIndex: "2",
                marginLeft: "1vw",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Image
                alt=""
                src="/right-carrot.png"
                height={"227"}
                width={"222"}
              ></Image>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DappCategories;
