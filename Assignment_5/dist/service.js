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
const pgConfig_1 = __importDefault(require("./pgConfig"));
function checkTableExists(tableName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `
            SELECT 1 FROM information_schema.tables
            WHERE table_name = $1
        `;
            const result = yield pgConfig_1.default.query(query, [tableName]);
            return result.rowCount;
        }
        catch (error) {
            console.error('Error checking table existence:', error);
            return false;
        }
    });
}
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const createTableQuery = `
        CREATE TABLE posts (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
        try {
            yield pgConfig_1.default.query(createTableQuery);
            console.log('posts table created successfully.');
        }
        catch (error) {
            console.error('Error creating posts table:', error);
            throw error;
        }
    });
}
function insertUser(username, email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
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
        }
        catch (error) {
            console.error('Error inserting user:', error);
            throw error;
        }
    });
}
//# sourceMappingURL=service.js.map