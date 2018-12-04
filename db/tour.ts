import * as mongoose from "mongoose";
import {DataStore} from "../data/data";

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

export const Tour = mongoose.model("Tour", tourSchema);



// test data


const testItem1 = DataStore.tours[0];
testItem1.reviews = DataStore.reviews;

const testItem2 = DataStore.tours[1];
// testItem2.reviews = DataStore.reviews;

Tour.find().then(data => {
    if (data.length == 0) {
        new Tour(testItem1).save();
        new Tour(testItem2).save();
    }
});