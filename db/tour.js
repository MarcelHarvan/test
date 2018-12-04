"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const data_1 = require("../data/data");
const tourSchema = new mongoose.Schema({
    location: String,
    tourTitle: String,
    tourCategory: String,
    tourDescription: String,
    price: Number,
    currency: String,
    img: [String],
    reviews: [{
            reviewTitle: String,
            reviewLongText: String,
            stars: String
        }]
});
exports.Tour = mongoose.model("Tour", tourSchema);
// test data
const testItem1 = data_1.DataStore.tours[0];
testItem1.reviews = data_1.DataStore.reviews;
const testItem2 = data_1.DataStore.tours[1];
// testItem2.reviews = DataStore.reviews;
exports.Tour.find().then(data => {
    if (data.length == 0) {
        new exports.Tour(testItem1).save();
        new exports.Tour(testItem2).save();
    }
});
