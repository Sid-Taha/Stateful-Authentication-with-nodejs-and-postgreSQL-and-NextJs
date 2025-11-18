const express = require('express');
const userRouter = require("./routes/user.routes")

const app = express();
const PORT = 3000;


app.use(express.json())

app.use("/user", userRouter)

app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`)})