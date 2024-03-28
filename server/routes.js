const express =require("express");

const router = express.Router();

router.get("/todos", (req, res) => {
    res.status(200).json({message: "GET REQUEST TO/api/todos"});
});

router.post('/todos', (req,res) => {
    res.status(200).json({message: "POST REQUEST TO/api/todos"});
});

router.delete('/todos/:id', (req,res) => {
    res.status(200).json({message: " Delete REQUEST TO/api/todos/:id"});
});

router.put('/todos/:id', (req,res) => {
    res.status(200).json({message: " PUT REQUEST TO/api/todos/:id"});
});

module.exports= router;

