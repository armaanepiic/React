import express from 'express';
import cors from 'cors';
import { mockProducts } from './mockdata.js';
import envConfig from "./config/envConfig.js";

const app = express();

app.use(express.json());
app.use(cors({
  origin: envConfig.ALLOWED_ORIGIN,
}));



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


app.listen(envConfig.PORT, () => {
  console.log(`Example app listening on port ${envConfig.PORT}`);
});
