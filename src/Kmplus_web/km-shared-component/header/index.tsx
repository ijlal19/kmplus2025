'use client'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import ListItemButton from '@mui/material/ListItemButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import { Link, useMediaQuery } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import styles from './index.module.scss';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import * as React from 'react';


const Header = () => {
    const isMobile = useMediaQuery('(max-width:768px)');

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const navItems = [
        { text: 'HOME', url: '/' },
        { text: 'ABOUT', url: '/about' },
        { text: 'SOLUTIONS', url: '/solutions' },
        { text: 'PRODUCTS', url: '/shop' },
        { text: 'ONLINE CERTIFICATE', url: '/certificate' },
        { text: 'CONTACT US', url: '/contact' }
    ];

    const DrawerList = (
        <Box sx={{ width: 250, display: isMobile ? "flex" : 'none' }} className={styles.drawer} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {navItems.map((items, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <Link
                                href={items.url}
                                underline="none"
                                color="inherit"
                                sx={{ width: '100%', display: 'block', padding: '8px 16px' }}
                                target="_self" // or "_blank" for new tab
                            >
                            <ListItemText primary={items.text} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div className={styles.header_main}>
            <Drawer open={open} onClose={toggleDrawer(false)} >
                {DrawerList}
            </Drawer>
            <div className={styles.container} style={{ display: isMobile ? 'none' : "flex" }}>
                <div className={styles.nav_box}>
                    <Link href="/" className={styles.p}>
                        <p className={styles.p}>HOME</p>
                    </Link>
                </div>
                <div className={styles.nav_box}>
                    <Link href="/about" className={styles.p}>
                        <p className={styles.p}>ABOUT</p>
                    </Link>
                </div>
                <div className={styles.nav_box}>
                    <Link href="/shop" className={styles.p}>
                        <p className={styles.p}>PRODUCTS</p>
                    </Link>
                </div>
                <div className={styles.nav_box}>
                    <Link href="/contact" className={styles.p}>
                        <p className={styles.p}>CONTACT US</p>
                    </Link>
                </div>
            </div>
            <div className={styles.header_links_box}>
                <div className={styles.input_box} style={{ display: isMobile ? 'none' : "flex" }}>
                    <span className={styles.search_icon}><SearchIcon className={styles.icon} /></span>
                    <input type="text" className={styles.input} />
                </div>
                <div className={styles.Logo_box}>
                    <img src='https://biosurgeasia.com/wp-content/uploads/2023/09/biosurge-logo-1.png' alt="" className={styles.logo} />
                </div>
                <div className={styles.icon_section} >
                    <Link href=""><div className={styles.icon_box} style={{ backgroundColor: "#25d366", display: isMobile ? 'none' : "flex" }}><WhatsAppIcon className={styles.icon} /></div></Link>
                    <Link href=""><div className={styles.icon_box} style={{ backgroundColor: "#3b5998", display: isMobile ? 'none' : "flex" }}><FacebookRoundedIcon className={styles.icon} /></div></Link>
                    <Link href=""><div className={styles.icon_box} style={{ backgroundColor: "#cd201f", display: isMobile ? 'none' : "flex" }}><YouTubeIcon className={styles.icon} /></div></Link>
                    <div className={styles.icon_box} onClick={toggleDrawer(true)} style={{ backgroundColor: "transparent", display: isMobile ? 'flex' : "none" }}><MenuIcon className={styles.icon} /></div>
                </div>
            </div>
        </div>
    )
}
export default Header
