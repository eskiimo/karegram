import mongoose from "mongoose";

const connection = {};

const dbConnect = async () => {
  const url =
    "mongodb+srv://kareem:highspeedlowdrag@cluster0.risomee.mongodb.net/karegram?retryWrites=true&w=majority";
  if (connection.isConnected) return;

  const db = await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log("connected to db..");
  return db;
};
export default dbConnect;
