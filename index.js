const express = require('express');
const app = express();
const cors = require('cors'); //before useing the cors make sure install cors commend => npm install cars
const port = process.env.PORT || 5000


const  chefs = require("./data/data.json");

app.use(cors());

app.get("/", (req, res)=>{
    res.send("Server is runing");
})

app.get("/chef's", (req, res)=>{
    res.send(chefs);
})

app.get("/chef's/:id", (req, res)=>{
    const id = req.params.id;

    const singleChef = chefs.find((c)=> c._id === id);
    
    res.send(singleChef);
})

app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`);
})