import { Document } from "mongodb";

export interface IuserInterface extends Document{
    avatarfilename:String
    name:String,
    email:String,
    password:String,
    phonenumber:Number,
    username:String,
    birthday:String,
    posts:String[],
    following:String[],
    followers:String[],
    createdAt:String  
}