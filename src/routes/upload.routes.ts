import { Router } from "express";
import { Request,Response } from "node-fetch";
import upload from "../middleware/multerdiskstorage.middleware";
import { getdetailedImageController, geturlImageController, uploadImageController } from "../controller/image.controller";

const uploadrouter=Router()


uploadrouter.post('/upload',upload.single('image'),uploadImageController)
uploadrouter.get('/detail/:id',getdetailedImageController);// not in use
uploadrouter.get('/:id',geturlImageController);

export default uploadrouter;