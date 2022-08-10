//import Header from "./Components/Header";
import NavbarFooter from "./Components/NavbarFooter";

//theme
import ThemeProvider from "./theme";
//@mui
import { styled } from '@mui/material/styles'

//Routes
import Router from './router';
import DashboardLayout from "./Layouts/Dashboard/Index";
//
import { useSelector } from "react-redux";


// ----------------------------------------------------------------------
const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div') ({
    display:'flex',
    minHeight: '100%',
    overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 2,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 10,
    paddingBottom: theme.spacing(0),
    [theme.breakpoints.up('sm')] : {
        paddingTop: APP_BAR_DESKTOP + 10,
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(1),
    }
}));

// -----------------------------------------------------

function App() {
  let isAuthenticated = useSelector((store) => store.auth.isAuthenticated)
  return (
    <ThemeProvider>
      <RootStyle>
        {isAuthenticated ? <DashboardLayout /> : null}
        <MainStyle>
          <Router />

        </MainStyle>
      </RootStyle>      

    </ThemeProvider>

  );
}

export default App;
