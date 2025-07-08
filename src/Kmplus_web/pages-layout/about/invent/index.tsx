import React from "react";
import styles from './index.module.scss';
import CheckIcon from '@mui/icons-material/Check';

const Invent = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>Invent</h1>
                    <p className={styles.paragraph} >BioSurgeAsia is in the forefront of researching the perfect solution to overcome the above 2 sets of problems to achieve engine’s top performance. We focus on the value we offer to our consumers as well as maintaining the earth green. Drivers today focus not only just on better fuel economy but on a wide array of values like restore and improve engine power, cleaner and smoother engines, improve drivability, reduce engines maintenance cost, and prolong engines life. From here, the opportunity is for us to invent/develop:</p>

                    <div className={styles.notic_box}>
                        <span className={styles.notic_icon}><CheckIcon /></span>
                        <p className={styles.notic} >Tools and solution to remove accumulated carbon deposit.</p>
                    </div>
                    <div className={styles.notic_box}>
                        <span className={styles.notic_icon}><CheckIcon /></span>
                        <p className={styles.notic} >Solution to minimize carbon deposit from combustion of fuel.</p>
                    </div>
                    <div className={styles.notic_box}>
                        <span className={styles.notic_icon}><CheckIcon /></span>
                        <p className={styles.notic}>Additive that protects engine from wear and tear during service cycle.</p>
                    </div>
                    <div className={styles.notic_box}>
                        <span className={styles.notic_icon}><CheckIcon /></span>
                        <p className={styles.notic}>Fuel economy.</p>
                    </div>
                </div>
                <div className={styles.image_box}>
                    <img src="AboutImages/navigation.jpg" alt="" className={styles.image} />
                </div>
            </div>
        </div>
    )
}
export default Invent