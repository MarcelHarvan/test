import { DataStore } from "../../../data/data";
import { RequestHandler } from "express";
import * as staticFileService from "../general/static";
import { APIError, PublicInfo } from "../../../model/shared/messages";

export const apiUploadImage: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = DataStore.tours.findIndex((item: any) => item.id == tourID);
    if (tourIndex == -1) {
        next(APIError.errNotFound());
    }
    else {
        const upload = staticFileService.getFileUploader(req.app.get("env"));
        upload(req, res, (err) => {
            if (err) {
                console.log(err);
                next(APIError.errServerError());
            }
            else {
                DataStore.tours[tourIndex].img.push(req.file.filename);
                res.json(PublicInfo.infoCreated({uploadedFile: req.file.filename}));
            }
        });
    }
};