//@mui 
import { Box, Stack, Card, Button, Divider, CardHeader } from '@mui/material'
//
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// components
import Iconify from '../../../Iconify'
import Scrollbar from '../../../mui/Scrollbar'
//
import SessionItem from './SessionItem'

// ----------------------------------------------------------------------


export default function AppRecentActivity () {
    const { sessionList } = useSelector((store) => store.session)
    const navigate = useNavigate()

    const onClickButton = async event => {
        event.preventDefault()
        try {
            //console.log("navigate to activity ")
            navigate("/dashboard/activity")
        } catch (error) {
            
        }
        }

    return (
        <Card >
            <CardHeader title={"Recent Activity"} />

            <Scrollbar>
                <Stack spacing={2} sx={{ p:2, pr:0 }}>
                    {sessionList.slice(0,3).map(session => (
                        <SessionItem key={session.id} session={session} />
                    ))}
                </Stack>
            </Scrollbar>
            
            <Divider />

            <Box sx={{ p: 2, textAlign: 'right' }}>
                <Button 
                    size="small" 
                    color="inherit" 
                    endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}
                    onClick= {onClickButton}
                    >
                View all
                </Button>
            </Box>
        </Card>
    )
}