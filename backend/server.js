import express from "express"
import dotenv from "dotenv"

import authRoutes from './routes/auth.routes.js'
import emailRoutes from './routes/email.routes.js'
import connection from "./connection/connection.js"

const app = express()

dotenv.config()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/emails", emailRoutes)


app.get("/", (req, res) => {
    res.send("Aapka server chalu.")
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connection()
})