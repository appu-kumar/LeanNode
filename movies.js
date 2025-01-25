
import movieRouter from './movies.router.js'
import express from 'express';
import connection from './db/connection.js';

const server = express();

// inbuilt middleware that converts body in json and put it into req.body
server.use(express.json());

// binding this middleware with movieRouter  in movieRouter write what you want with this middleware.
server.use(movieRouter);

// server.use('/actor',actorRouter);    // we can give the starting path to the actorRouter ok

server.listen(6000,async ()=>{
    try{
    await connection;
    console.log('db connected successfully');
    }
    catch(error){
        console.log("db not connected", error);
    }
    console.log("server started ");
})