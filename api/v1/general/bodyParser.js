"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyparser = require("body-parser");
exports.jsonParser = bodyparser.json();
exports.urlEncodedParser = bodyparser.urlencoded({ extended: true });
