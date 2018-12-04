"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../../model/shared/messages");
const tour_1 = require("../../../db/tour");
exports.apiUpdateTour = (req, res, next) => {
    const tourID = req.params.id;
    tour_1.Tour.findByIdAndUpdate(tourID, req.body, { new: true }).then((updatedTour) => {
        res.json(messages_1.PublicInfo.infoUpdated({ updatedTour: updatedTour }));
    });
};
