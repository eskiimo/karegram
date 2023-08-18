import { MongoClient } from "mongodb";

const getAllUsers = async (req, res) => {
  console.log("called get all users");
  const url =
    "mongodb+srv://kareem:highspeedlowdrag@cluster0.risomee.mongodb.net/karegram?retryWrites=true&w=majority";

  const client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = client.db();
  try {
    await db
      .collection("users")
      .find()
      // .populate("-password")
      .sort()
      .toArray()
      .then((users) => {
        res.status(200).json({ users: users });
        return users;
      });
  } catch (e) {
    console.log("e");
  }
};

export default getAllUsers;
