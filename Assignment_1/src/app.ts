import express, { Request, Response } from "express";
import pool from "./pgConfig";

const app = express();
const port = 8000;

app.use(express.json());

const hasLineNoDivisibleByThree = (orderBlocks: any[]): boolean => {
   for (const block of orderBlocks) {
      const lineNumbers = Array.isArray(block.lineNo) ? block.lineNo : [block.lineNo];
      if (lineNumbers.some((lineNo: number) => lineNo % 3 === 0)) {
         return true;
      }
   }
   return false;
};


app.post('/orders', async (req: Request, res: Response) => {
   const items = req.body.items;
   const filteredOrders = items.filter((item: any) => !hasLineNoDivisibleByThree(item.OrderBlocks));

      const client = await pool.connect();
      try {
         for (const order of filteredOrders) {
               await client.query('INSERT INTO orders (orderID) VALUES ($1)', [order.orderID]);
         }
      } catch (error) {
         console.error(error);
     }

      res.send(req.body);
   
});

app.listen(port, () => {
   console.log(` Hii we are comfortable in NodeJS `);
});
