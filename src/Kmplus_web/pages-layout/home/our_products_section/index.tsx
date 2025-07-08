import React from "react";
import styles from './index.module.scss';
const Our_Product = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.content_box}>
                    <div className={styles.title_box}>
                        <span className={styles.dash}></span>
                        <p className={styles.title}>Category</p>
                    </div>
                    <p className={styles.heading}>Our Products</p>
                    <button className={styles.btn}>Browse All</button>
                </div>
                <div className={styles.product_main}>
                    <div className={styles.singles_image}>
                        <div className={styles.text}>
                            <p className={styles.p}>
                                Fuel Additives
                            </p>
                        </div>
                    </div>
                    <div className={styles.three_image_box}>

                        <div
                            className={styles.image_box}
                            style={{ background: `url(/ourProducts/pistun.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}
                        >
                            <div className={styles.text}>
                                <p className={styles.p}>Engine Treatment</p>
                            </div>
                        </div>

                        <div
                            className={styles.image_box}
                            style={{ backgroundImage: `url(/ourProducts/love-car.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}
                        >
                            <div className={styles.text}>
                                <p className={styles.p}>Regular Maintenance</p>
                            </div>
                        </div>

                        <div
                            className={styles.image_box}
                            style={{ backgroundImage: `url(/ourProducts/gear.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}
                        >
                            <div className={styles.text}>
                                <p className={styles.p}>Transmission Care</p>
                            </div>
                        </div>
                    </div>
                    <button className={styles.btn1}>Browse ALl</button>
                </div>
            </div>
        </div>
    )
}
export default Our_Product