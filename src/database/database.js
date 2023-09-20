import mongoose from "mongoose";
import "dotenv/config";

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI);

const ConnectionData = mongoose.connection;

ConnectionData.once("open", () => {
  console.log("BD conectada");
});
