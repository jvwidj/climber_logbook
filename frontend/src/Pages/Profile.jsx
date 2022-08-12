import React, { useEffect, useState } from "react";
//@mui
import { Box, Stack, IconButton, Container } from "@mui/material";
//import features addImageButton
import AddImageButton from "../Components/AddImage/addImageButton";
import AddButton from "../Layouts/Dashboard/AddButton";
//
import Page from "../Components/mui/Page";
import axios from "axios";

const Profile = () => {
  const [images, setImages] = useState([]);
  console.log(images);

  useEffect(() => {
    console.log("use effect");
    axios.get("http://localhost:8000/media/images").then((res) => {
      console.log(res);
      setImages(res.data);
    });
  }, []);

  return (
    <Page title="Profile">
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 1, sm: 2 }}
        >
          {/* <AddImageButton /> */}
        </Stack>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 1, sm: 2 }}
        >
          {images.map((image, index) => (
            <Box key={index}>
              <img
                src={"http://localhost:8000/media/image/" + image}
                style={{ width: "300px" }}
                alt=""
              />
            </Box>
          ))}
        </Stack>
      </Container>
    </Page>
  );
};

export default Profile;
