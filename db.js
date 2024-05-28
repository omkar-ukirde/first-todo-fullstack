const mongoose = require('mongoose')

const db = mongoose.connect('')

const createTododb = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', createTododb)

module.exports = {
    todo
}
