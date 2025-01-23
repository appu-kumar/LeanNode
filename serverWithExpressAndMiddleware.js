
import express from 'express';

const server = express();

// this will be executed before going to route
// server.use((req,res)=>{
//     console.log('middleware');
//     res.send("returning from middle ware");
// })

server.get('/',(req,res)=>{
    console.log("returing from server");
    res.send("returning from server");
})

server.use((req,res,next)=>{                        // if you want to do something before getting product do in middleware ok
    // res.send("middleware at product level")     // ek bar send kar dia then res will be returned from here
    console.log("middleware 1")
    next();    // it will transfer the control to the next middleware , if you are routing to product next() is used only for next middleware ok
})

server.use((req,res,next)=>{
    // res.send("middle 2");
    console.log("middleware 2")
    next();
})

server.get('/product',(req,res)=>{     // product se uper do middleware hai wo pehele chalenge
    res.send("product")
})


server.listen(4000,()=>{
    console.log('server started');
})