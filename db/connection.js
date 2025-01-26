import mongoose from "mongoose";
import mysql from "mysql2/promise";

// mongoose
const mongoDbUri =
  "mongodb+srv://root:root@cluster0.blfaipp.mongodb.net/mytest?retryWrites=true&w=majority&appName=Cluster0";
export const connection = mongoose.connect(mongoDbUri); // it returns promise


// mysql2
export const mysqlConnection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "imdb",
  password:"root@123"
});




