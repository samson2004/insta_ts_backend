import mongoose,{Schema,Document} from "mongoose";  
import { Iimageinterface } from "../interface/image.interface";

const imageschema=new Schema<Iimageinterface>({
    filename:{type:String,required:true},
    path:{type:String,required:true},
    minetype:{type:String,required:true},
    size:{type:Number,required:true},
    createdAt:{type:Date,default:Date.now},
    image:{data:Buffer,contentType:String},
})


const imagemodel=mongoose.model<Iimageinterface>('imagemodel',imageschema)
export default imagemodel