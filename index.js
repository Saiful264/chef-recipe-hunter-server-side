const express = require('express')
const app = express()
const port = 5000

app.get("/", (req, res)=>{
    res.send("Server is runing");
})


app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`);
})