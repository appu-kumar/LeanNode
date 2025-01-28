import { request } from "express";
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

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        request:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
       type:String,
       enum:['student','teacher','admin'],
       default:'student'
    },
    age:Number,

})

// create model
// 'movie' must be singular, mongoose will convert into plural
export const movieModel = model('movie',movieSchema);

export const userModel = model('user',userSchema);




