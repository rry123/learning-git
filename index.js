//creating an http server
const express = require('express');
const bodyParser = require("body-parser");
const port = 3000
const app = express();

app.get("/route-handler", function(req, res){
    res.json({
        name : "ritik",
        age : 21
    })
})

app.use(bodyParser.json());

app.get("/", function(req, res){
    res.send("Hello world!")
})
app.listen(port, function(){
    console.log(`Example app listening on port ${port}`)
})

app.post('/conversations', function(req, res){
    //const message = req.body.message;

    const message = req.query.message;
    console.log(message);
    res.send({
            msg: "2+2 = 4"
        })
})