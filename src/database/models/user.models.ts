import mongoose,{Schema,Document} from "mongoose";  
import { IuserInterface } from "../interface/user.interface";

const userschema=new Schema<IuserInterface>({
    avatarfilename:{type:String,required:false},
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phonenumber:{type:Number,required:false},
    username:{type:String,required:true},
    birthday:{type:String,required:true},
    posts:{type:[String],default:[]},
    following:{type:[String],default:[]},
    followers:{type:[String],default:[]},
    createdAt:{type:String,required:true}

})

const usermodel=mongoose.model<IuserInterface>('usermodel',userschema)
export default usermodel;
