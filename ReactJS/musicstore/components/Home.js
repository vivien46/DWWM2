import React from "react";
import styles from "../styles/Home.module.css";
import {
  faBagShopping,
  faBars,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div>
      <main className={styles.homeMain}>
        <div className={styles.homeHeader}>
          <div className={styles.homeHeaderBar}>
            <div className={styles.homeIconSection1}>
              <FontAwesomeIcon icon={faBars} color={"white"} />
            </div>
            <span className={styles.homeTitle}>Music store</span>
            <div className={styles.homeIconSection2}>
              <FontAwesomeIcon icon={faUser} color={"white"} />
              <FontAwesomeIcon icon={faLocationDot} color={"white"} />
              <FontAwesomeIcon icon={faBagShopping} color={"white"} />
            </div>
          </div>

                      <div className={styles.headerBottom}>
                        <div className={styles.headerBotG}>
                        <span className={styles.phantom}>phantom</span>
                        <span className={styles.soudG}>implosive sound</span>
                      </div>
                      <div className={styles.buttons}>
                        <button className={styles.button1}>discover</button>
                        <button type="button" className={styles.button2} >buy</button>
                      </div>

          </div>
        </div>
      </main>
                          <div className={styles.soundbarre}>
                            <div className={styles.dione}>
                                    <span className={styles.span1}>latest lunch</span>
                                    <span className={styles.span2}>dione soundbar</span>
                            </div>
                            <img src="soundbarre.png" />
                            <button type ='button'className={styles.button3}>discover</button>
                          </div>
    </div>
  );
};
