//import Header from "./Components/Header";
import NavbarFooter from "./Components/NavbarFooter";

//theme
import ThemeProvider from "./theme";

//Routes
import Router from './router';
import DashboardLayout from "./Layouts/Dashboard/Index";
//
import { useSelector } from "react-redux";


// ----------------------------------------------------------------------

function App() {
  let isAuthenticated = useSelector((store) => store.auth.isAuthenticated)
  return (
    <ThemeProvider>
    
      {isAuthenticated ? <DashboardLayout /> : null}
        <Router />
        {/* <NavbarFooter /> */}
    </ThemeProvider>

  );
}

export default App;
