import express from 'express'
import cors from 'cors'


const app = express();
// Basic configratation
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))

// cors configratation
app.use(cors({
    origin:process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials:true,
    methods:["GET","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders:["Content-Type","Authorization"]
}))


// import the routes 

import healthCheckRouter from './routes/healthcheck.routes.js'

app.use("/api/v1/healthcheck",healthCheckRouter);

app.get('/',(req,res)=>{
   res.send("Hello") 
})

app.get('/instagram',(req, res)=>{
    res.send("This side instagram here ")
})


export default app