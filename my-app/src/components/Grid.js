import { Typography } from '@mui/material';
import {makeStyles} from '@mui/styles'
import React from 'react'
import CustomButton from './CustomButton';

const styles = makeStyles({
    wrapper:{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "0 5rem 0 5rem",
    },
    item: {
        paddingTop: "1rem"
    }
})

function Grid(props) {
    const {icon, title, buttonTitle} = props;
    const classes = styles();
        
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>{icon}</div>
            <Typography className={classes.item} variant="h5" color='secondary'>{title}</Typography>
            <div className={classes.item}>
                <CustomButton text={buttonTitle}></CustomButton>
            </div>
        </div>
    )
}

export default Grid
