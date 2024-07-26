import Image from "next/image";
import styles from "./extraDetails.module.css";
import icon_1 from "./icon_account.svg";
import icon_2 from "./icon_transaction.svg";
import icon_3 from "./icon_security.svg";
import icon_4 from "./icon_offer.svg";

export default function MoreDetails() {
  return (
    <main>
      <div className={`${styles.headContainer}`}>
        <h1 className={`${styles.header}`}>In case you need to know more</h1>
      </div>

      <div className={`${styles.subheadContainer}`}>
        <div className={`${styles.head}`}>
          <h2 className={`${styles.heading}`}>Explore every detail of du Pay</h2>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className={`${styles.cardContainer} d-flex flex-wrap`}>

          <div className={`${styles.Cards} col-lg-4`}>
            <div className={`${styles.subCards}`}>
              <Image src={icon_1} alt=""></Image>
              <h4 className={`${styles.text} mt-md-4`}>Account</h4>
              <p style={{color:"#666"}}>17 Topics</p>
            </div>
          </div>

          <div className={`${styles.Cards} col-lg-4`}>
            <div className={`${styles.subCards}`}>
              <Image src={icon_2} alt=""></Image>
              <h4 className={`${styles.text} mt-md-4`}>Transaction</h4>
              <p style={{color:"#666"}}>12 Topics</p>
            </div>
          </div>

          <div className={`${styles.Cards} col-lg-4`}>
            <div className={`${styles.subCards}`}>
              <Image src={icon_3} alt=""></Image>
              <h4 className={`${styles.text} mt-md-4`}>Account Security</h4>
              <p style={{color:"#666"}}>5 Topics</p>
            </div>
          </div>

          <div className={`${styles.Cards} col-lg-4`}>
            <div className={`${styles.subCards}`}>
              <Image src={icon_4} alt=""></Image>
              <h4 className={`${styles.text} mt-md-4`}>Offers</h4>
              <p style={{color:"#666"}}>2 Topics</p>
            </div>
          </div>

          <div className={`${styles.Cards} col-lg-4`}>
            <div className={`${styles.subCards}`}>
              <Image src={icon_4} alt=""></Image>
              <h4 className={`${styles.text} mt-md-4`}>Cards</h4>
              <p style={{color:"#666"}}>17 Topics</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
