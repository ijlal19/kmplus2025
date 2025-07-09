import React from "react";
import styles from './index.module.scss';
import { Link } from "@mui/material";

const Contact_Opt = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.image_box}>
                        <img src="/contactImages/phone.svg" alt="Contact" className={styles.image} />
                    </div>
                        <h1 className={styles.heading}>Call Us</h1>
                        <p className={styles.text}>MONDAY - FRIDAY</p>
                        <p className={styles.text}>021-35396999</p>
                </div>
                <div className={styles.box}>
                    <div className={styles.image_box}>
                        <img src="/contactImages/email.svg" alt="Contact" className={styles.image} />
                    </div>
                        <h1 className={styles.heading}>Email Us</h1>
                        <p className={styles.text}>FOR GENERAL ENQUIRIES & QUESTIONS, EMAIL US HERE</p>
                        <Link href="#" className={styles.a}>Email!</Link>
                </div>
                <div className={styles.box}>
                    <div className={styles.image_box}>
                        <img src="/contactImages/location.svg" alt="Contact" className={styles.image} />
                </div>
                        <h1 className={styles.heading}>Visit Us</h1>
                        <p className={styles.text}>INDUSTRIAL & COMMERCIAL SOLUTIONS

                            Office No 08,  25-E, Khayaban-e-Jami, Phase II Ext. D.H.A. Karachi, Pakistan.</p>
                    </div>
            </div>
        </div>
    )
}
export default Contact_Opt