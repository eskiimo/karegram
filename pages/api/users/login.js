import { MongoClient } from "mongodb";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

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

  if (!hasUser) {
    console.error("user does not exist");
    res.json({ msg: "try signing up instead" });
  } else if (!hasUser.password === password) {
    res
      .status(403)
      .json({ msg: "Could not log in, please check your password" });
  }

  let token;

  try {
    token = jwt.sign(
      {
        userId: hasUser._id,
        username: hasUser.username,
      },
      "jwt-key",
      { expiresIn: "1h" }
    );
  } catch (e) {
    console.log("didn't generate jwt ", e);
    res.status(500).json({ meg: "didn't generate token" });
  }
  res
    .status(200)
    .json({ msg: "login successfully", token: token, userId: hasUser._id });
};

export default login;
