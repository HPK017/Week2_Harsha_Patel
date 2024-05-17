import express, {Request, Response} from 'express'
// const express = require('express');

const app = express();
const port = 8000;

app.use(express.json());

let numbersArray: number[] = [];

//filter
app.post('/arrayfun1', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  const filteredNumbers = numbersArray.filter((num: number) => num > 5);
  res.json(filteredNumbers)
})

//map
app.post('/arrayfun2', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  const mapNumbers = numbersArray.map((item) => item*2);
  res.json(mapNumbers)
})


//push
app.post('/arrayfun3', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  numbersArray.push(11);
  res.json(numbersArray)
})

//pop
app.post('/arrayfun4', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  numbersArray.pop();
  res.json(numbersArray)
})

//slice
app.post('/arrayfun5', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  const slicedArray: number[] = numbersArray.slice(1, 3);
  res.json(slicedArray)
})

//concat
app.post('/arrayfun6', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  const newArray1: number[] = numbersArray.concat([6, 7, 8]);
  res.json(newArray1)
})

//LastIndexOf
app.post('/arrayfun7', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  const index: number = numbersArray.lastIndexOf(3);
  res.json(index)
})

//shift
app.post('/arrayfun8', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  const shiftedItem: number | undefined = numbersArray.shift()
  res.json(shiftedItem)
})

//unshift
app.post('/arrayfun9', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  numbersArray.unshift(0);
  res.json(numbersArray)
})

//flat
app.post('/arrayfun10', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  const flattenedArray: number[] = numbersArray.flat();
  res.json(flattenedArray)
})

//find
app.post('/arrayfun11', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  const foundItem: number | undefined = numbersArray.find((item) => item === 3)
  res.json(foundItem)
})

//splice
app.post('/arrayfun12', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  const splicedElements = numbersArray.splice(1,5);
  res.json(splicedElements)
})


//IndexOf
app.post('/arrayfun13', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  const indexOfItem: number = numbersArray.indexOf(2);
  res.json(indexOfItem)
})

//Includes
app.post('/arrayfun14', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  const includesResult: boolean = numbersArray.includes(3);
  res.json(includesResult)
})

//replace
app.post('/arrayfun15', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  const everyResult: boolean = numbersArray.every((item) => item > 0);
  res.json(everyResult)
})

//join
app.post('/arrayfun16', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  const joinedString: string = numbersArray.join("-");
  res.json(joinedString)
})

//FindIndex
app.post('/arrayfun17', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  const foundIndex: number = numbersArray.findIndex((item) => item === 4);
  res.json(foundIndex)
})

//some
app.post('/arrayfun18', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  const someResult: boolean = numbersArray.some((item) => item > 3);  
  res.json(someResult)
})

//toString
app.post('/arrayfun19', (req:Request,res:Response) =>{
  const {numbers} = req.body;
  numbersArray = numbers;
  const stringRepresentation: string = numbersArray.toString(); 
  res.json(stringRepresentation)
})


app.listen(port, () => {
    console.log(`Server is running`);
});
