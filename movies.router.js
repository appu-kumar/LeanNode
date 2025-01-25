
import {Router} from 'express';
import movieModel from './Models/movies.model.js';
const movieRouter = Router();


movieRouter.post('/movie',(req,res)=>{
    const movie = req.body;
    movieModel.insertMany(movie);
    console.log(req.body)
    res.send("movie added successfully");
})

movieRouter.get('/',(req,res)=>{
    console.log("data got successfully");
    res.send('data sent');
})

export default movieRouter;