import { MongoClient, ObjectId } from "mongodb";

const follow = async (req, res) => {
  if (req.method === "PUT") {
    let other = req.query.id;
    let me = req.body.id;
    console.log(other, me);
    // res.status(200).json({ msg: "got IDs" });
    //     find both and add follows
    const url =
      "mongodb+srv://kareem:highspeedlowdrag@cluster0.risomee.mongodb.net/karegram?retryWrites=true&w=majority";

    const client = await MongoClient.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    const db = client.db();
    let mydata = {};
    try {
      mydata = await db.collection("users").findOne({ _id: new ObjectId(me) });
    } catch (e) {
      console.log("couldn't find me");
    }

    if (mydata) {
      if (mydata.followings.includes(other)) {
        res.status(201).json({ msg: "already following" });
      }
      mydata.followings.push(other);
      await db
        .collection("users")
        .findOneAndUpdate(
          { _id: new ObjectId(me) },
          { $set: { followings: mydata.followings } },
          (err, res) => {
            if (err) console.log(err);
            res.send(203).json({ updated: mydata });
          }
        );
    }
  }
  res.json({ msg: "didn't add" });
};

export default follow;
