import Image from "next/image";
import mylogo from "../logo.svg";
import styles from "./header.module.css";

export default function Header() {
  return (
    <main className={`${styles.navbar}`}>
      <div className="d-flex flex-row justify-content-center">
        <div className="container-fluid d-flex justify-content-center">
          <div className="row justify-content-center" style={{width:1060}}>
            <div className="col-12">
              <div className="row py-3">
                {/* image */}
                <div className="d-flex col-4 ">
                  <Image alt="" src={mylogo} width={118} height={64}></Image>
                </div>

                {/* info */}
                <div className={`${styles.info} col-8 d-md-flex gap-4 align-items-center justify-content-end`} style={{paddingRight:13}}>
                  <div className={`${styles.font_size_a}`}>
                    <a href="#" className={`${styles.links}`}>About Us</a>
                  </div>

                  <div className={`${styles.font_size_a}`}>
                    <a href="#" className={`${styles.links}`}>Contact Us</a>
                  </div>

                  <div>
                    <button className={`${styles.header_button} btn btn-primary`}>Download App</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
