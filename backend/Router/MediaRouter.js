require("dotenv").config({ path: "../.env" });

class MediaRouter {
  constructor(express, knex, jwt, fs) {
    this.express = express;
    this.knex = knex;
    this.jwt = jwt;
    this.fs = fs;
  }

  /** ************** Routes - bind routes ***********************/
  router() {
    let router = this.express.Router();

    router.get("/images", this.getAllImages.bind(this));
    router.get("/image/:name", this.getImage.bind(this));
    router.post("/upload/:climb_id", this.uploadImage.bind(this));

    return router;
  }

  //get allImages
  getAllImages(req, res) {
    let names = this.fs.readdirSync(__dirname + "/uploaded/climb");
    console.log("read all image files");
    res.json(names);
  }

  //get single image
  getImage(req, res) {
    let names = this.fs.readdirSync(__dirname + "/uploaded/climb");
    //console.log("names", names);
    let imageName = names.filter(
      (name) => name.split(".")[0] == req.params.name
    );
    console.log("correct name", imageName);
    // let file = /${req.params.name}\.\w+/;
    // console.log("get image", file);
    res.sendFile(__dirname + "/uploaded/climb/" + req.params.name);
  }

  //upload image
  uploadImage(req, res) {
    const extension = req.files.file.name.split(".")[1];
    console.log("uploading image");

    this.fs.writeFileSync(
      __dirname + "/uploaded/climb/" + req.params.climb_id + "." + extension,
      req.files.file.data
    );

    this.knex("session_climb")
      .where({
        climb_id: req.params.climb_id,
      })
      .update({
        media: `${req.params.climb_id}.${extension}`,
      })
      .then(() => {
        console.log("uploaddd successfulll");
        //res.json(data);
      });
    res.send("upload successful");
  }
}

module.exports = MediaRouter;
