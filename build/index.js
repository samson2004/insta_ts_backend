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
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const route_1 = __importDefault(require("./routes/route"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const mongodb_1 = require("mongodb");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.set("PORT", 3000);
app.set("BASE_URL", "localhost");
dotenv_1.default.config();
const uploadDir = path_1.default.join(__dirname, '../uploads');
app.use('/uploads', express_1.default.static('C:/Users/SAM/Desktop/ts_insta_backend/uploads'));
app.use("/api/insta/v1", route_1.default);
if (!fs_1.default.existsSync(uploadDir)) {
    fs_1.default.mkdirSync(uploadDir);
}
const mongourl = process.env.MONGO_DB_URL || 'mongodb+srv://dbusername:dbpassword@instaclonedb.dnltgqi.mongodb.net/?retryWrites=true&w=majority&appName=instaclonedb';
if (!mongourl) {
    console.error('mongourl not defined');
    process.exit(1);
}
mongoose_1.default.connect(mongourl, { enableUtf8Validation: false }).then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("connected to mongodb");
    const client = new mongodb_1.MongoClient(mongourl);
    yield client.connect();
    console.log('client is connected');
    const db = client.db();
    const bucket = new mongodb_1.GridFSBucket(db);
    app.locals.bucket = bucket;
})).catch((error) => {
    console.log(error);
    console.log("Error in connection with mongodb");
});
//start server
try {
    const port = app.get("PORT");
    const baseurl = app.get("BASE_URL");
    server.listen(port, () => {
        console.log(`server is running at ${baseurl}:${port}`);
    });
}
catch (error) {
    console.log("error in server");
}
exports.default = server;
