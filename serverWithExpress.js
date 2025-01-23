// express is http server's framework 
import express from 'express';

// server created
const server = express();

server.get('/',(req,res)=>{
    console.log("hi")
    res.end('hi')
})


// send() instead of end() recommended 
server.get('/bye',(req,res)=>{
    console.log("bye")
    res.end('bye')
})

server.post('/add',(req,res)=>{
    console.log("added")
    res.end("added");

})
server.delete('/del',(req,res)=>{
    console.log('deleted');
    res.end("deleted");
})


// dynamic routes
server.get('/user/:userId',(req,res)=>{
    const id = req.params.userId;
    res.send(`This is the userId ${id}`);
})

server.get('/product',(req,res)=>{
     console.log(Object.keys(req.query));
     res.send(req.query);      
     //res.send([1,2,3,4])     // any kind of the data we can send with send() ok
})

// listening at 3000 port
const port = 3000;
const hostname = 'localhost'
server.listen(port,hostname,()=>console.log('server started with express'))