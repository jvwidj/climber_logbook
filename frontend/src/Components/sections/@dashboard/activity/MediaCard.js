import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Card,
  Grid,
  Avatar,
  Typography,
  CardContent,
} from "@mui/material";
// utils
//import { fDate } from '../../../utils/formatTime';
//
//import SvgIconStyle from '../../../components/SvgIconStyle';
import Iconify from "../../../Iconify";
import MOCK from "../../../../_mock/session";
import axios from "axios";

// ----------------------------------------------------------------------

const CardMediaStyle = styled("div")({
  position: "relative",
  paddingTop: "calc(100% * 2 / 4)",
});

const TitleStyle = styled(Link)({
  height: 44,
  overflow: "hidden",
  WebkitLineClamp: 2,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
});

const InfoStyle = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  marginTop: theme.spacing(1),
  color: theme.palette.text.disabled,
}));

const CoverImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

const MediaCard = ({ post }) => {
  const {
    location_id,
    climb,
    comment,
    like,
    date,
    route_name,
    grade,
    id,
    media,
  } = post;
  const POST_INFO = [
    { number: comment, icon: "eva:message-circle-fill" },
    { number: like, icon: "ant-design:heart-filled" },
  ];

  //URL
  const api = `${process.env.REACT_APP_BACKEND}`;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ position: "relative" }}>
        <CardMediaStyle
          sx={{
            ...{
              pt: "calc(100% * 3 / 4)",
              "&:after": {
                top: 0,
                content: "''",
                width: "100%",
                height: "100%",
                position: "absolute",
                //bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            },
          }}
        >
          <CoverImgStyle
            alt={`${api}/media/image/` + media}
            src={`${api}/media/image/` + media}
          />
        </CardMediaStyle>

        <CardContent
          sx={{
            pt: 3,
            ...{
              bottom: 1,
              width: "100%",
              position: "absolute",
            },
          }}
        >
          <TitleStyle
            to="#"
            color="inherit"
            variant="subtitle2"
            //underline="hover"
            component={RouterLink}
            sx={{
              ...{ typography: "h5", height: 25 },
              ...{
                color: "common.white",
              },
            }}
          >
            {grade}
          </TitleStyle>

          <Typography
            variant="caption"
            sx={{ color: "common.white", display: "block" }}
          >
            {route_name}
          </Typography>

          <InfoStyle>
            {POST_INFO.map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: index === 0 ? 0 : 1.5,
                  ...{
                    color: "grey.500",
                  },
                }}
              >
                <Iconify
                  icon={info.icon}
                  sx={{ width: 16, height: 16, mr: 0.5, color: "common.white" }}
                />
                <Typography variant="caption">{info.number}</Typography>
              </Box>
            ))}
          </InfoStyle>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MediaCard;
