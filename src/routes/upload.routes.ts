import { Router } from "express";
import { Request,Response } from "node-fetch";
import upload from "../middleware/multerdiskstorage.middleware";
import { deleteImageController, getdetailedImageController, geturlImageController, uploadImageController } from "../controller/image.controller";

const uploadrouter=Router()


uploadrouter.post('/upload',upload.single('image'),uploadImageController)
uploadrouter.get('/detail/:id',getdetailedImageController);
uploadrouter.get('/:id',geturlImageController);
uploadrouter.delete('/delete/:id',deleteImageController);

export default uploadrouter;