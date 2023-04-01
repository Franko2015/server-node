"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json('Hola soy el indice');
    }
    list(req, res) {
        res.json('Index');
    }
}
exports.indexController = new IndexController();
