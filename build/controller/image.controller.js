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
exports.deleteImageController = exports.geturlImageController = exports.getdetailedImageController = exports.uploadImageController = void 0;
const image_repository_1 = require("../repository/image.repository");
const path_1 = __importDefault(require("path"));
const uploadImageController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const file = req.file;
    const imagedetail = req.body;
    const allowedminetype = ['image/jpg', 'image/png', 'image/gif'];
    console.log(file === null || file === void 0 ? void 0 : file.originalname);
    if (file) {
        try {
            const savedimage = yield (0, image_repository_1.createImageRepo)({
                filename: file.filename,
                path: file.path,
                image: { data: file.filename, contentType: 'image/jpg' || 'image/png' || 'image/gif' },
                minetype: file.mimetype,
                size: file.size,
                title: (_a = imagedetail.title) !== null && _a !== void 0 ? _a : "",
                content: (_b = imagedetail.content) !== null && _b !== void 0 ? _b : "",
                likes: [],
                uploadedAt: Date.now().toString()
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
const getdetailedImageController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imageid = req.params.id;
    try {
        const image = yield (0, image_repository_1.getImageRepo)(imageid);
        if (image) {
            const imagepath = path_1.default.resolve(image.path);
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
exports.getdetailedImageController = getdetailedImageController;
const geturlImageController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imageid = req.params.id;
    try {
        const image = yield (0, image_repository_1.getImageRepo)(imageid);
        if (image) {
            const imagepath = path_1.default.resolve(image.filename);
            const filename = image.filename;
            console.log(filename);
            res.sendFile(imagepath);
            res.status(200).json({ "url": `http://localhost:3000/uploads/${filename}` });
        }
    }
    catch (error) {
        res.status(500).json({ "data": "Image not found" });
    }
});
exports.geturlImageController = geturlImageController;
const deleteImageController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imageid = req.params.id;
    console.log(imageid);
    try {
        const success = yield (0, image_repository_1.deleteImageRepo)(imageid);
        if (success) {
            res.status(200).json({ "data": "Imagemodal deleted" });
        }
        else {
            res.status(400).json({ "data": "Imagemodal not found " });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ "data": "not deleted " });
    }
});
exports.deleteImageController = deleteImageController;
