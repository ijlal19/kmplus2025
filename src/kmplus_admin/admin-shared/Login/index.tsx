'use client'
import {  Button } from "@mui/material";
import styles from './index.module.scss';
import {  FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Cookies from 'js-cookie';

const LoginForm = () => {
    const [Email, setEmail] = useState('');
    const [LoginPassword, setPassword] = useState('')
    const router = useRouter()

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Email === '') {
            alert('Please fill all requbired fields!');
            return;
        } else if (LoginPassword === '') {
            alert('Please fill all required fields!');
            return;
        }

        const obj = {
            email: Email,
            password: LoginPassword
        };
        // jsCookie.set('login_data', JSON.stringify(obj), { expires: 1 });
        Cookies.set('login_data', JSON.stringify(obj), { expires: 1 });
        router.push('/admin/contact-us')
    };


    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleLogin} >
                    <h2 className={styles.heading}><AccountCircleIcon sx={{ fontSize: '30px' }} />Login</h2>
                    <input type="text" placeholder="Email" className={styles.input} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" className={styles.input} onChange={(e) => setPassword(e.target.value)} />
                    <Button className={styles.login_btn} type="submit" >Login</Button>
                </form>
            </div>

        </div>
    )
}

export default LoginForm