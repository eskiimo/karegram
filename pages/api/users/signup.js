import { MongoClient } from "mongodb";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  const fullname = req.body.fullname;
  const username = req.body.username;
  const password = req.body.password;
  const repass = req.body.repass;

  const url =
    "mongodb+srv://kareem:highspeedlowdrag@cluster0.risomee.mongodb.net/karegram?retryWrites=true&w=majority";

  const client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = client.db();
  let hasUser;
  try {
    hasUser = await db.collection("users").findOne({ username: username });
  } catch (e) {
    console.log("e");
  }

  if (hasUser) {
    console.error("user already exists");
    res.json({ msg: "user already exists try another username" });
    return;
  }

  let newUser = {
    fullname,
    username,
    password,
    repass,
    followers: [],
    followings: [],
    posts: [],
  };
  let result;
  try {
    result = await db.collection("users").insertOne(newUser);
    console.log(result.insertedId, "created");
  } catch (e) {
    console.log("couldn't add to db...");
  }

  let token;

  try {
    token = jwt.sign(
      {
        userId: result.insertedId,
        username: newUser.username,
      },
      "jwt-key",
      { expiresIn: "1h" }
    );
  } catch (e) {
    console.log("didn't generate jwt ", e);
    res.status(500).json({ meg: "didn't generate token" });
  }
  res.json({
    msg: "new user created",
    token: token,
    userId: result.insertedId,
  });
};

export default signup;
