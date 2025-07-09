'use client'
import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Hero_Card from "./Card";

const Data = [
    {
        background_url: "https://biosurgeasia.com/wp-content/uploads/2023/11/maintenance-car-engine-garage-scaled.jpg",
        background_image: "/kmplusImages/engin_hero.jpg",
        title: "Don’t Risk Engine Damage. Guard Your Ride, Preserve Your Investment!",
        description: "Shield Your Engine, Extend Its Lifespan! Our Proactive Solutions Guard Your Investment, Ensuring Optimal Performance and Durability. Drive With Confidence!"
    },
    {
        background_url: "https://biosurgeasia.com/wp-content/uploads/2023/11/close-up-accelerator-handle-buttons-automatic-transmission-gear-car-car-interior-scaled.jpg",
        background_image: "/kmplusImages/gear.jpg",
        title: "Seeking Superior Transmission Care?",
        description: "Resolve automatic transmission issues effortlessly with KM+ Advanced solutions. Enhance performance, prevent leaks, and ensure smooth gear shifts!"
    },
    {
        background_url: "https://biosurgeasia.com/wp-content/uploads/2023/11/sports-car-driving-asphalt-road-night-generative-ai-scaled.jpg",
        background_image: "/kmplusImages/car_hero.jpg",
        title: "Don’t Let Lackluster Performance Hinder Your Ride or Drain Your Wallet.",
        description: "Don’t Let Engine Inefficiency Diminish Your Drive. Boost Performance, Save Fuel, and Experience Effortless Power with Our Advanced Solutions!"
    }
]

const HeroSection = () => {
    return (
        <div>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {
                    Data.map((e, i) => {
                        return (
                            <SwiperSlide key={i}><Hero_Card title={e.title}  description={e.description} background_image={e.background_image}   /></SwiperSlide>
                        )
                    })
                } 
            </Swiper>
        </div>
    )
}
export default HeroSection