"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const path = require("path");
const config_1 = require("../../../config");
const uuid = require("uuid/v4");
function getStaticHome(env) {
    switch (env) {
        case "development":
            return "http://localhost:8091/v1/static/";
        case "production":
        //...CDN...
    }
}
exports.getStaticHome = getStaticHome;
function fileMapper(env) {
    return (filename) => getStaticHome(env) + filename;
}
exports.fileMapper = fileMapper;
function getFileUploader(env) {
    switch (env) {
        case "development":
            const fileID = uuid();
            const fileStore = multer.diskStorage({
                destination: function (req, file, callback) {
                    callback(null, path.join(config_1.__root, "public", "img"));
                },
                filename: function (req, file, callback) {
                    callback(null, fileID + path.extname(file.originalname));
                }
            });
            return multer({ storage: fileStore }).single("file");
        // case "production"
        default:
            return (req, res, next) => next();
    }
}
exports.getFileUploader = getFileUploader;
