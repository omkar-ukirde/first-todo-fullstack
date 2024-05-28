//write basic express boilerplate code
// with express.json() middleware
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const {createTodo, updateTodo} = require('./types')
const {todo} = require('./db')
app.use(express.json())
app.use(bodyParser.json())
app.post('/todos', async (req,res)=>{
    const todopayload = req.body
    const parsedtodo = createTodo.safeParse(todopayload)
    if(!parsedtodo.success){
        res.status(400).json({error: parsedtodo.error})
        return
    }
    await todo.create({
        title: parsedtodo.title,
        description: parsedtodo.description,
        completed: false
    })

    res.status(200).json({
        message: 'Todo created successfully'
    })
})

app.get('/todos', async (req,res)=>{
    const Alltodos = await todo.find()
    res.status(200).json({
        Todos: Alltodos
    })
})

app.put('/completed', async (req,res)=>{
    const updatedPayload = req.body
    const parsedPayload = updateTodo.safeParse(updatedPayload)
    if(!parsedPayload.success){
        res.status(411).json({error: parsedPayload.error})
        return
    }
    //update in db
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })
    res.status(200).json({
        msg: 'Todo updated successfully'
    })
})
app.listen(3000)