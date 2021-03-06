
import { RequestHandler } from "express";
import { PublicInfo, APIError } from "../../../model/shared/messages";
import {Tour} from "../../../db/tour";

export const apiUpdateTour: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    Tour.findByIdAndUpdate(tourID, req.body, {new: true}).then((updatedTour) => {
        res.json(PublicInfo.infoUpdated({updatedTour: updatedTour}));
    });
};