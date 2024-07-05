"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageController = exports.uploadImageController = void 0;
const image_repository_1 = require("../repository/image.repository");
const path_1 = __importDefault(require("path"));
const uploadImageController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    const allowedminetype = ['image/jpg', 'image/png', 'image/gif'];
    console.log(file === null || file === void 0 ? void 0 : file.originalname);
    if (file) {
        try {
            const savedimage = yield (0, image_repository_1.createImageRepo)({
                filename: file.filename,
                path: file.path,
                image: { data: file.filename, contentType: 'image/jpg' },
                minetype: file.mimetype,
                size: file.size
            });
            if (savedimage) {
                res.status(200).json({ "data": savedimage });
            }
            else {
                res.status(400).json({ "data": "Error in uploading image" });
            }
        }
        catch (error) {
            console.log('Error in uploading ', error);
            res.status(500).json({ "error": error
            });
        }
    }
    else if (!file) {
        res.status(400).json({ "data": "not uploaded/ no file found" });
        return;
    }
});
exports.uploadImageController = uploadImageController;
const getImageController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imageid = req.params.id;
    try {
        const image = yield (0, image_repository_1.getImageRepo)(imageid);
        if (image) {
            const imagepath = path_1.default.resolve(image.path);
            // const readstream=GridFSBucketReadStream.FILE
            res.sendFile(imagepath);
            res.status(200).json({ "data": image });
        }
        else {
            res.status(400).json({ "data": "image not found" });
        }
    }
    catch (error) {
        res.status(500).json({ "data": "Image not found" });
    }
});
exports.getImageController = getImageController;
