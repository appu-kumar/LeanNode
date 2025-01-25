import express from "express";

const server = express();

server.use(express.json()); // This(inbuilt middleware) converts  req.body into json

server.post("/product", (req, res) => {
  console.log(req.body);
  res.send("data added successfully");
});

server.listen(6000, () => {
  console.log("server started at 6000");
});
