import express from "express";
import { connection } from "./db/connection.js";
import { userModel } from "./Models/movies.model.js";
import jwt from "jsonwebtoken";
import argon2  from "argon2";
const server = express();
const PORT = 5000;
const secretKey = "2k18se035";

// Inbuilt middleware that converts the body data into json and put into req.body
server.use(express.json());

server.post("/signup", async (req, res) => {
  console.log("aaya hai kya")
  const { name, email, password,role,age } = req.body;
  console.log(req.body)
  const hashedPassword = await argon2.hash(password);
  
   await userModel.insertMany({ name, email, hashedPassword,role,age});
  res.status(200).send("User signed up successfully");
});
// authenticate yourself and then get authorization
// Check login  req.body credentials with db credentials and also create the jwt token , Routes without jwt token are known as public route
server.post("/login", async (req, res) => {
  const { email, password} = req.body;
 
  const user = await userModel.findOne({ email: email });
  if (!user) {
    res.status(401).send("Invalid credentials");
  }

  if (!argon2.verify(user?.hashedPassword,password)) {
    res.status(401).send("Invalid credentials");
  }

  // some payload and secretKey to encode and decode
  const token = jwt.sign(
    {
      id: user._id,
      role:user.role,
    },
    secretKey
  );

  res.send({
    message: "User Logged in successfully",
    token: token,
  });
});

// Authorization after Authentication
// All router below this middleware are protected by jwt token , also known as private route.
server.use((req, res, next) => {
  const token = req.headers.autherization;
  // console.log('hiiiii',token)

  if (!token) {
    return res.status(401).send("User is an unauthorized");
  }
   console.log('hi')
  // decoding the token
  try {
    const decode = jwt.verify(token, secretKey);
    if(decode.role==='admin' || decode.role==='student'){
       return  next();   // go to access profile or anything else
    }
    else{
        return res.status(401).send('User is not valid');
    }
    
  } catch (error) {
    return res.status(403).send("Invalid token");
  }
});

server.get("/profile", (req, res) => {
  return res.send("private route authenticated by jwt token okk");
});

server.listen(PORT, async () => {
  try {
    await connection;
  } catch (error) {
    console.log("connection error");
  } finally {
    console.log("server started at: " + PORT);
  }
});
