import React from 'react'
import { BottomNavigation } from '@mui/material'
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material'

function Footer() {
    return (
        <BottomNavigation style={{ backgroundColor: '#385D81'}}>
            <BottomNavigationAction label="Facebook" icon={<Facebook style={{fill: "secondary"}}/>} />
            <BottomNavigationAction label="Twitter" icon={<Twitter style={{fill: "secondary"}}/>} />
            <BottomNavigationAction label="Instagram" icon={<Instagram style={{fill: "secondary"}}/>} />
            <BottomNavigationAction label="YouTube" icon={<YouTube style={{fill: "secondary"}}/>} />
        </BottomNavigation>
    );
}

export default Footer;
