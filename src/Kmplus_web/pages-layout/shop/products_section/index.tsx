'use client';
import React, { useState } from "react";
import styles from './index.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import { Product_Category, Solution ,Product_Data } from './data';
import { useMediaQuery } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Shop_Card from "./card";

const Product_Section = () => {
    const IsMobile = useMediaQuery('(max-width:768px)');
    const [ShowFilter, setShoeFilter] = useState(false)

    const showFilter = () => {
        setShoeFilter(!ShowFilter)
    }

    return (
        <div className={styles.main}>
            <div className={styles.filter_section}>
                <div className={styles.input_for_mobile} style={{ display: IsMobile ? "flex" : "none" }}>
                    <div className={styles.input_box} style={{ display: IsMobile ? "flex" : "none" }}>
                        <input type="text" className={styles.input} placeholder="Search..." />
                        <span className={styles.search_icon}><SearchIcon className={styles.icon} /></span>
                    </div>
                    <button className={styles.btn1} onClick={showFilter} >Filter <FilterAltIcon /></button>
                </div>
                <h2 className={styles.filter_heading} style={{ display: IsMobile ? "none" : "block" }} >Filter</h2>
                <div className={styles.input_box} style={{ display: IsMobile ? "none" : "flex" }}>
                    <input type="text" className={styles.input} placeholder="Search..." />
                    <span className={styles.search_icon}><SearchIcon className={styles.icon} /></span>
                </div>
                <div className={styles.Product_box} style={{ display: IsMobile ? ShowFilter ? "block" : "none" : "block" }} >
                    <h1 className={styles.heading}>Product Category</h1>
                    {
                        Product_Category.map((e, i) => {
                            return (
                                <div className={styles.filter_input_box} key={i} >
                                    <input type="checkbox" className={styles.input} /><p className={styles.text} >{e}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.Product_box} style={{ display: IsMobile ? ShowFilter ? "block" : "none" : "block" }} >
                    <h1 className={styles.heading}>Solution to</h1>
                    {
                        Solution.map((e, i) => {
                            return (
                                <div className={styles.filter_input_box} key={i} >
                                    <input type="checkbox" className={styles.input} /><p className={styles.text} >{e}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <button className={styles.btn} style={{ display: IsMobile ? ShowFilter ? "block" : "none" : "block" }} >Clear Filters</button>
            </div>
            <div className={styles.Card_section}>
                {
                    Product_Data.map((e , i)=>{
                        return(
                            <div key={i}>
                                <Shop_Card title={e.title} image={e.image} product_uses={e.product_uses} />
                            </div>
                        )
                    })
                }
            </div> 
        </div>
    )
}
export default Product_Section