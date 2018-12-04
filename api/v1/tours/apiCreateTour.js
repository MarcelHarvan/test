"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tour_1 = require("../../../db/tour");
const messages_1 = require("../../../model/shared/messages");
exports.apiCreateTour = (req, res, next) => {
    if (!req.body) {
        next(messages_1.APIError.errMissingBody());
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
    new tour_1.Tour(newTour).save(() => {
        res.json(messages_1.PublicInfo.infoCreated({ newTour: newTour }));
    });
};
