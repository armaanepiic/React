import express from 'express';
import { mockProducts } from './mockdata.js';

const app = express();

app.use(express.json());

const port = 5000;

app.get("/status", (req, res) => {
  res.json(
    {
      message : "Hello Application is RUNNING",
    }
  );
});

app.get("/api/products" , (req, res) => {
  res.status(200).json(mockProducts);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
