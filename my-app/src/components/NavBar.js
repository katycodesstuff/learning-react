import React from 'react'
import CustomButton from './CustomButton'
import logo from '../logo.svg'
//import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@mui/material'
import {makeStyles} from '@mui/styles'
import EmojiNatureTwoToneIcon from '@mui/icons-material/EmojiNatureTwoTone';

const styles = makeStyles({
    bar: {
        paddingTop: "1.15rem",
        backgroundColor: "#FDFBE7",
        '@media (max-width:780px)': {
            flexDirection: "column"
        }
    },
    logo: {
        width:"15%",
        '@media (max-width:780px)':{
            display: "none"
        }
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#312541"
        },
        '@media (max-width:780px)': {
            paddingBottom: "1rem"
        }
    }
});

function NavBar() {
    const classes = styles();

    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
            <EmojiNatureTwoToneIcon className={classes.logo} fontSize="large" color='secondary'/>
            {/* <img src={logoMobile} className={classes.logoMobile}/> */}

        <Typography variant="h6" className={classes.menuItem} color='secondary'>
            About
        </Typography>
        <Typography variant="h6" className={classes.menuItem} color='secondary'>
            Projects
        </Typography>
        <Typography variant="h6" className={classes.menuItem} color='secondary'>
            Demo
        </Typography>
        <Typography variant="h6" className={classes.menuItem} color='secondary'>
            Contact Us
        </Typography>
        <CustomButton text="Follow me on Twitter!" href="https://twitter.com/KatyCodesStuff"/>
        </Toolbar>
    )
}

export default NavBar
