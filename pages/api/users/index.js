import { MongoClient } from "mongodb";

const users = async (req, res) => {
  const url =
    "mongodb+srv://kareem:highspeedlowdrag@cluster0.risomee.mongodb.net/karegram?retryWrites=true&w=majority";

  const client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = client.db();
  let users;
  try {
    users = await db.collection("users").find().sort().toArray();
  } catch (e) {
    console.log("e");
  }

  res.status(200).json({ users: users });
};

export default users;
