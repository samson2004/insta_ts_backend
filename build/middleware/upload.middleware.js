"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path_1.default.join(__dirname, '/uploads'));
    },
    filename: (req, file, cb) => {
        if (!file.originalname) {
            return cb(new Error('Invalid file name'), '');
        }
        console.log(file.originalname);
        console.log(file);
        cb(null, Date.now() + path_1.default.extname(file.originalname));
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
console.log("using multer ");
const upload = (0, multer_1.default)({ storage: storage });
exports.default = upload;
