import { Menu } from '@mui/icons-material';
import { Toolbar, Typography, AppBar, Box, Button, IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles'

interface Props {}

function NavBar(props: Props) {
    const {} = props
    const classes = styles();

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <Menu />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                My Nav Bar
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

const styles: () => { } = makeStyles({
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

export default NavBar
