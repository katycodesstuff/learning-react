import React from 'react'
import { BottomNavigation, Typography } from '@mui/material'
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Facebook } from '@mui/icons-material/Facebook'
import { Twitter } from '@mui/icons-material/Twitter'
import { Instagram } from '@mui/icons-material/Instagram'
import { YouTube } from '@mui/icons-material/YouTube'

function Footer() {
    return (
        <BottomNavigation>
            {/* The below won't work for some reason*/}
            {/* <BottomNavigationAction label="Facebook" icon={<Facebook />} />
            <BottomNavigationAction label="Twitter" icon={<Twitter />} />
            <BottomNavigationAction label="Instagram" icon={<Instagram/>} />
            <BottomNavigationAction label="YouTube" icon={<YouTube />} /> */}
            <Typography color="primary">Thanks for looking at my first attempt using React!</Typography>
        </BottomNavigation>
    );
}

export default Footer;
