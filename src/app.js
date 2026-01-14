import express from "express";
import cors from "cors"
const app = express()
//basic configuration
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
//cors configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))
import router from "./routes/healthcheck.router.js";
app.use("/api/v1/healthcheck", router)
app.get('/', (req, res) => {
    res.send("HELLO WORLD")
})

app.get('/page2', (req, res) => {
    res.send("HELLO PAGE2")
})


export default app
