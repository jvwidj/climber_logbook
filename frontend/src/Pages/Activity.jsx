import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
//
import Iconify from '../Components/Iconify';
import Page from '../Components/mui/Page';
//
import ListSession from '../Components/ListSession'
import { addSelectedSession } from '../Redux/SelectedSession' 
import { postSession } from '../Redux/SessionSlice'
import ActivityPostCard from '../Components/sections/@dashboard/activity/ActivityPostCard';
//
import MOCK from '../_mock/session';

// ----------------------------------------------------------------------
const SORT_OPTIONS = [
    {value: 'latest', label: 'Latest'},
    {value:'oldest', label:'Oldest'},
    {value:'popular', label:'Popular'},
];

// ----------------------------------------------------------------------


const Activity = () => {
    const { userData } = useSelector((store) => store.auth)
    const { sessionList } = useSelector((store) => store.session);
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //console.log(sessionList)

    const onClickButton = async event => {
        event.preventDefault()
        try {
            const user_id = userData[0].id
            dispatch(postSession(user_id))
            .then((data) => {
            //console.log(data.payload)
            dispatch(addSelectedSession(data.payload))
            //console.log(selectedSession)
            })
            navigate("/location")
        } catch (error) {
            
        }
    }

    return (
        <Page title="Dashboard: Page">
            <Container maxWidth='xl'>
                <Stack direction='row' alignItems='center' justifyContent='space-between' mb={5}>
                    <Typography variant="h4" gutterBottom>
                    Activity
                    </Typography>
                    <Button variant="contained" onClick={onClickButton} startIcon={<Iconify icon="eva:plus-fill" />}>
                        New Session
                    </Button>
                </Stack>

                <Grid container spacing={3}>
                    {/* {POSTS.map((post, index) => (
                        <BlogPostCard key={post.id} post={post} index={index} />
                    ))} */}
                    {sessionList.map(session => (
                        <ActivityPostCard key={session.id} post={session}/>
                    ))}
                </Grid>
                
                <Grid item xs={12} sm={6} md={6}>
                <ListSession />
                TODO: List will be replaced by cards 
                TODO: Able to select activity by user/friend/everyone
                </Grid>

            </Container>
        </Page>
    )
    }

export default Activity