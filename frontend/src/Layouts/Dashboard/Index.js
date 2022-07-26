import { useState } from "react";
import { Outlet } from 'react-router-dom'

//material 
import { styled } from '@mui/material/styles';

//
import DashboardNavbar from './DashboardNavbar'
import DashboardSidebar from "./DashboardSidebar";

//---------------------------------------------------------------

/* const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div') ({
    display:'flex',
    minHeight: '100%',
    overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 10,
    paddingBottom: theme.spacing(0),
    [theme.breakpoints.up('lg')] : {
        paddingTop: APP_BAR_DESKTOP + 10,
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(1),
    }
})); */

// -----------------------------------------------------

export default function DashboardLayout() {
    const [open, setOpen ] = useState(false);

    return (
        <>
            <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
            <DashboardSidebar isOpenSidebar= {open} onCloseSidebar= {() => setOpen(false)} />
        </>
    )
}