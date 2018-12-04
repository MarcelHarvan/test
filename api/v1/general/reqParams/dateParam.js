"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../../../config");
const messages_1 = require("../../../../model/shared/messages");
exports.dateParam = (req, res, next, value, name) => {
    const parsedComponents = config_1.dateFormat.exec(value);
    if (parsedComponents) {
        console.log(parsedComponents);
        const [_, year, month, day] = parsedComponents.map((item) => parseInt(item));
        const date = new Date(year, month - 1, day);
        req.params[name] = date;
        next();
    }
    else {
        next(new messages_1.APIError("Parse Error", "Date could not be parsed. Date Format: YYYY/MM/DD.", 400));
    }
};
