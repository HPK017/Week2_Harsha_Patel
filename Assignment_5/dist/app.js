"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const pgConfig_1 = __importDefault(require("./pgConfig"));
const app = express();
function checkTableExists(tableName) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `
            SELECT 1 FROM information_schema.tables
            WHERE table_name = $1
        `;
        const result = yield pgConfig_1.default.query(query, [tableName]);
        return result.rowCount;
    });
}
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const createTableQuery = `
        CREATE TABLE posts (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
        );
    `;
        yield pgConfig_1.default.query(createTableQuery);
        console.log('posts table created successfully.');
    });
}
function insertUser(username, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const tableExists = yield checkTableExists('posts');
        if (!tableExists) {
            yield createTable();
        }
        const insertQuery = `
            INSERT INTO posts (username, email)
            VALUES ($1, $2) RETURNING *;
        `;
        const result = yield pgConfig_1.default.query(insertQuery, [username, email]);
        console.log('Inserted user:', result.rows[0]);
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgConfig_1.default.connect();
        console.log('Connected to the database.');
        // Example: Insert a user
        yield insertUser('john_doe', 'john.doe@gmail.com');
        yield insertUser('harsha', 'patel@gmail.com');
        yield insertUser('suma', 'suma@gmail.com');
        yield insertUser('ryan', 'ryan@gmail.com');
    });
}
// Run the main function
main();
// Start the server
app.listen(3000, () => {
    console.log(`Server is running on port`);
});
//# sourceMappingURL=app.js.map