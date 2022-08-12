import React, { useEffect, useState } from "react";
import { Card, Button, Stack } from "react-bootstrap";
import AddImageButton from "./AddImage/addImageButton";
import ImageDialog from "./AddImage/ImageDialog";
import axios from "axios";

const ClimbCard = ({ id, type, grade, description, route_name }) => {
  const [images, setImages] = useState("");

  /* useEffect(() => {
    console.log("use effect climbing card");
    axios.get("http://localhost:8000/media/image/" + { id }).then((res) => {
      console.log(res);
      setImages(res.data);
    });
  }); */

  return (
    <div>
      <Card className="my-2">
        <Card.Header as="h5">
          {type}
          <ImageDialog climb_id={id} />
        </Card.Header>

        <Card.Body>
          <Card.Title>{grade}</Card.Title>
          <Card.Text>
            <Stack direction="row">
              {route_name} {description}
            </Stack>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
          {/*  <img
            src={"http://localhost:8000/media/image/" + { id }}
            style={{ width: "200px" }}
            alt=""
          /> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ClimbCard;
