import { model, Schema } from "mongoose";
// created schema 
const movieSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    name:String,
    rating:Number,
    description:String,
    lang:String,
    releaseDate:Date
})

// create model
// 'movie' must be singular, mongoose will convert into plural
const movieModel = model('movie',movieSchema);

export default movieModel;



