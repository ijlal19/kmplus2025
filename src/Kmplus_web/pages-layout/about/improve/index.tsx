import React from "react";
import styles from './index.module.scss';
import CheckIcon from '@mui/icons-material/Check';

const Improve = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.image_box}>
                    <img src="AboutImages/form.jpg" alt="" className={styles.image} />
                </div>
                <div className={styles.content}>

                    <h1 className={styles.heading}>Imrpove</h1>
                    <p className={styles.paragraph} >BioSurge will build the KM+ brand as a synonym for environment friendly solutions to address today’s competitive requirements for engine performance, fuel saving, maintenance and protection of combustion engines as well as fulfilling social responsibility of keeping a greener earth.</p>

                    <div className={styles.notic_box}>
                        {/* <span className={styles.notic_icon}><CheckIcon /></span> */}
                        <p className={styles.notic} >BioSurge Asia will continuously improve on our products.</p>
                    </div>
                    {/* <div className={styles.notic_box}>
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
                    </div> */}
                </div>

            </div>
        </div>
    )
}
export default Improve