import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config.js";
import bookRoutes from "./routes/book.routes.js";

const app = express();
app.use(express.json());

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  }  catch (err) {
    console.log("DB Connection Error: ", err);
  }
};
connectDB();

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});

app.use("/api/", bookRoutes);

