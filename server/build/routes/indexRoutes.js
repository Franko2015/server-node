"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.get("/", indexController_1.indexController.list);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
