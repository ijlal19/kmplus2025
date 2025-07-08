import React from "react";
import styles from './index.module.scss';

const Expert = () => {
    return (
        <div className={styles.main}>
            <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
            >
                {/* <source src="https://biosurgeasia.com/wp-content/uploads/2023/09/0626-1.mp4" type="video/mp4" /> */}
                <source src="/kmplusImages/0626-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.content_box}>
                <div className={styles.title_box}>
                    <span className={styles.dash}></span>
                    <p className={styles.title}>Ask Experts</p>
                </div>
                <p className={styles.heading}>Not Sure Your Problems?</p>
                <button className={styles.btn}>Contact Us</button>
            </div>
        </div>
    )
}
export default Expert;