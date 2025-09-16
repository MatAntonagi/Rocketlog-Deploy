import express from "express"
import "express-async-errors"

import { errorHandling } from "./middleware/error-handling"

const app = express()

app.use(express.json())

export { app }