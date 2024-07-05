import { Router } from "express";
import { Request,Response } from "node-fetch";
import upload from "../middleware/multerdiskstorage.middleware";
import { getImageController, uploadImageController } from "../controller/image.controller";

const uploadrouter=Router()


uploadrouter.post('/upload',upload.single('image'),uploadImageController)
uploadrouter.get('/:id',getImageController);

export default uploadrouter;