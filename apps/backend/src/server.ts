import express, { urlencoded } from 'express'
import { config } from 'dotenv';
import cookirParser from 'cookie-parser'
import cors from 'cors'

config()

const app = express();
app.use(cors({
    origin: process.env.FRONTEDN_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))
app.use(cookirParser())
app.use(express.json({ limit: "15kb" }))
app.use(urlencoded({ extended: true, limit: "15kb" }))


export default app