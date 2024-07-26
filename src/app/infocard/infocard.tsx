import Image from "next/image";
import QR_img from "../QR.svg";
import phone_img from "../phone.png";
import styles from "./info.module.css";

export default function InfoCard() {
  return (
    <main className={`${styles.main} d-flex flex-row justify-content-center`}>
      <div className={`${styles.MContainer}`}>
        <div className={`${styles.Container} container`}>
          <div style={{ width: 458 }}>
            <h1 className={`text-light ${styles.headInfo}`}>
              Send money back home with du Pay
            </h1>
            <p className={`${styles.subInfo} text-light`}>
              Free first International transfer and get 10GB or more
            </p>

            <div className={`${styles.tryitCard} d-md-flex flex-row`}>
              <div className={`col-8 d-flex align-items-center`}>
                <div className="ps-3">
                  <h5 className={`${styles.tryit} text-light`}>Try it out!</h5>
                  <p className={`text-light mt-2 ${styles.tryitDescription}`}>
                    Scan to download app, compatible with iOS and Android.
                  </p>
                </div>
              </div>
              <div className={`col-4 d-flex justify-content-end pe-2 py-2`}>
                <Image
                  src={QR_img}
                  alt=""
                  style={{ width: 104, height: 104 }}
                ></Image>
              </div>
            </div>

            <div className={`${styles.button}`}>
              <button className={`${styles.download_button} btn btn-primary`}>
                Download App
              </button>
            </div>
          </div>
        </div>

        <div className={`${styles.imgContainer} d-md-flex`}>
          <Image src={phone_img} alt="" className={styles.phone}></Image>
        </div>
      </div>
    </main>
  );
}
