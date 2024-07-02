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