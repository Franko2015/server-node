"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProgramasController {
    async list(req, res) {
        const [rows] = await database_1.default.query('SELECT * FROM programas');
        res.json(rows);
    }
    async getOne(req, res) {
        const { id } = req.params;
        const [rows] = await database_1.default.query('SELECT * FROM programas WHERE id = ?', [id]);
        res.json(rows);
    }
    async create(req, res) {
        await database_1.default.query('INSERT INTO programas set ?', [req.body]);
        res.json({ text: 'Sistema guardado' });
    }
    delete(req, res) {
        const { id } = req.params;
        database_1.default.query('DELETE FROM programas WHERE id = ?', [id]);
        res.json({ text: 'Eliminando un sistema: ' + req.params.id });
    }
    async update(req, res) {
        const { id } = req.params;
        await database_1.default.query('UPDATE programas set ? WHERE id = ?', [req.body, id]);
        res.json({ text: 'Sistema editado: ' + id });
    }
}
const programasController = new ProgramasController();
exports.default = programasController;
