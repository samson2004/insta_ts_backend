import { error } from "console";
import multer from "multer";
import path from "path";

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join('C:/Users/SAM/Desktop/ts_insta_backend/uploads'));
    },
    filename:(req,file,cb)=>{
        if(!file.originalname){
            return cb(new Error('Invalid file name'),'' )
        }
        console.log(file.originalname)
        console.log(file)
        cb(null,Date.now()+path.extname(file.originalname));
    }
});

// const filefilter=(req:Express.Request,file:Express.Multer.File,cb:multer.FileFilterCallback)=>{
//     const allowedminetype=['image/jpg','image/png','image/gif']
//     if(allowedminetype.includes(file.mimetype)){
//         cb(null,true);
//     }
//     else{
//         cb(null,false);
//     }
// };
// ,fileFilter:filefilter

console.log("using multer diskstorage ")
const upload=multer({storage:storage});

export default upload;