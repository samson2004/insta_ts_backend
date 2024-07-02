import e, { Request,Response } from "express";
import imagemodel from "../database/models/image.model";
import { createImageRepo, getImageRepo } from "../repository/image.repository";
import { Iimageinterface } from "../database/interface/image.interface";
import path from "path";


export const uploadImageController=async(req:Request,res:Response)=>{
    const file=req.file;
    console.log(file?.originalname)
    if(file){
        try {
            const savedimage=await createImageRepo({
                filename:file.filename,
                path:file.path,
                minetype:file.mimetype,
                size:file.size
            });
            if(savedimage){
                res.status(200).json({"data":savedimage})
            }
            else{
                res.status(400).json({"data":"Error in uploading image"})
            }
            
        } catch (error) {
            console.log('Error in uploading ',error)
            res.status(500).json({"error":error
            });
        }
    }
    else if(!file){
        res.status(400).json({"data":"not uploaded/ no file found"})
        return;
    }
}

export const  getImageController=async(req:Request,res:Response)=>{
    const imageid=req.params.id as string;
    try {
        const image=await getImageRepo(imageid);
        if(image){
        
            res.sendFile(image.path)
          
            res.status(200).json({"data":
                image
            });
            }
        else{
            res.status(400).json({"data":"image not found"})
        }
    } catch (error) {
        res.status(500).json({"data":"Image not found"})
    }
}