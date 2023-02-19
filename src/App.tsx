import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';

import { grey, red, } from '@mui/material/colors';
import TrackerLayouts from './components/TrackerLayouts';
import DialogContainer from './components/DialogContainer';
import { useState } from 'react';

declare module '@mui/material/styles' {
  interface Theme { status: { danger: string; }; }

  interface TypographyVariants { packageDetailTitle: React.CSSProperties; }
  interface TypographyVariants { packageInfoDesc: React.CSSProperties; }
  interface TypographyVariants { stepperTitle: React.CSSProperties; }
  interface TypographyVariants { stepperDesc: React.CSSProperties; }
  interface TypographyVariants { titleSub: React.CSSProperties; }
  interface TypographyVariants { tableHeader: React.CSSProperties; }
  interface TypographyVariants { tableRow: React.CSSProperties; }
  interface TypographyVariants { tableRowDetail: React.CSSProperties; }
  interface TypographyVariants { address: React.CSSProperties; }
  interface TypographyVariants { contactTitle: React.CSSProperties; }
  interface TypographyVariants { contactButton: React.CSSProperties; }
  interface TypographyVariants { headerMenu: React.CSSProperties; }

  interface TypographyVariantsOptions { packageDetailTitle: React.CSSProperties; }
  interface TypographyVariantsOptions { packageInfoDesc: React.CSSProperties; }
  interface TypographyVariantsOptions { stepperTitle: React.CSSProperties; }
  interface TypographyVariantsOptions { stepperDesc: React.CSSProperties; }
  interface TypographyVariantsOptions { titleSub: React.CSSProperties; }
  interface TypographyVariantsOptions { tableHeader: React.CSSProperties; }
  interface TypographyVariantsOptions { tableRow: React.CSSProperties; }
  interface TypographyVariantsOptions { tableRowDetail: React.CSSProperties; }
  interface TypographyVariantsOptions { address: React.CSSProperties; }
  interface TypographyVariantsOptions { contactTitle: React.CSSProperties; }
  interface TypographyVariantsOptions { contactButton: React.CSSProperties; }
  interface TypographyVariantsOptions { headerMenu: React.CSSProperties; }

  interface ThemeOptions { status?: { danger?: string; }; }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides { packageDetailTitle: true; }
  interface TypographyPropsVariantOverrides { packageInfoDesc: true; }
  interface TypographyPropsVariantOverrides { stepperTitle: true; }
  interface TypographyPropsVariantOverrides { stepperDesc: true; }
  interface TypographyPropsVariantOverrides { titleSub: true; }
  interface TypographyPropsVariantOverrides { tableHeader: true; }
  interface TypographyPropsVariantOverrides { tableRow: true; }
  interface TypographyPropsVariantOverrides { tableRowDetail: true; }
  interface TypographyPropsVariantOverrides { address: true; }
  interface TypographyPropsVariantOverrides { contactTitle: true; }
  interface TypographyPropsVariantOverrides { contactButton: true; }
  interface TypographyPropsVariantOverrides { headerMenu: true; }
}

const themeAr = createTheme({
  palette: {
    primary: {
      main: red['A700'],
    },
    secondary: {
      main: grey[200],
    },
    // @ts-ignore
    dark: {
      main: grey[900],
      light: grey[200]
    }
  },
  typography: {
    fontFamily: "Cairo",
    // @ts-ignore
    packageDetailTitle: {
      fontFamily: "Cairo",
      fontSize: 14,
      fontWeight: 600
    },
    packageInfoDesc: {
      fontFamily: "Cairo",
      fontSize: 18,
      fontWeight: 700
    },
    stepperTitle: {
      fontFamily: "Cairo",
      fontSize: 14,
      fontWeight: 800
    },
    stepperDesc: {
      fontFamily: "Cairo",
      fontSize: 20,
      fontWeight: 500
    },
    titleSub: {
      fontFamily: "Cairo",
      fontSize: 16,
      fontWeight: 600
    },
    tableHeader: {
      fontFamily: "Cairo",
      fontSize: '1rem',
      fontWeight: 800,
    },
    tableRow: {
      fontFamily: "Cairo",
      fontSize: 14,
      fontWeight: 600
    },
    tableRowDetail: {
      fontFamily: "Cairo",
      fontSize: 14,
      fontWeight: 700
    },
    address: {
      fontFamily: "Cairo",
      fontSize: 20,
      fontWeight: 500
    },
    contactTitle: {
      fontFamily: "Cairo",
      fontSize: 16,
      fontWeight: 700
    },
    contactButton: {
      fontFamily: "Cairo",
      fontSize: 14,
      fontWeight: 500
    },
    headerMenu: {
      fontFamily: "Cairo",
      fontSize: 16,
      fontWeight: 700
    },
    h1: {
      fontSize: 2
    },
  }
});




function App() {
  const [modelOpen, setModelOpen] = useState(true)

  const data = useSelector((state: any) => state.dataReducer);

  return (
    <ThemeProvider theme={themeAr}>

      <DialogContainer modelOpen={modelOpen} setModelOpen={setModelOpen} />

      {data.url ? (
        <TrackerLayouts setModelOpen={setModelOpen} />
      ) : null}
    </ThemeProvider>

  )
}

export default App
