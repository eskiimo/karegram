import { MongoClient } from "mongodb";

const signup = async (req, res) => {
  console.log("registeringggg");
  console.log(req.body);
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
    res.json({ msg: "try another username" });
  } else {
    let newUser = {
      fullname,
      username,
      password,
      repass,
    };
    let result = await db.collection("users").insertOne(newUser);
    console.log(result);
    res.json({ msg: "new user created", user: newUser });
  }
};

export default signup;
