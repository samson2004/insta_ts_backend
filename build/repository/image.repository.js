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
exports.deleteImageRepo = exports.getImageRepo = exports.createImageRepo = void 0;
const image_model_1 = __importDefault(require("../database/models/image.model"));
const createImageRepo = (image) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newimage = new image_model_1.default(image);
        return yield newimage.save();
    }
    catch (error) {
        console.error('Error in creating image', error);
        throw error;
    }
});
exports.createImageRepo = createImageRepo;
const getImageRepo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield image_model_1.default.findById(id);
    }
    catch (error) {
        console.error('Error in getting image', error);
        return null;
    }
});
exports.getImageRepo = getImageRepo;
const deleteImageRepo = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield image_model_1.default.findOneAndDelete({ _id: _id });
        if (deleted) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.error('Error in deleting imagemodel', error);
        return false;
    }
});
exports.deleteImageRepo = deleteImageRepo;
