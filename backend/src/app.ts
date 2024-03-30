import express, { NextFunction, Request, Response } from "express";
import userRoutes from "./routes/user";


const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

export default app;