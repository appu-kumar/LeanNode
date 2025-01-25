import mongoose from "mongoose";

const uri =
  "mongodb+srv://root:root@cluster0.blfaipp.mongodb.net/mytest?retryWrites=true&w=majority&appName=Cluster0";
const connection = mongoose.connect(uri); // it returns promise

export default connection;
