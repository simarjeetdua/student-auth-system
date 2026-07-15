import express from "express"
import cors from "cors"
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js"
import studentRoutes from "./routes/studentRoutes.js"
import mockTestRoutes from "./routes/mockTestRoutes.js"

import { errorHandler } from "./middleware/errorMiddleware.js";


const app = express();
//now first we initializing middlewares

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

//now this is my default route for just checking that everything is fine 
app.get("/",(req,res)=>{
    res.status(200).json({
        success: true,
        message: "student authentication system and mock test api is runnibng"
    });
});

//now our api roputes 
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/mocktests", mockTestRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

app.use(errorHandler);

export default app;
