import express, {Request , Response} from 'express';

const app = express();
const port = 8000;

const students = [
    { name: "Alice", age: 20, grade: 75 },
    { name: "Bob", age: 22, grade: 85 },
    { name: "Charlie", age: 21, grade: 60 },
    { name: "David", age: 19, grade: 45 },
    { name: "Eve", age: 20, grade: 90 }
  ];

  //1
  app.get ('/filterpassedstudents', (req, res)=>{
    const passedstudents = students.filter(student => student.grade>=50);
    res.json(passedstudents);
  })

  //2
  app.get('/filterstudentsname', (req, res)=>{
    const studentsname = students.map(student => student.name);
    res.json(studentsname);
  })

  //3
  app.get('/studentsortedbygrade', (req, res)=>{
    const sortedStudents = students.slice().sort((a,b) =>a.grade- b.grade)
    res.json(sortedStudents);
  })

  //4
  app.get('/averageage', (req, res)=>{
    const totalAge = students.reduce((sum, student) =>sum + student.age, 0);
    const averageAge = totalAge / students.length;
    res.json({ averageAge });
  })

app.listen(port, ()=> {
    console.log(` Hii we are comfortable in NodeJS `);
})