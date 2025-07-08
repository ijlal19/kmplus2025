'use client'
import React from "react";
import styles from './index.module.scss';
const Hero_Card = ({ props }: any) => {
    return (
        <div className={styles.main} style={{
        backgroundImage: `url(${props.background_image})`
        }}>
            <div className={styles.content}>
                <p className={styles.title}>{props?.title}</p>
                <p className={styles.description}>{props?.description}</p>
                <button className={styles.btn}>View Solutions</button>
            </div>
        </div >
    )
}
export default Hero_Card