'use client'
import React from "react";
import styles from './index.module.scss';
import { useMediaQuery } from "@mui/material";

const Highlight_Section = () => {
    const IsMobile = useMediaQuery('(max-width:768px)');
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.iframe_box}>
                    <iframe
                        width="100%"
                        height={IsMobile ? "200" : "316"}
                        src="https://www.youtube.com/embed/P04e7Yp4h3o"
                        title="KM Plus MV AD - Director Edilson林永权"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    {/* <iframe width="100%" height="294" src="https://www.youtube.com/embed/P04e7Yp4h3o" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                </div>
                <div className={styles.content_box}>
                    <div className={styles.title_box}>
                        <span className={styles.dash}></span>
                        <p className={styles.title}>Highlights</p>
                    </div>
                    <p className={styles.heading}>Lights, Camera, Action</p>
                    <p className={styles.description}>Experience the magic of our products in action! Watch the MV showcase to witness their extraordinary features and unparalleled performance. Lights, camera, and pure excellence await!</p>
                </div>
            </div>
        </div>
    )
}

export default Highlight_Section;