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
exports.getUsers = exports.createUser = void 0;
const pgConfig_1 = __importDefault(require("./pgConfig"));
function createUser(id, name, email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = 'INSERT INTO users (id) VALUES $1';
            let result = yield pgConfig_1.default.query(query, [id]);
            if (result) {
                return result;
            }
        }
        catch (err) {
            return err;
        }
    });
}
exports.createUser = createUser;
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = 'SELECT * FROM users';
        const result = yield pgConfig_1.default.query(query);
        return result.rows;
    });
}
exports.getUsers = getUsers;
//# sourceMappingURL=service.js.map