"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const programasController_1 = __importDefault(require("../controllers/programasController"));
class ProgramsRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.get("/programas", programasController_1.default.list);
        this.router.post("/programas", programasController_1.default.create);
        this.router.get("/programas/:id", programasController_1.default.getOne);
        this.router.delete("/programas/:id", programasController_1.default.delete);
        this.router.put("/programas/:id", programasController_1.default.update);
    }
}
const indexRoutes = new ProgramsRoutes();
exports.default = indexRoutes.router;
