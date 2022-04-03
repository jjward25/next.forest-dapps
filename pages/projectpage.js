import styles from "../styles/Projectpage.module.scss";
import MenuBar from "../components/menubar";

import dapps from "../public/dappList.json";
import Image from "next/image";

function DappPage() {
  let dappid = [];

  if (typeof window !== "undefined") {
    dappid = JSON.parse(localStorage.getItem("projectID"));
  } else {
    dappid = "Provider";
  }
  console.log(dappid);
  let dapp = dapps.filter((dapp) => dapp.Provider === dappid)[0];
  if (dapp === "undefined") {
    dapp = dapps.filter((dapp) => dapp.Provider === 1);
  }
  console.log(dapp);

  return (
    <div className={styles["container"]}>
      <head>
        <title>The Forest</title>
        <meta name="description" content="Blockchain Education for Everyone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <main className={styles["dapp-project-wrap"]}>
        <MenuBar />

        <div className={styles["project-wrap"]}>
          <div className={styles["project-top"]}>
            <div className={styles["project-top-left"]}>
              <div className={styles["project-header"]}>
                <div className={styles["prj-pg-logo-wrap"]}>
                  <Image
                    src={dapp.AppLogo}
                    alt="prj-logo"
                    width="220px"
                    height="110px"
                    layout="fixed"
                  />
                </div>
                <p className={styles["dapp-provider"]}>{dapp.Provider}</p>
              </div>
              <div className={styles["social-bar"]}>
                <Image
                  src="/Github.png"
                  alt="Github"
                  width="30px"
                  height="30px"
                />
                <Image
                  src="/Medium.png"
                  alt="Medium"
                  width="30px"
                  height="30px"
                />
                <Image
                  src="/Twitter.png"
                  alt="twitter"
                  width="30px"
                  height="30px"
                />
                <Image
                  src="/Telegram.png"
                  alt="telegram"
                  width="30px"
                  height="30px"
                />
                <Image
                  src="/Discord.png"
                  alt="discord"
                  width="30px"
                  height="30px"
                />
              </div>
              <div className={styles["audience-wrap"]}>
                <div className={styles["primary-audience"]}>
                  Primary Audience:
                </div>
                <div className={styles["audience-tag"]}>{dapp.Audience}</div>
              </div>
              <div className={styles["actions-btn"]}>+ ACTIONS</div>
            </div>

            <div className={styles["project-top-right"]}>
              <p style={{ fontWeight: "bold", textAlign: "left" }}>
                {dapp.Project}
              </p>
              <p style={{ textAlign: "left" }}>{dapp.AppDescription}</p>
            </div>
          </div>

          <div className={styles["prj-pg-stat-bar"]}>
            <div className={styles["statbar-left"]}>
              <p style={{ margin: "0" }}>
                <strong>Market Cap:</strong> {dapp.MarketCap}
              </p>
              <p style={{ margin: "0" }}>
                <strong>Cap Rank:</strong> {dapp.MarketCapRank} ^
              </p>
              <p style={{ margin: "0" }}>
                <strong>Current Price:</strong> {dapp.Price}
              </p>
              <p style={{ margin: "0" }}>
                <strong>Trading Volume:</strong> 22,767
              </p>
            </div>
            <div className={styles["statbar-left"]}>
              <p style={{ margin: "0" }}>
                <strong>APY: 45%</strong> AVG: 42.4%
              </p>
              <p style={{ margin: "0" }}>
                <strong>MIN. TO STAKE: 10 TOKENS</strong>
              </p>
              <p style={{ margin: "0" }}>
                <strong>TOTAL STAKED: {dapp.TVL}</strong>
              </p>
              <div className={styles["stake-btn"]}>STAKE</div>
            </div>
            <div className={styles["statbar-left2"]}>
              <p style={{ margin: "0" }}>
                <strong>USAGE TRANSACTIONS (24H): 24,332</strong>
              </p>
              <p style={{ margin: "0" }}>
                <strong>ACTIVE USERS (24H): 1,422</strong>
              </p>
              <p style={{ margin: "0" }}>
                <strong>ACTIVE MONTHLY USERS: 8,492</strong>
              </p>
              <div className={styles["demo-btn"]}>DEMO</div>
            </div>
            <div className={styles["statbar-right"]}>
              <p style={{ margin: "0" }}>
                <strong>FOUNDERS:</strong> {dapp.Founders}
              </p>
              <p style={{ margin: "0" }}>
                <strong>INVESTORS:</strong> {dapp.Investors}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <strong style={{ marginRight: "2.5%" }}>TAGS:</strong>

                {dapp.Tags.map((tag) => {
                  <div
                    style={{
                      fontWeight: "bold",
                      width: "auto",
                      padding: "1% 2.5%",
                      border: "1px solid forestgreen",
                      margin: "0 2.5% 2.5% 0",
                      backgroundColor: "forestgreen",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    {tag}
                  </div>;
                })}
              </div>
            </div>
          </div>

          <div className={styles["project-bottom"]}>
            <div className={styles["screen-shots"]}>
              <div
                style={{
                  margin: "2.5% auto",
                  maxWidth: "40vw",
                  minWidth: "80%",
                }}
              >
                <Image
                  src="/ScreenShot.png"
                  alt="app-screenshots"
                  width={"315px"}
                  height={"350spx"}
                  layout="responsive"
                />
              </div>
            </div>
            <div className={styles["project-reviews"]}>
              <div style={{ padding: "1.5% 0", width: "100%" }}>
                <Image
                  src="/Reviews.png"
                  alt="reviews"
                  width="625"
                  height="700px"
                  layout="responsive"
                />
              </div>
            </div>
          </div>

          <div
            className={styles["project-analysis"]}
            style={{ textAlign: "left", padding: "1.5%" }}
          >
            <strong style={{ textAlign: "left" }}>APP ANALYSIS</strong>
            <div style={{ marginTop: "1.5%" }}>
              <Image
                src="/chart-example.png"
                width={"1428"}
                height={"722"}
                alt="chart"
              ></Image>
            </div>
            <div className={styles["chart-description"]}>
              {`This chart shows [value] by [measure] by [time].  It's helpful in that more users typically indicates a quality service.`}
              <br />
              {`This chart shows the token's`}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DappPage;
