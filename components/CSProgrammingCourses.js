import React from "react";
import { IoRibbonOutline } from "react-icons/io5";
import styles from "./JobHistoryPagesLayout.module.css";
import { IconContext } from "react-icons/lib";

export default function JobHistoryPage() {
  return (
    <div>
      <section className={styles.jobs}>
        <section className={styles.CVContainer}>
          <h3 className={styles.text}>Coursera</h3>
          <ul className={styles.text}>
            <li className={styles.text2}>
              Introduction to Frond-End Development
              <a href="https://www.coursera.org/account/accomplishments/verify/MTH63M34SULP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course">
                <IconContext.Provider value={{ color: "white" }}>
                  &nbsp; <IoRibbonOutline />
                </IconContext.Provider>
              </a>
            </li>
            <li className={styles.text2}>
              Programming with JavaScript
              <a href="https://www.coursera.org/account/accomplishments/verify/ADQMFJYTSLSF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course">
                <IconContext.Provider value={{ color: "white" }}>
                  &nbsp; <IoRibbonOutline />
                </IconContext.Provider>
              </a>
            </li>
          </ul>
        </section>
        <section className={styles.CVContainer}>
          <h3 className={styles.text}>Codesmith</h3>
          <ul className={styles.text}>
            <li className={styles.text2}>JavaScript Basics</li>
            <li className={styles.text2}>
              Code execution, memory (variable environment), execution context
              and the call stack.
            </li>
            <li className={styles.text2}>
              Higher order functions and callbacks
            </li>
            <li className={styles.text2}>
              Closure, Scope, and Execution Context
            </li>
            <li className={styles.text2}>Recursion</li>
            <li className={styles.text2}>Asyncrosous JavaScript</li>
            <li className={styles.text2}>Object Oriented Programming</li>
          </ul>
        </section>
      </section>
    </div>
  );
}
