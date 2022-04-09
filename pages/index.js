import React from "react";
import styles from "../styles/Home.module.scss";
import MenuBar from "../components/menubar";
import Image from "next/image";

export default function HomeContent() {
  return (
    <div className={styles["container"]}>
      <head>
        <title>The Forest</title>
        <meta name="description" content="Blockchain Education for Everyone" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <main className={styles["content-wrap"]}>
        <MenuBar />
        <div className={styles["main-content-container"]}>
          <div className={styles["main-image-overlay"]}>
            <div className={styles["main-image-wrap"]}>
              <Image
                src="/the-forest.png"
                alt="the-forest"
                title={`the-forest`}
                layout="fill"
                priority
              />
            </div>
          </div>

          <div className={styles["header-img-text-overlay"]}>
            <div className={styles["header-img-text-wrap"]}>
              <div className={styles["header-img-text"]}>
                New technology and seemingly unlimited early-investment
                opportunities in crypto can leave a person feeling lost....
              </div>
              <div className={styles["header-img-text"]}>
                Let us help you make sense of the forest and the trees, by
                showing you new ways to{" "}
                <em>
                  evaluate and engage with Web3 applications as both services,
                  and investments
                </em>
                .
              </div>
            </div>
          </div>
        </div>

        <div className={styles["summary-blurb-wrap"]}>
          <div className={styles["summary-blurb-container"]}>
            <div className={styles["summary-blurb-header"]}>The Dapp Store</div>
            <li className={styles["summary-blurb-text"]}>
              The value of a crypto asset is largely based on adoption, not
              traditional quarterly metrics, so we provide usage-focused charts
              with notes into how those metrics can be interpreted.
            </li>
            <li className={styles["summary-blurb-text"]}>
              Our “Dapp Store” layout provides the perfect user-friendly context
              for newcomers to evaluate Web3 technology as a real-world
              solution.
            </li>
            <li className={styles["summary-blurb-text"]}>
              Our goal is to maximize knowledge to minimize risk... to give
              users context as an individual or business manager to make the
              right call on Web3 vendors and early-stage investments.
            </li>
          </div>
        </div>

        <div className={styles["long-form-text-wrap"]}>
          <div className={styles["text-section-wrap"]}>
            <div className={styles["long-form-header"]}>A Brief Analogy</div>
            <div
              className={styles["long-form-text"]}
            >{`Blockchain networks are sort of like Costco. Or any store that checks your receipt when you check out.`}</div>
            <div
              className={styles["long-form-text"]}
            >{`Well, actually those are more like traditional databases.  Blockchains are more like if 10,000 receipt-checkers all reviewed your receipt, and checked your purchase against the store inventory (to make sure they had the goods to sell) AND your bank accounts (to make sure you had the money).`}</div>
            <div
              className={styles["long-form-text"]}
            >{`That whole process of handling the transaction and verifying the 'truthfulness' of that transaction is what blockchains do. And they do it by storing the history in multiple places, so you'd have to corrupt 5,001 receipt-checkers to change the record illicitly.`}</div>
            <div
              className={styles["long-form-text"]}
            >{`This type of network security is a form of cryptography, thus the 'crypto' name.`}</div>
          </div>
          <div className={styles["text-section-wrap"]}>
            <div className={styles["long-form-header"]}>
              Blockchain in Real Life
            </div>
            <div
              className={styles["long-form-text"]}
            >{`Blockchain uses are being proven every day.  Huge companies are signing partnerships to explore the potential of and to use many of these new tools.  As blockchains grow in efficiency (typically measured as transactions validated per second), they become much more viable as secure, cost-effective and flexible replacements for existing tools and services.`}</div>
            <div
              className={styles["long-form-text"]}
            >{`The receipt-checkers, also known as Stakers or Validators, typically get rewards in the form of that network’s unique token for helping validate transactions and secure the network.`}</div>
            <div className={styles["long-form-text"]}>
              {`Since many of these projects are pre-launch investment opportunities, these free tokens `}
              <em>can</em>
              {` become quite valuable over time.  That’s the reward for helping secure their network during testing... a piece of the pie.`}
            </div>
          </div>
          <div className={styles["text-section-wrap"]}>
            <div className={styles["long-form-header"]}>What We Do</div>
            <div
              className={styles["long-form-text"]}
            >{`We help you make sense of everything by making sense of Dapps. Dapps are “Decentralized Apps,” which in practice means they use a blockchain to handle at least some interactions or data.`}</div>
            <div
              className={styles["long-form-text"]}
            >{`More generally, decentralized means that the users own the service.  Whoever owns the token gets to vote on updates and changes to the service, and the dedicated team (who receives pre-determined salaries from the network) will implement the changes.`}</div>
            <div
              className={styles["long-form-text"]}
            >{`Since a Dapp’s popularity is what drives its token’s value, usage metrics are crucial to evaluating the quality and potential of a service.  Is a network’s transaction volume mostly speculative investors, or users interacting with the service?  Is it a lot of users or a few power users? These tell us things about a service’s usefulness, and thus its value.`}</div>
            <div
              className={styles["long-form-text"]}
            >{`We want to bring all of this information to you in a familiar, easy-to-digest format so you can learn about, invest, connect with, and use these new technologies as they develop.`}</div>
          </div>
          <div className={styles["text-section-wrap"]}>
            <div className={styles["long-form-header"]}>Our Approach</div>
            <div
              className={styles["long-form-text"]}
            >{`Everybody's used an app store, so we organized blockchain services like an app store, so you have better context of what they’re trying to do. We provide a mix of usage based metrics and industry favored metrics to give you a picture of this service as a competitor in the category, as well as the way the market may view it as an investment.`}</div>
            <div
              className={styles["long-form-text"]}
            >{`We also want to make it as easy as possible for you to get involved.  Whether you're a business manager looking for new tools, tech-forward users, or investors... our product pages will highlight white papers, business development contacts, sign up pages, staking pools, and more.`}</div>

            <div
              className={styles["long-form-text"]}
            >{`The future can be a scary place, but it doesn’t have to be. Let us show you around.`}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
