const todoController = require("../controller/todo.controller")

const router = require("express").Router()

router
    .get("/", todoController.getAllTodos)
    .post("/", todoController.addTodo)
    .put("/:todoUpdateId", todoController.updateTodo)
    .delete("/:todoDeleteId", todoController.deleteTodo)

module.exports = router