import express, {Request, Response, NextFunction} from 'express'
const path = require('path');
import dotenv from 'dotenv'
import { welcome } from './middleware/welcome.middleware'
import cors from 'cors'
import pageRouter from './routes/page.routes'
import employeeRouter from './routes/employees.routes'
dotenv.config()

//Create server
const app = express()

//Middleware
app.use(express.json())
app.use(cors())
app.use(welcome)

//Files from the frontend
app.use(express.static(path.join(__dirname, '../../frontend')));

//Routes
//Home
app.use("/", pageRouter)

//Employees
app.use("/employees", employeeRouter)

//Fallback
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send("Page not found")
})

//Start server
const PORT = process.env.PORT || 3500
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
})