import { Router, Request, Response } from 'express'
import { Employee } from '../types/employee'
const path = require('path');
import { v4 as uuidv4 } from 'uuid'

const employeeRouter = Router()

const employees: Employee[] = []

/**
 * GET 
 */
employeeRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json(employees)
  })


employeeRouter.get('/employees', (req: Request, res: Response) => {
    res.status(200).json(employees)
    res.sendFile(path.join(__dirname, '../../frontend/index.html'));
});




export default employeeRouter