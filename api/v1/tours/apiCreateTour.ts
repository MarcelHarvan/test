import { RequestHandler } from "express";
import {Tour} from "../../../db/tour";
import { APIError, PublicInfo } from "../../../model/shared/messages";

export const apiCreateTour: RequestHandler = (req, res, next) => {
    if (!req.body) {
        next(APIError.errMissingBody());
    }
    const newTour = {
        location: req.body.location || "",
        tourTitle: req.body.tourTitle || "",
        tourCategory: req.body.tourCategory || "",
        tourDescription: req.body.tourDescription || "",
        price: req.body.price || 0,
        currency: req.body.currency || "",
        img: []
    };
    new Tour(newTour).save(() => {
        res.json(PublicInfo.infoCreated({newTour: newTour}));
    });

};