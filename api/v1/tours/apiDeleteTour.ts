
import { RequestHandler } from "express";
import { PublicInfo, APIError } from "../../../model/shared/messages";
import {Tour} from "../../../db/tour";

export const apiDeleteTour: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    Tour.findByIdAndDelete(tourID).then(() => {
        res.json(PublicInfo.infoDeleted());
    });

};

