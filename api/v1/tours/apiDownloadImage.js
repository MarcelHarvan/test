"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const config_1 = require("../../../config");
const messages_1 = require("../../../model/shared/messages");
exports.apiDownloadImage = (req, res, next) => {
    const imageID = req.params.id;
    res.download(path.join(config_1.__root, "public", "img", imageID), (err) => {
        if (err) {
            next(messages_1.APIError.errServerError());
        }
    });
};
