import React from "react";
import styles from './index.module.scss';
interface HeroCardProps {
    title: string;
    product_uses: string[];
    image: string;
}

const Shop_Card = ({ product_uses, title, image }: HeroCardProps) => {
    return (
        <div className={styles.main}>
            <div className={styles.image_box}>
                <img src={image} alt={title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <p className={styles.heading} >{title}</p>
                <ul className={styles.ul}>
                      {product_uses.map((use, index) => (
                        <li key={index} className={styles.li}>{use}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Shop_Card