"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../../model/shared/messages");
const tour_1 = require("../../../db/tour");
exports.apiDeleteTour = (req, res, next) => {
    const tourID = req.params.id;
    tour_1.Tour.findByIdAndDelete(tourID).then(() => {
        res.json(messages_1.PublicInfo.infoDeleted());
    });
};
