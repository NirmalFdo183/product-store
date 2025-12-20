import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRouter from "./routes/product.route.js";

dotenv.config();

const app = express();
const port = 4000;

app.use(express.json());

app.use("/api/products",productRouter);

app.listen(4000, () => {
  connectDB();
  console.log(`server is listened on the ${port}. http://localhost:${port}`);
});
