"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
// import {Mongoose} from "mongoose";
function connectMongo() {
    const uri = "mongodb+srv://tourdb_admin:konope@cluster0-bby71.mongodb.net/test?retryWrites=true";
    // mongoose.connect("");
    mongoose.connect(uri, { useNewUrlParser: true });
    // const db = mongoose.connection;
    // db.on("Error", console.error.bind(console, "MongoDB Connection error"));
}
exports.connectMongo = connectMongo;
