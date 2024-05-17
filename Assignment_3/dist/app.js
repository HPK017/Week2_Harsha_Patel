"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
let numbersArray = [];
//filter
app.post('/arrayfun1', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    const filteredNumbers = numbersArray.filter((num) => num > 5);
    res.json(filteredNumbers);
});
//map
app.post('/arrayfun2', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    const mapNumbers = numbersArray.map((item) => item * 2);
    res.json(mapNumbers);
});
//push
app.post('/arrayfun3', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    numbersArray.push(11);
    res.json(numbersArray);
});
//pop
app.post('/arrayfun4', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    numbersArray.pop();
    res.json(numbersArray);
});
//slice
app.post('/arrayfun5', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    const slicedArray = numbersArray.slice(1, 3);
    res.json(slicedArray);
});
//concat
app.post('/arrayfun6', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    const newArray1 = numbersArray.concat([6, 7, 8]);
    res.json(newArray1);
});
//LastIndexOf
app.post('/arrayfun7', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    const index = numbersArray.lastIndexOf(3);
    res.json(index);
});
//shift
app.post('/arrayfun8', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    const shiftedItem = numbersArray.shift();
    res.json(shiftedItem);
});
//unshift
app.post('/arrayfun9', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    numbersArray.unshift(0);
    res.json(numbersArray);
});
//flat
app.post('/arrayfun10', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    const flattenedArray = numbersArray.flat();
    res.json(flattenedArray);
});
//find
app.post('/arrayfun11', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    const foundItem = numbersArray.find((item) => item === 3);
    res.json(foundItem);
});
//splice
app.post('/arrayfun12', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    const splicedElements = numbersArray.splice(1, 5);
    res.json(splicedElements);
});
//IndexOf
app.post('/arrayfun13', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    const indexOfItem = numbersArray.indexOf(2);
    res.json(indexOfItem);
});
//Includes
app.post('/arrayfun14', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    const includesResult = numbersArray.includes(3);
    res.json(includesResult);
});
//replace
app.post('/arrayfun15', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    const everyResult = numbersArray.every((item) => item > 0);
    res.json(everyResult);
});
//join
app.post('/arrayfun16', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    const joinedString = numbersArray.join("-");
    res.json(joinedString);
});
//FindIndex
app.post('/arrayfun17', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    const foundIndex = numbersArray.findIndex((item) => item === 4);
    res.json(foundIndex);
});
//some
app.post('/arrayfun18', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    const someResult = numbersArray.some((item) => item > 3);
    res.json(someResult);
});
//toString
app.post('/arrayfun19', (req, res) => {
    const { numbers } = req.body;
    numbersArray = numbers;
    const stringRepresentation = numbersArray.toString();
    res.json(stringRepresentation);
});
app.listen(port, () => {
    console.log(`Server is running`);
});
//# sourceMappingURL=app.js.map