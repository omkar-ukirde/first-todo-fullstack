const mongoose = require('mongoose')

const db = mongoose.connect('hmongodb+srv://myfood980:ne7Y1Bpwna0D4zIM@cluster0.z90vzmc.mongodb.net/')

const createTododb = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', createTododb)

module.exports = {
    todo
}
