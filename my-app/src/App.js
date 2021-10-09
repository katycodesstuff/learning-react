import logo from './logo.svg';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'
import './App.css';
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import Security from '@mui/icons-material/Security'
import EventNote from '@mui/icons-material/EventNote'
import TrendingUp from '@mui/icons-material/TrendingUp'
import ImportExport from '@mui/icons-material/ImportExport'
import Computer from '@mui/icons-material/Computer'
import Http from '@mui/icons-material/Http'

//Colour scheme:
// FDFBE7
// C8A159
// 55432D
// 385D81
// 312541

const theme = createTheme( {
  palette: {
    primary: {
      main: "#C8A159"
    },
    secondary: {
      main: "#385D81"
    }
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 660,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight:'2rem',
    }
  }
})

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace: {
    marginTop: "2.5rem"
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  }
})

function App() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>

        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            At katycodesstuff we are passionate about software!
          </Typography>

          <Typography variant="h5" className={classes.littleSpace} color="primary">
            This is a website created following a tutorial by Code Creative on YouTube.
            It demonstrates a simple React-based application using material UI (now mui).
          </Typography>
        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<Security style={{fill: '#385D81', height: "125", width: "125"}}/>} title="Secure" buttonTitle="Show me more"/>
          <Grid icon={<EventNote style={{fill: '#312541', height: "125", width: "125"}}/>} title="Reliable" buttonTitle="Show me more"/>
          <Grid icon={<TrendingUp style={{fill: '#C8A159', height: "125", width: "125"}}/>} title="Performant" buttonTitle="Show me more"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<ImportExport style={{fill: '#385D81', height: "125", width: "125"}}/>} title="Modular" buttonTitle="Show me more"/>
          <Grid icon={<Computer style={{fill: '#312541', height: "125", width: "125"}}/>} title="Multi-Platform" buttonTitle="Show me more"/>
          <Grid icon={<Http style={{fill: '#C8A159', height: "125", width: "125"}}/>} title="Connected" buttonTitle="Show me more"/>
        </div>

        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
