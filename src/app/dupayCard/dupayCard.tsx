import Image from "next/image";
import img from "./edgecard.png";
import styles from "./dupayCard.module.css";

export default function PayCard() {
  return (
    <main className={`${styles.mainContainer} mt-5 mb-5`}>
      <div
        className={`${styles.mContainer} h-100 d-flex justify-content-center`}
      >
        <div
          className={`${styles.infoContainer} d-flex justify-content-center flex-column`}
        >
          <div className={`${styles.subInfoContainer}`}>
            <div className={`${styles.infotext} d-flex flex-column gap-3`}>
              <h1 className={`${styles.Font} text-light`}>
                Your payments, your way.
              </h1>
              <p className={`${styles.Subtext}`}>
                Get your very own du Pay card
              </p>
            </div>

            <div className="d-flex flex-row gap-5 mt-3">
              <div className={`${styles.blocks} p-2`}>
                <p className={`${styles.textColor}`}>Contactless payments</p>
              </div>
              <div className={`${styles.blocks} p-2`}>
                <p className={`${styles.textColor} mb-3`}>Set card limits</p>
              </div>
            </div>

            <div className="d-flex flex-row gap-5 mt-3">
              <div className={`${styles.blocks} p-2`}>
                <p className={`${styles.textColor}`}>
                  Block/unblock your card anytime
                </p>
              </div>
              <div className={`${styles.blocks} p-2`}>
                <p className={`${styles.textColor}`}>
                  Simplify cash withdrawals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
