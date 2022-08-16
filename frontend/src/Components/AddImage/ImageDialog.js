import React, { useState } from "react";
//@mui
import { alpha } from "@mui/material/styles";
import {
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import Iconify from "../Iconify";
import axios from "axios";

const ImageDialog = (props) => {
  //URL
  const api = `${process.env.REACT_APP_BACKEND}`;

  const [open, setOpen] = useState(false);
  const [uploadImage, setUploadImage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    setOpen(event.currentTarget);
    setOpen(false);
    console.log("add image");
    try {
      await axios.post(`${api}/media/upload/` + props.climb_id, uploadImage);
      await axios.get(`${api}/media/images`);
      console.log("update image");
    } catch (error) {
      console.log("upload error", error);
    }
  };

  return (
    <>
      <IconButton
        onClick={handleClickOpen}
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
          width={20}
          height={20}
        />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Upload Media</DialogTitle>
        <DialogContent>
          <DialogContentText>Select file:</DialogContentText>
          <input
            type="file"
            accept="image/*, video/*"
            onChange={(e) => {
              const data = new FormData();
              data.append("file", e.target.files[0]);
              setUploadImage(data);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpload}>Upload</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ImageDialog;
