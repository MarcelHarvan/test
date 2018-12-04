"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tourSummary_1 = require("../../../model/shared/tourSummary");
const tourFilters_1 = require("../../../model/shared/tourFilters");
const tour_1 = require("../../../db/tour");
exports.apiGetTours = (req, res, next) => {
    const filters = new tourFilters_1.TourFilters(req.query);
    tour_1.Tour.find(filters.asObject()).then(data => {
        res.json(data.map((item) => new tourSummary_1.TourSummary(item)));
    });
};
