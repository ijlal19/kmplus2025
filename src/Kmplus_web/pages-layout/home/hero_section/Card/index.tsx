'use client'
import React from "react";
import styles from './index.module.scss';

interface HeroCardProps {
  title: string;
  description: string;
  background_image: string;
}

const Hero_Card = ({ title, description, background_image }: HeroCardProps) => {
  return (
    <div className={styles.main} style={{ backgroundImage: `url(${background_image})` }}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <button className={styles.btn}>View Solutions</button>
      </div>
    </div>
  );
};

export default Hero_Card;