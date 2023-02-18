import './App.css';
import { createTheme, Grid, ThemeProvider } from '@mui/material';

import AddressInfo from './components/AddressInfo';
import Header from './components/Header';
import PackageInfo from './components/PackageInfo';
import PackageHistory from './components/PackageHistory';
import { green, orange, purple } from '@mui/material/colors';

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography:{
    h1: {
      fontSize: 2
    },

  }
  // ,
  // status: {
  //   danger: orange[500],
  // },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl">
        <Header />
        <PackageInfo />
        <Grid container>
          <Grid item md={8}>
            <div>package history</div>
            <PackageHistory />
          </Grid>
          <Grid item md={2}>
            <div>Adress Info</div>
            <AddressInfo />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>

  )
}

export default App
