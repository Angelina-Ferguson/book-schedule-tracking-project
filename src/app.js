import express from 'express';
import cors from 'cors';
import indexRouter from "../routes/index.js";
import loginRouter from "../routes/login.js";
import 'dotenv/config.js';

const app = express();
const app_url = `http://localhost:${process.env.PORT}`
const api_url = `http://localhost:${process.env.API_PORT}/routes`
const allowedOrigins = [
  app_url, api_url 
];
app.use(express.json())
app.use(cors());

app.use("/routes/", indexRouter);
app.use("/routes/login", loginRouter);

app.listen(process.env.API_PORT, () => {
  console.log(`Server running at http://localhost:${process.env.API_PORT}`);
});