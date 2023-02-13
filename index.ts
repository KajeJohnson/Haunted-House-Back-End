import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "./config";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(config.mongoUri)
  .then(() => console.log("Connected to MongoDB"));

const port = config.port || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Spoooky Gaaaammmmee Tiiime");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
