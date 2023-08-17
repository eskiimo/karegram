import { MongoClient } from "mongodb";
import jwt from "jsonwebtoken";

const createPost = async (req, res) => {
  const url =
    "mongodb+srv://kareem:highspeedlowdrag@cluster0.risomee.mongodb.net/karegram?retryWrites=true&w=majority";

  const client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = client.db();
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.send(403).json({ msg: "authentication failed" });
      return new Error("authentication failed");
    }
    const decodedToken = jwt.verify(token, "jwt-key");
    let userData = { decodedToken };
    console.log("decoding: ", userData);
  } catch (e) {
    console.log("couldn't decode", e);
  }

  let result;
  try {
    let newPost = {
      caption: req.body.caption,
      time: req.body.time,
    };
    result = await db.collection("posts").insertOne(newPost);
    console.log(result);
  } catch (e) {
    console.log(e);
    console.log("couldn't connect to db");
  }
  if (result) {
    res.status(200).json({
      posts: result,
    });
  } else {
    res.status(500).json({
      msg: "something went wrong...",
    });
  }
};

export default createPost;
