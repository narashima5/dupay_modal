import Image from "next/image";
import styles from "./footer.module.css";
import QR from "./QR.svg";
import logo from "../logo.svg";
import icon_1 from "./fb.svg";
import icon_2 from "./twitter.svg";
import icon_3 from "./ig.svg";
import icon_4 from "./linkedIn.svg";
import icon_5 from "./yt.svg";
import icon_6 from "./apple.svg";
import icon_7 from "./google.svg";
import icon_8 from "./huawei.svg";

export default function Footer() {
  return (
    <main className={`${styles.mainContainer}`}>
      <div
        className={`${styles.topContainer} d-md-flex justify-content-center py-5 mt-5`}
      >
        

        <div
          className="d-flex flex-column gap-3 justify-content-center align-items-center"
          style={{ width: 440 }}
        >
          <h1 className={`${styles.header}`}>Join the future of finance, today.</h1>
          <p className={`${styles.Subtext}`}>
            Scan to download the du Pay app. Compatible with iOS and Android.
          </p>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <Image src={QR} alt=""></Image>
        </div>
      </div>

             {/* logo */}

      <div className={`${styles.bottomContainer} pb-5`}>
        <div className={`${styles.btContainer} d-md-flex py-5`}>
          <div className={`${styles.imgContainer}`}>
            <Image src={logo} alt=""></Image>
          </div>

          <div className={`${styles.textContainer}`}>
            <h2 className={`${styles.text}`}>
              Your{" "}
              <span
                className={`${styles.textbox} d-inline-flex justify-content-center align-items-center py-2 px-3`}
              >
                money
              </span>{" "}
              , your way.
            </h2>
          </div>
        </div>

        <div className={`${styles.hrLine}`}></div>

        <div className={`${styles.bottom_bottomContainer}`}>
          {/* links */}

          <div
            className={`${styles.linkContainer} d-md-flex gap-3 justify-content-end py-5`}
          >
            <ul className={`${styles.lists} d-flex flex-column gap-3`}>
              <li className={`${styles.sublists}`}>
                <a href="#" className={`${styles.links}`}>
                  Home
                </a>
              </li>
              <li className={`${styles.links}`}>
                <a href="#" className={`${styles.links}`}>
                  About Us
                </a>
              </li>
              <li className={`${styles.links}`}>
                <a href="#" className={`${styles.links}`}>
                  Contact Us
                </a>
              </li>
            </ul>

            <ul className={`${styles.lists} d-flex flex-column gap-3`}>
              <li className={`${styles.links}`}>
                <a href="#" className={`${styles.links}`}>
                  Terms and Conditions
                </a>
              </li>
              <li className={`${styles.links}`}>
                <a href="#" className={`${styles.links}`}>
                  Fee and Limits (Key Fact Statement)
                </a>
              </li>
              <li className={`${styles.links}`}>
                <a href="#" className={`${styles.links}`}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* reference */}
        <div className={`${styles.socialReference} d-md-flex pb-5`}>
          <div
            className={`${styles.icon_container} d-flex justify-content-end pt-4`}
          >
            <div
              className={`${styles.icon_container} d-flex flex-row justify-content-start ps-4 gap-4`}
            >
              <Image src={icon_1} alt="" className={`${styles.icons}`}></Image>
              <Image src={icon_2} alt="" className={`${styles.icons}`}></Image>
              <Image src={icon_3} alt="" className={`${styles.icons}`}></Image>
              <Image src={icon_4} alt="" className={`${styles.icons}`}></Image>
              <Image src={icon_5} alt="" className={`${styles.icons}`}></Image>
            </div>
          </div>

          <div>
            <div className={`${styles.heading}`}>
              <h2 className={`${styles.header}`}style={{color:"white"}}>Download du Pay</h2>
            </div>
            <div>
                <div className={`${styles.imgContainer_2} d-flex flex-row gap-3`}>
                    <Image src={icon_6} alt="" className={`${styles.download_links}`}></Image>
                    <Image src={icon_7} alt="" className={`${styles.download_links}`}></Image>
                    <Image src={icon_8} alt="" className={`${styles.download_links}`}></Image>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
