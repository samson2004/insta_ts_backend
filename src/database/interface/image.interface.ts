import { Document } from "mongodb";

export interface Iimageinterface  extends Document{
    filename:string,
    path:string,
    minetype:string,
    size:number,
    title:String,
    content:String,
    likes:String[],
    uploadedAt:String

}