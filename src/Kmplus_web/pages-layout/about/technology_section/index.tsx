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
                        <span className={styles.dash}></span>
                    </div>
                    <p className={styles.heading}>Technology creates solutions</p>
                </div>
                <div className={styles.iframe_box}>
                    <iframe
                        width={IsMobile ? "100%" : "80%"}
                        height={IsMobile ? "190" : "316"}
                        src="https://www.youtube.com/embed/JYTxjCAqPuM"
                        title="BioSurge Asia Sdn Bhd 2021"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    </div>
            </div>
        </div>
    )
}

export default Create_solution;