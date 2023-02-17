import './App.css';
import { Grid } from '@mui/material';

import AddressInfo from './components/AddressInfo';
import Header from './components/Header';
import PackageInfo from './components/PackageInfo';
import PackageHistory from './components/PackageHistory';

function App() {

  return (
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
  )
}

export default App
