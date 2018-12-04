"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TourFilters {
    constructor(data) {
        this.location = data.location;
        this.priceMin = data.priceMin;
        this.priceMax = data.priceMax;
    }
    asObject() {
        const filter = {};
        if (this.location)
            filter.location = this.location;
        filter.price = {
            $lte: this.priceMax || 1000000,
            $gte: this.priceMin || 0
        };
        return filter;
    }
}
exports.TourFilters = TourFilters;
