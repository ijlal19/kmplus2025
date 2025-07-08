import React from "react";
import styles from './index.module.scss';

const Vehicle_type = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title_box}>
                    <span className={styles.dash}></span>
                    <p className={styles.title}>For Each</p>
                </div>
                <p className={styles.heading}>Solutions For Vehicle types</p>
                <div className={styles.grid_cards}>
                    <div className={styles.card}>
                        <img src="/vehicleType/car.png" alt="" className={styles.images} />
                        <p className={styles.name}>Automobiles</p>
                    </div>
                    <div className={styles.card}>
                        <img src="/vehicleType/truck.png" alt="" className={styles.images} />
                        <p className={styles.name}>Heavy-Duty Truck</p>
                    </div>
                    <div className={styles.card}>
                        <img src="/vehicleType/tractor.png" alt="" className={styles.images} />
                        <p className={styles.name}>Agriculture</p>
                    </div>
                    <div className={styles.card}>
                        <img src="/vehicleType/ship.png" alt="" className={styles.images} />
                        <p className={styles.name}>Boating & Marine</p>
                    </div>
                    <div className={styles.card}>
                        <img src="/vehicleType/bike.png" alt="" className={styles.images} />
                        <p className={styles.name}>Motorcycle</p>
                    </div>
                    <div className={styles.card}>
                        <img src="/vehicleType/generator.png" alt="" className={styles.images} />
                        <p className={styles.name}>Generator</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Vehicle_type