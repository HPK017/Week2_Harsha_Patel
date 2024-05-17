"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8000;
const students = [
    { name: "Alice", age: 20, grade: 75 },
    { name: "Bob", age: 22, grade: 85 },
    { name: "Charlie", age: 21, grade: 60 },
    { name: "David", age: 19, grade: 45 },
    { name: "Eve", age: 20, grade: 90 }
];
app.get('/filterpassedstudents', (req, res) => {
    const passedstudents = students.filter(student => student.grade >= 50);
    res.json(passedstudents);
});
app.get('/filterstudentsname', (req, res) => {
    const studentsname = students.map(student => student.name);
    res.json(studentsname);
});
app.get('/studentsortedbygrade', (req, res) => {
    const sortedStudents = students.slice().sort((a, b) => a.grade - b.grade);
    res.json(sortedStudents);
});
app.get('/averageage', (req, res) => {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    res.json({ averageAge });
});
app.listen(port, () => {
    console.log(` Hii we are comfortable in NodeJS `);
});
//# sourceMappingURL=app.js.map