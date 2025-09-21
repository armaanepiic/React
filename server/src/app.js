import express from 'express';
import { hello } from "./test.js"

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  hello();
  res.send("Changed test!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
