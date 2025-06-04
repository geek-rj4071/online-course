import express from "express";
import mongoose from "mongoose";
import courseRoutes from "./routes/courses.js";
import cors from "cors";
const app = express();
const PORT = 3000;

mongoose.connect(
  "mongodb+srv://maheshkumarrj4071:KNZO5Ry1VCbHUaGE@online-courses.obbqjg1.mongodb.net/"
);

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/course", courseRoutes);
app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});
