//write basic express boilerplate code
// with express.json() middleware
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const {createtodo, updateTodo} = require('./types')
app.use(express.json())

app.post('/todos', (req,res)=>{
    const todopayload = req.body
    const todo = createtodo.safeParse(todopayload)
    if(!todo.success){
        res.status(411).json({error: todo.error})
        return
    }

    //save in db

})
app.get('/todos', (req,res)=>{

})
app.put('/completed', (req,res)=>{
    const updatedPayload = req.body
    const parsedPayload = updateTodo.safeParse(updatedPayload)
    if(!parsedPayload.success){
        res.status(411).json({error: parsedPayload.error})
        return
    }
    //update in db

})
app.listen(3000)