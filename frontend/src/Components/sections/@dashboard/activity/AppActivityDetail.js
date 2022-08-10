import React from 'react'
//@mui 
import { Box, Stack, Card, Button, Divider, CardHeader } from '@mui/material'
//
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// components
import Iconify from '../../../Iconify'
import Scrollbar from '../../../mui/Scrollbar'
//
import SessionDetail from './SessionDetail'

// ----------------------------------------------------------------------

export default function AppActivityDetail({sx, ...other}){
    const { selectedClimbList } = useSelector((store) => store.selectedSessionClimb)
    const { selectedSession } = useSelector((store) => store.selectedSession)


    return (

        <Card>
            <CardHeader title={"Route List"} />

            <Stack spacing={0.5} sx={{p:1, px:2}}>
                {selectedClimbList.slice(0,5).map(climb => (
                    <SessionDetail key={climb.id} climb={climb} />
                ))}

            </Stack>
        </Card>
    )
}