import Image from "next/image";
import styles from "./privacy.module.css";
import img_1 from "./your_trust_is_our_prioprity.png";
import icon_1 from "./icon_lock.svg";
import icon_2 from "./icon_tick.svg";
import icon_3 from "./icon_bind.svg";
import flags from "./flags.svg"

export default function PrivacyInfo() {
  return (
    <main className="mt-5 pt-5">
      <div
        className={`${styles.Mcontainer} container-fluid d-flex flex-row justify-content-center gap-3`}
      >
        {/* info */}

        <div className={`${styles.infoContainer} d-flex`}>
          <div className="d-flex flex-column justify-content-center align-items-center mx-4">
            <div className={`${styles.heading} mb-2`}>
              <h1 className={`${styles.headtext}`}>Your trust is our priority</h1>
            </div>
            <div className={`${styles.info}`}>
              <p className={`${styles.text}`}>
                du Pay is a secure mobile payment service, regulated by the
                Central Bank of the UAE. We use the highest-grade security
                measures to keep your transactions and data safe. Place your
                trust in du Pay to keep your financial information secure.
              </p>
            </div>
          </div>
        </div>

        {/* image */}

        <div className={`${styles.imgContainer}`}>
          <Image
            src={img_1}
            alt=""
            className={`${styles.img}`}
            style={{ width: 449, height: 450 }}
          ></Image>
        </div>
      </div>

      {/* 2-step process info */}

      <div className={`${styles.hrLine} mt-5`}></div>

      <div
        className={`${styles.verifyContainer} d-md-flex justify-content-center gap-5`}
      >
        <div className={`${styles.subContainer} d-flex justify-content-center`}>
          <Image src={icon_1} alt="" className={`${styles.icons}`}></Image>
          <p className={`${styles.text}`}>
            We use 2-factor authentication, fraud prevention, and a secure
            backend infrastructure.
          </p>
        </div>

        <div className={`${styles.subContainer} d-flex justify-content-center`}>
          <Image src={icon_2} alt="" className={`${styles.icons}`}></Image>
          <p className={`${styles.text}`}>
            By tying your account to your mobile number, we ensure you're always
            in control.
          </p>
        </div>

        <div className={`${styles.subContainer} d-flex justify-content-center`}>
          <Image src={icon_3} alt="" className={`${styles.icons}`}></Image>
          <p className={`${styles.text}`}>
            We're partnered with established financial institutions to ensure
            your money is safe.
          </p>
        </div>
      </div>
      <div className={`${styles.hrLine} mb-5`}></div>

      {/* download process card */}

      <div className={`${styles.processCard} d-md-flex justify-content-center gap-3 mb-5`} style={{marginTop:80}}>
        <div className={`${styles.infoContainer} d-flex align-items-start`}>
          <div className="d-flex flex-column justify-content-center mx-4">
            <div className={`${styles.heading} mb-2`}>
              <h1>Get started in 3 simple steps</h1>
            </div>

            <div className={`${styles.info}`}>
              <ul>
                <li>Download the du Pay app.</li>
                <li>
                  Keep your Emirates ID handy and complete the simple
                  verification.
                </li>
                <li>
                  Add money into your wallet through your inward bank transfer
                  or via our network of payment machines.
                </li>
              </ul>

              <div>
                <p>
                  You are now ready to send money nearly anywhere with du Pay.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.imgContainer_2}`}></div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <Image src={flags} alt="" className={`${styles.flags}`}></Image>
      </div>
    </main>
  );
}
