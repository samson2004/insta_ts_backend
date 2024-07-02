import { Router } from "express";
import { Request,Response } from "express";


const liverouter=Router()

liverouter.get("/",(req:Request,res:Response)=>{
    res.json({"data":"server is live"})
});

export default liverouter