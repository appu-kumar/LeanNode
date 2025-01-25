import express from 'express';
import {logger} from './Logger.js'

const server = express();

server.use(express.json());    // inbuilt middleware that converts post data to json okay

// auth part
server.use((req,res,next)=>{
    console.log('Authentication done');
    next();
})

// logger of all routes
server.use((req,res,next)=>{
    logger(`product routes reached at ${new Date()}\n`);
    logger(`product route is very expensive\n`)
    next();
})



server.get('/product',(req,res)=>{
    res.send("added the value")
})




server.listen(6000,()=>{
    console.log("server started");
})