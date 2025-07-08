'use client'
import React from "react";
import styles from './index.module.scss';
import { useMediaQuery } from "@mui/material";

const Create_solution = () => {
    const IsMobile = useMediaQuery('(max-width:768px)');
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.content_box}>
                    <div className={styles.title_box}>
                        <span className={styles.dash}></span>
                        <p className={styles.title}>About Us</p>
                    </div>
                    <p className={styles.heading}>Technology creates solutions</p>
                    <button className={styles.btn}>Learn More</button>
                </div>
                <div className={styles.iframe_box}>
                    <iframe
                        width="100%"
                        height={IsMobile ? "200" : "316"}
                        src="https://www.youtube.com/embed/JYTxjCAqPuM"
                        title="BioSurge Asia Sdn Bhd 2021"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    <button className={styles.btn1}>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Create_solution;