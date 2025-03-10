import { Router, Request, Response } from 'express'
import { Employee } from '../types/employee'
const path = require('path');
import { v4 as uuidv4 } from 'uuid'

const employeeRouter = Router()

const employees: Employee[] = [
  { id: '1', firstname: 'John', lastname: 'Doe', age: 35, isMarried: true },
  { id: '2', firstname: 'Jane', lastname: 'Smith', age: 28, isMarried: false },
];

/**
 * GET 
 */
employeeRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json(employees)
  })


employeeRouter.get('/employees', (req: Request, res: Response) => {
    res.status(200).json(employees)
});




export default employeeRouter