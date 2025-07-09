'use client';
import React, { useState } from "react";
import styles from './index.module.scss';
import { Link } from "@mui/material";

const Contact_Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        zip: '',
        state: '',
        contactAbout: 'Booking',
        hearAbout: 'Advertisement',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Submit Form');
    };

    return (
        <div className={styles.main}>
            <h1 className={styles.heading}>Contact Us</h1>
            <p className={styles.text}>We’d love to hear from you! You can use the form below to contact us. Don’t forget to check out our support section for product details and technical info.</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label}>Name <span className={styles.required}>*</span></label>
                <input className={styles.input} type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label className={styles.label}>Email <span className={styles.required}>*</span></label>
                <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label className={styles.label}>Address</label>
                <input className={styles.input} type="text" name="address" value={formData.address} onChange={handleChange} />

                <div className={styles.row}>
                    <div>
                        <label className={styles.label}>Zip Code <span className={styles.required}>*</span></label>
                        <input className={styles.input} type="text" name="zip" value={formData.zip} onChange={handleChange} required />
                    </div>
                    <div>
                        <label className={styles.label}>State <span className={styles.required}>*</span></label>
                        <input className={styles.input} type="text" name="state" value={formData.state} onChange={handleChange} required />
                    </div>
                </div>

                <label className={styles.label}>I&apos;m contacting about <span className={styles.required}>*</span></label>
                <select name="contactAbout" value={formData.contactAbout} onChange={handleChange} required className={styles.input} >
                    <option value="Booking">Booking</option>
                    <option value="Support">Support</option>
                    <option value="Partnership">Partnership</option>
                </select>

                <label className={styles.label}>Where did you hear about our products? <span className={styles.required}>*</span></label>
                <select name="hearAbout" value={formData.hearAbout} onChange={handleChange} required className={styles.input} >
                    <option value="Advertisement">Advertisement</option>
                    <option value="Friend">Friend</option>
                    <option value="Social Media">Social Media</option>
                </select>

                <label className={styles.label}>Message <span className={styles.required}>*</span></label>
                <textarea name="message" value={formData.message} onChange={handleChange} required className={styles.input} />

                <p className={styles.note}  >
                    This site is protected by reCAPTCHA and the Google <Link href="#" style={{ color: "#e83c34", textDecoration: "none" }} >Privacy Policy</Link> and <Link href="#" style={{ color: "#e83c34", textDecoration: "none" }} >Terms of Service</Link> apply.
                </p>

                <button type="submit" className={styles.button}>Send</button>
            </form>
        </div>
    )
}
export default Contact_Form