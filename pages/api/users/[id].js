import { MongoClient, ObjectId } from "mongodb";

const getUserById = async (req, res) => {
  let id = req.query.id;
  console.log("getting id :", id);
  const url =
    "mongodb+srv://kareem:highspeedlowdrag@cluster0.risomee.mongodb.net/karegram?retryWrites=true&w=majority";

  const client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = client.db();
  let identifiedUser;
  try {
    identifiedUser = await db
      .collection("users")
      .findOne({ _id: new ObjectId(id) })
      .then((response) => {
        identifiedUser = response.user;
        res.status(200).json({ user: response });

        return response.user;
      });
  } catch (e) {
    console.log("e:", e);
  }
};

export default getUserById;
