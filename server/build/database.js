"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_1.default.createPool(keys_1.default.database);
pool.getConnection()
    .then(connection => {
    connection.off;
    console.log('DB is connected');
});
exports.default = pool;
