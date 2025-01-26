import { Router } from "express";
import { mysqlConnection } from "./db/connection.js";

const movieRouter = Router();

movieRouter.get("/:id", (req, res) => {
  res.send("single movie");
});


// Read
movieRouter.get("/", async (req, res) => {
    try {
        const [results, fields] = await mysqlConnection.query(
          `select * from movies`
        );
        res.status(200).send(results);
      } catch (error) {
        res.status(500).send("Internal Server Error");
      }
});


// Add
movieRouter.post("/addMovie", async (req, res) => {
  const { title, name, rating } = req.body;

  try {
    const [results, fields] = await mysqlConnection.query(
      `insert into movies(title,name,rating) values('${title}','${name}',${rating})`
    );
    // console.log("results", results);
    // console.log("fields", fields);
    res.status(201).send("movie added successfully");
  } catch (error) {
    console.log("unable to execute the query");
    res.status(500).send("Internal Server Error");
  }
});


// Delete
movieRouter.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;
    console.log(id,req.params);
    try {
      const [results, fields] = await mysqlConnection.query(
        `delete from movies where id = ${id}`
      );
      res.status(201).send("movie deleted successfully");
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  });


  // update 
  movieRouter.put("/update", async (req, res) => {
      const {title,name,rating,id} = req.body;


  // Validate input
  if (!title || !name || typeof rating !== "number" || !id) {
    return res.status(400).send("Invalid input data");
  }

    try {
      const [results, fields] = await mysqlConnection.query(
        `update movies set title='${title}', name='${name}', rating=${rating} where id = ${id}`
      );
      res.status(201).send("movie updated successfully");
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  });






export default movieRouter;
