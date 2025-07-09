'use client'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import styles from './index.module.scss';
import React from "react";
import { Link } from '@mui/material';


const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.grid_item1}>
                    <img src="https://biosurgeasia.com/wp-content/uploads/2023/09/biosurge-logo-1.png" alt="kmplus2025" className={styles.image} />
                </div>
                <div className={styles.grid_item2}><p className={styles.p}>SITE</p>
                    <Link href="/about" className={styles.site_link}><p className={styles.site_link}>About</p></Link>
                    <Link href="/contact" className={styles.site_link}><p className={styles.site_link}>Solutions</p></Link>
                    <Link href="#" className={styles.site_link}><p className={styles.site_link}>Products</p></Link>
                    <Link href="#" className={styles.site_link}><p className={styles.site_link}>Dealer Portal</p></Link>
                </div>
                <div className={styles.grid_item3}>
                    <p className={styles.p}>CONTACT</p>
                    <div className={styles.contact_box}>
                        <LocalPhoneIcon sx={{ color: "red", fontSize: "20px", displaye: "flex" }} />
                        <p className={styles.phone_text}>+60 (3) 62638088</p>
                    </div>
                    <div className={styles.contact_box}>
                        <EmailIcon sx={{ color: "red", fontSize: "20px", displaye: "flex" }} />
                        <p className={styles.phone_text}>info@biosurgeasia.com</p>
                    </div>
                    <div className={styles.contact_box}>
                        <LocationOnIcon sx={{ color: "red", fontSize: "20px", displaye: "flex" }} />
                        <p className={styles.phone_text}>BioSurge Asia Sdn Bhd (714511-K) T1-11-05, Tower One, 8trium Towers Bandar Sri Damansara 52200 Kuala Lumpur Malaysia</p>
                    </div>
                </div>
                <div className={styles.grid_item4}>
                    <p className={styles.p}>OUR SOCIAL</p>
                    <div className={styles.icon_section} >
                        <Link href="">
                            <div className={styles.icon_box} style={{ backgroundColor: "#25d366" }}><WhatsAppIcon className={styles.icon} /></div>
                        </Link>
                        <Link href="">
                            <div className={styles.icon_box} style={{ backgroundColor: "#3b5998" }}><FacebookRoundedIcon className={styles.icon} /></div>
                        </Link>
                        <Link href="">
                            <div className={styles.icon_box} style={{ backgroundColor: "#cd201f" }}><YouTubeIcon className={styles.icon} /></div>
                        </Link>
                    </div>
                </div>
            </div>
            <p className={styles.copyRight}>© 2025 KM+ Advanced Nano Technology. All Rights Reserved. Muffin group</p>
        </div>
    )
}
export default Footer