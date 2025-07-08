import React from "react";
import styles from './index.module.scss';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Vision = ()=>{
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.image_box}>
                    <img src="AboutImages/vision.jpg" alt="" className={styles.image} />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.heading}>Vision</h1>
                    <p className={styles.paragraph} >BioSurge Asia identified two sets of existing engine performance problems that evolved from the engine advancement. First set of problem is a function of fuel combustion. Second set of problems is related to lubrication of engine.</p>
                    <div className={styles.notic_box}>
                        <span className={styles.notic_icon}><LightbulbIcon /></span>
                        <p className={styles.notic} >In order for an engine to perform at top efficiency these two sets of problems need to be addressed.</p>
                    </div>
                </div>
           </div>
        </div>
    )
}
export default Vision