import express from 'express';   // Entry Point
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/user.route.js'; // Importing other routers
import pinRouter from './routes/pin.route.js'; 
import commentRouter from './routes/comment.route.js'; 
import boardRouter from './routes/board.route.js'; 
import connectDB from './utils/connectDB.js';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express(); // create express server

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors({origin:process.env.CLIENT_URL, credentials: true} )); // Middleware to enable CORS
app.use(cookieParser()); // Middleware to parse cookies


app.use("/users", userRouter); // Mounting all the userrouter to the /users path
app.use("/pins", pinRouter); // Mounting all the pinrouter to the /pins path
app.use("/comments", commentRouter); // Mounting all the commentrouter to the /comments path
app.use("/boards", boardRouter); // Mounting all the boardrouter to the /boards path



// Port Initialization and connection to MongoDB
app.listen(3000, () => {
    connectDB(); 
    console.log("Server is running on port 3000")
})

