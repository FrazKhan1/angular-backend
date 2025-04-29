import express from "express";
import ConnectDB from "./config/dbConfig.js";
import formRoute from "./routes/formRoute.js";
import cors from "cors";
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use("/api", formRoute);

const port = process.env.PORT || 8000;

ConnectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});