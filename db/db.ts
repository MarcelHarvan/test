import * as mongoose from "mongoose";
// import {Mongoose} from "mongoose";

export function connectMongo(){

    const uri = "mongodb+srv://tourdb_admin:konope@cluster0-bby71.mongodb.net/test?retryWrites=true";
    // mongoose.connect("");

    mongoose.connect(uri, {useNewUrlParser: true});
    // const db = mongoose.connection;
    // db.on("Error", console.error.bind(console, "MongoDB Connection error"));
}
