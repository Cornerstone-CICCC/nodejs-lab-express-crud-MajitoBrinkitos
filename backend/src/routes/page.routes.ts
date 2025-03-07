import { Router, Request, Response } from 'express'
const pageRouter =  Router()
const path = require('path');


//Home
pageRouter.get('/', (req: Request, res: Response) => {
    res.status(200).send("Welcome to the homepage")
});

//Employee List
pageRouter.get("/employees", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../frontend/index.html'));
  })

// Admin
pageRouter.get("/admin", (req: Request, res: Response) => {
    res.status(401).send("You are not allowed to access this page!")
  })

export default pageRouter