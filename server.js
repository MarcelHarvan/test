"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const v1_1 = require("./api/v1/v1");
const db_1 = require("./db/db");
const app = express();
db_1.connectMongo();
app.disable("x-powered-by");
app.use("/v1", v1_1.routerV1);
app.listen(process.env.PORT || 8091, () => console.log("Server Started..."));
setTimeout(() => {
    console.log("After 2 sec");
}, 2000);
