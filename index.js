const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()


const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/todo", require("./Routes/todo.route"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource not found" })
})
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: "something went wrong", error: err.message })
})


mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED");
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})