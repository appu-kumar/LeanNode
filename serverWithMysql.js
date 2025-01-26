
import express from 'express';
import movieRouter from './serverWithMysql.router.js';

// create server
const server = express();

// this converts the body data into json and put into the req.body ok
server.use(express.json());

server.get('/',(req,res)=>{
    res.send("Home page");
})

server.use('/movies',movieRouter)


//listen server at port 6000
server.listen(6000,(req,res)=>{
    console.log('server created successfully');
})