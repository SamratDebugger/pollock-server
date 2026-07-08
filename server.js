import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToMongoDB } from "./db/db.js";
import userRouter from "./router/user.router.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hey learners");
});

//routes
app.use("/api/v1/users", userRouter);

app.listen(port, () => {
  connectToMongoDB();
  console.log(`Example app listening on port ${port}`);
});
