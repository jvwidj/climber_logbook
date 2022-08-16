import React, { useState } from "react";
//@mui
import { alpha } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import Iconify from "../Iconify";
import axios from "axios";

const AddImageButton = () => {
  const [open, setOpen] = useState(null);
  const [uploadImage, setUploadImage] = useState("");

  //URL
  const api = `${process.env.REACT_APP_BACKEND}`;

  const onClickButton = async (event) => {
    event.preventDefault();
    setOpen(event.currentTarget);
    setOpen(null);
    console.log("add image");
    try {
      await axios.post(`${api}/upload`, uploadImage);
    } catch (error) {}
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const data = new FormData();
          data.append("file", e.target.files[0]);
          setUploadImage(data);
        }}
      />
      <IconButton
        onClick={onClickButton}
        sx={{
          p: 0,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Iconify
          icon="ant-design:video-camera-add-outlined"
          width={30}
          height={30}
        />
      </IconButton>
    </>
  );
};

export default AddImageButton;
