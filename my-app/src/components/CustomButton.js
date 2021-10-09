import React from 'react'
import { Button } from '@mui/material'
import { withStyles, makeStyles } from '@mui/styles'

const styles = makeStyles({
    a: {
        color: 'inherit',
        textDecoration: 'inherit',
        'a:hover': {
            color: 'inherit'
        },
        'a:click': {
            color: 'inherit'
        }
    }    
})

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems:"center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0,
        background: "#4f25f7",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s, border-color .3s, color .3s",
        "&:hover": {
            backgroundColor: "#4f25f7"
        }
    },
    label: {
        textTransform: "capitalize"
    }
})(Button);


function CustomButton(props) {
    let {text, href} = props;
    const classes = styles();
    if (!href) {
        href="/";
    }
    return (
        <a className={classes.a} href={`${href}`} target="_blank">
            <StyledButton variant={"contained"}>{text}</StyledButton>
        </a>
    )
}

export default CustomButton
