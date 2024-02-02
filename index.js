import "./loadEnv.js"

import express from "express";
import cors from "cors";
import morgan from "morgan";

import moviesRouter from "./routes/movies.js"
import usersRouter from "./routes/users.js"

const app = express()
const PORT = process.env.PORT || 4000;

//Middlewares

app.use(cors()); //allows front end to connect to backend 
app.use(morgan("dev")); //logger
app.use(express.json()); //so we can have data in req.body
app.use(express.urlencoded({extended: true}))//allows data in url string

//Routes
app.use("/api/movies", moviesRouter); //everything with /api/movies will be send to moviesRouter
app.use("/api/users", usersRouter);

app.get("/", (req, res) => {
    res.send(`backend...`)
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})