const express = require('express');
const app = express();
// const cors = require('cors');
const port = 5000


const  chefs = require("./data/data.json");

// app.use(cors());

app.get("/", (req, res)=>{
    res.send("Server is runing");
})

app.get("/chefs", (req, res)=>{
    res.send(chefs);
})

app.get('/chefs/:id', (req, res)=>{
    const id = req.params.id;

    const singleChef = chefs.find((c)=> c._id === id);
    
    res.send(singleChef);
})

app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`);
})