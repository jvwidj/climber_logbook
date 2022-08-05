//@mui 
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material'
import { useSelector } from 'react-redux'
// components
import Iconify from '../../../Iconify'
import Scrollbar from '../../../mui/Scrollbar'
//_mock
import account from '../../../../_mock/account'
// ----------------------------------------------------------------------

function SessionItem( session ){
    const { location_id, date, user_id } = session.session
    const { photoURL } = account
    
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Box component="img" alt={user_id} src={photoURL} sx={{ width: 36, height: 36, borderRadius: 1.5, flexShrink: 0 }} />

            <Box sx={{ minWidth: 240, flexGrow:1 }}>
                <Link color="inherit" variant='subtitle2' underline='hover' >
                    {`Climbing at ${location_id}`}
                </Link>

                <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        {date}
                </Typography>

            </Box>
        </Stack>
    )
}


// ----------------------------------------------------------------------
export default function AppRecentActivity () {
    const { sessionList } = useSelector((store) => store.session)


    return (
        <Card >
            <CardHeader title={"Recent Activity"} subheader={""} />

            <Scrollbar>
                <Stack spacing={3} sx={{ p:3, pr:0 }}>
                    {sessionList.slice(0,5).map(session => (
                        <SessionItem key={session.id} session={session} />
                    ))}
                </Stack>
            </Scrollbar>
            
            <Divider />

            <Box sx={{ p: 2, textAlign: 'right' }}>
                <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
                View all
                </Button>
            </Box>

        </Card>
    )
}