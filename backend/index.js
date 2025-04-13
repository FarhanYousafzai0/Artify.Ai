import express from 'express';
import dotenv from 'dotenv';
dotenv.config();



// Create server:
const app = express();




app.listen(process.env.PORT,()=>console.log(`Server has been started on ${process.env.PORT}`))








