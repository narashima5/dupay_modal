import Image from "next/image";
import styles from "./feature.module.css";
import langImg from "./multilangimg.png";
import iconImg from "./icon1.svg";
import icon_2 from "../icon2.svg";
import imtImage from "./instant_money_transfer.png";
import icon_3 from "../icon3.svg";

export default function Features() {
  return (
    <main
      className={`${styles.MContainer} container-fluid row justify-content-center mt-2`}
    >
      {/* header and multilingual card */}

      <div className="col-xxl-9">
        <div className={`row mt-4`}>
          <div className="col-12 mt-3">
            <header>
              <h1
                className={`${styles.Width} d-flex justify-content-center mb-5 pb-5`}
              >
                Here's what we offer
              </h1>
            </header>
          </div>
        </div>

        <div
          className={`${styles.IContainer}d-flex row justify-content-center py-2`}
        >
          <div className="d-flex gap-3 align-items-center justify-content-center">
            <div className={`${styles.img_1} ${styles.imgContainer}`}></div>

            <div className={`${styles.infoContainer}`}>
              <div className=" d-md-flex flex-column">
                <div>
                  <Image src={iconImg} alt="" className={`${styles.icons}`}></Image>
                </div>
                <div>
                  <h1 className={`${styles.Width}`}>A Multilingual Experience</h1>
                </div>
                <div>
                  <p className={`${styles.subText}`}>
                    Language barriers are a thing of the past. Navigate our app
                    in Arabic, English, Hindi, Malayalam, Tamil and Bangla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* money transfer card */}

      <div className={`${styles.mtcCard} container-fluid d-md-flex mt-3 mb-3 gap-3`}>
        <div className={`${styles.mtcCard_info}`}>
          <div>
            <div>
              <Image src={icon_2} alt="" className={`${styles.icons}`}></Image>
            </div>
            <div>
              <h1 className={`${styles.Width}`}>Instant Money Transfer</h1>
            </div>
            <div>
              <p className={`${styles.subText}`}>
                Send money right away, anytime, from your phone. It's fast,
                easy, and always there when you need it the most.
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.mtc_img_Container}`}>
          <div className={`${styles.imgContainer_2}`}>
          </div>
        </div>
      </div>

      {/* payment info card */}

      <div
          className={`${styles.IContainer} d-flex row justify-content-center py-2`}
        >
          <div className="d-flex gap-3 align-items-center justify-content-center">
            <div className={`${styles.img_2} ${styles.imgContainer}`}></div>

            <div className={`${styles.infoContainer}`}>
              <div className=" d-md-flex flex-column">
                <div>
                  <Image src={icon_3} alt="" className={`${styles.icons}`}></Image>
                </div>
                <div>
                  <h1 className={`${styles.Width}`}>Payments made simple</h1>
                </div>
                <div>
                  <p className={`${styles.subText}`}>
                  Simplify your everyday life with our app. Effortlessly pay your bills or top-up your mobile in just few steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}
