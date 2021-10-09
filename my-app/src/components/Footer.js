import React from 'react'
import { BottomNavigation, Typography } from '@mui/material'
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material'

function Footer() {
    return (
        <BottomNavigation>
            <BottomNavigationAction label="Facebook" icon={<Facebook style={{fill: "#3b5998"}}/>} />
            <BottomNavigationAction label="Twitter" icon={<Twitter style={{fill: "#1da1f2"}}/>} />
            <BottomNavigationAction label="Instagram" icon={<Instagram style={{fill: "#c13584"}}/>} />
            <BottomNavigationAction label="YouTube" icon={<YouTube style={{fill: "#c4302b"}}/>} />
            <Typography color="primary">Thanks for looking at my first attempt using React!</Typography>
        </BottomNavigation>
    );
}

export default Footer;
