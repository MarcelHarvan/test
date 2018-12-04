"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonTours = require("./tours.json");
const jsonReviews = require("./reviews.json");
class DataStore {
}
DataStore.tours = jsonTours;
DataStore.reviews = jsonReviews;
exports.DataStore = DataStore;
