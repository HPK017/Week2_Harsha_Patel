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
const express_1 = __importDefault(require("express"));
const pgConfig_1 = __importDefault(require("./pgConfig"));
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
const hasLineNoDivisibleByThree = (orderBlocks) => {
    return orderBlocks.some((block) => {
        if (Array.isArray(block.lineNo)) {
            return block.lineNo.some((lineNo) => lineNo % 3 == 0);
        }
        else {
            return block.lineNo % 3 === 0;
        }
    });
};
app.post('/orders', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const items = req.body.items;
    if (!items || !Array.isArray(items)) {
        return res.status(400).send('Invalid payload');
    }
    const filteredOrders = items.filter((item) => !hasLineNoDivisibleByThree(item.OrderBlocks));
    try {
        const client = yield pgConfig_1.default.connect();
        try {
            for (const order of filteredOrders) {
                yield client.query('INSERT INTO orders (orderID) VALUES ($1)', [order.orderID]);
            }
        }
        finally {
            client.release();
        }
        res.status(200).send('Orders processed successfully');
    }
    catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
}));
app.listen(port, () => {
    console.log(` Hii we are comfortable in NodeJS `);
});
//# sourceMappingURL=app.js.map