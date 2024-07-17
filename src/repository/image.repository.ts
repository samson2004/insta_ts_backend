import mongoose from "mongoose";
import { Iimageinterface } from "../database/interface/image.interface";
import imagemodel from "../database/models/image.model";

export const createImageRepo=async(image:Iimageinterface):Promise<Iimageinterface>=>{
    try {
        const newimage=new imagemodel(image); 
        return await newimage.save() 
    } catch (error) {
        console.error('Error in creating image',error)
        throw error;
    }
};

export const getImageRepo=async(id:string):Promise<Iimageinterface| null>=>{
    try {
        return await imagemodel.findById(id);
    } catch (error) {
        console.error('Error in getting image',error)
        return null;
    }
}

export const deleteImageRepo=async(_id:String):Promise<boolean>=>{
    try {
        const deleted=await imagemodel.findOneAndDelete({_id:_id});
        if (deleted) {
            return true;
        }
        else{
            return false;
        }
    } catch (error) {
        console.error('Error in deleting imagemodel',error)
        return false;
    }
}