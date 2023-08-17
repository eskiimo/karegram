import { MongoClient } from "mongodb";

const getPosts = async (req, res) => {
  const url =
    "mongodb+srv://kareem:highspeedlowdrag@cluster0.risomee.mongodb.net/karegram?retryWrites=true&w=majority";

  const client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = client.db();
  let result;
  try {
    result = await db.collection("posts").find().sort().toArray();
    console.log("found ", result.length, "posts");
  } catch (e) {
    console.log(e);
    console.log("couldn't connect to db");
  }

  if (result) {
    res.status(200).json({
      msg: "posts list",
      posts: result,
    });
  } else {
    res.status(500).json({
      msg: "something went wrong...",
    });
  }
};

export default getPosts;
