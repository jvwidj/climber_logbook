import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//
import { addSelectedSession } from '../../Redux/SelectedSession' 
import { postSession } from '../../Redux/SessionSlice'
// @mui
import { alpha } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import Iconify from '../../Components/Iconify';



export default function AddButton() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userData } = useSelector((store) => store.auth)
    const [open, setOpen] = useState(null);


    const onClickButton = async event => {
    event.preventDefault()
    setOpen(event.currentTarget);
    setOpen(null);
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
        <>
            <IconButton
                onClick={onClickButton}
                sx={{
                p: 0,
                ...(open && {
                    '&:before': {
                    zIndex: 1,
                    content: "''",
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    position: 'absolute',
                    bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                    },
                }),
                }}
                >
                    <Iconify icon="ant-design:plus-outlined" width={30} height={30} />
                </IconButton>
        </>
    );
}