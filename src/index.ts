import express, { Express } from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser  from "body-parser";
import mongoose from "mongoose";
import router from "./routes/route";
import path from "path";
import fs from "fs";
import { GridFSBucket, MongoClient } from "mongodb";
import imagemodel from "./database/models/image.model";
const app:Express=express();
const server =http.createServer(app);

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set("PORT",3000)
app.set("BASE_URL","localhost")

dotenv.config()




const uploadDir=path.join(__dirname,'../uploads');
app.use('/uploads', express.static('C:/Users/SAM/Desktop/ts_insta_backend/uploads'));

app.use("/api/insta/v1",router)

if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir) 
}


const mongourl=process.env.MONGO_DB_URL||'mongodb+srv://dbusername:dbpassword@instaclonedb.dnltgqi.mongodb.net/?retryWrites=true&w=majority&appName=instaclonedb'
if(!mongourl){
    console.error('mongourl not defined');
    process.exit(1)
}
mongoose.connect(mongourl,{enableUtf8Validation: false}).then(async()=>{
    console.log("connected to mongodb")

    const client=new MongoClient(mongourl);
    await client.connect();
    console.log('client is connected');
    const db=client.db();
    const bucket=new GridFSBucket(db);

    app.locals.bucket=bucket;


}).catch((error)=>{
    console.log(error)
    console.log("Error in connection with mongodb")
})



//start server

try{
    const port:Number=app.get("PORT");
    const baseurl:String=app.get("BASE_URL");
    server.listen(port,():void=>{
        console.log(`server is running at ${baseurl}:${port}`)
    })
}catch(error){
        console.log("error in server")
}

export default server


