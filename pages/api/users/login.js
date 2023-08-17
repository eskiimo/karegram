import { MongoClient } from "mongodb";

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
  } else {
    if (hasUser.password === password) {
      console.log("login successfull");
      res.status(200).json({ token: "token", user: hasUser });
    } else {
      res
        .status(403)
        .json({ msg: "Could not log in, please check your password" });
    }
  }
};

export default login;
