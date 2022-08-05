import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent } from '@mui/material';
// utils
//import { fDate } from '../../../utils/formatTime';
//
//import SvgIconStyle from '../../../components/SvgIconStyle';
import Iconify from '../../../Iconify';
import MOCK from '../../../../_mock/session';


// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 2 / 4)',
});

const TitleStyle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  left: theme.spacing(2),
  bottom: theme.spacing(-1),
}));

const InfoStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(1),
  color: theme.palette.text.disabled,
}));

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

const ActivityPostCard = ( {post}) => {
    const { location_id, climb, comment, like, date, author } = post
    const { cover} = MOCK
    const POST_INFO = [ 
        {number: comment, icon: 'eva:message-circle-fill'},
        {number: like, icon: 'ant-design:heart-filled'}
    ]

  return (
    <Grid item xs={12} sm={6} md={3}>
    <Card sx={{ position: 'relative' }}>
    <CardMediaStyle
        sx={{
            ...({
              pt: 'calc(100% * 2 / 4)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            })
        }}
        >
        <AvatarStyle 
            alt={"author.name"}
            src={"author.avatarUrl"}
            sx={{
              ...({
                zIndex: 9,
                top: 24,
                left: 300,
                width: 40,
                height: 40,
              })
            }}
            
        />
        <CoverImgStyle alt={cover} src={cover}/>
    </CardMediaStyle>

    <CardContent
        sx={{
            pt: 3,
            ...({
              bottom: 4,
              width: '100%',
              position: 'absolute',
            }),
          }}
    >
        <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
            {date}
          </Typography>

        <TitleStyle
            to="#"
            color="inherit"
            variant="subtitle2"
            underline="hover"
            component={RouterLink}
            sx={{
              ...({ typography: 'h5', height: 60 }),
              ...({
                color: 'common.white',
              }),
            }}
          >
            {location_id}
          </TitleStyle>
          
        <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>{`Climb: ${climb}`}</Typography>


          <InfoStyle>
          {POST_INFO.map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: index === 0 ? 0 : 1.5,
                  ...({
                    color: 'grey.500',
                  }),
                }}
              >
              <Iconify icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} />
              <Typography variant="caption">{info.number}</Typography>
              </Box>
          ))}
        </InfoStyle>
    </CardContent>
    </Card>
    </Grid>
  )
}

export default ActivityPostCard