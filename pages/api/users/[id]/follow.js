import { MongoClient } from "mongodb";

const follow = async (req, res) => {
  console.log("got to follow route");
  if (req.method === "PUT") {
    let other = req.query.id;
    let me = req.body.id;
    console.log(other, me);
    res.status(200).json({ msg: "got IDs" });
    //     find both and add follows
  }
};

export default follow;
