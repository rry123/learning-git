//how to create an http server
const express = require("express")

function calsum(n){
    let ans =0;
    for(let i= 1; i<=ans; i++){
        ans= ans+i;
    }
    return ans;
}

const app = express();   //creating an instance of express

app.get("/", function(req, res){     
    const n = req.query.n;             
    const ans = calsum(n);
    res.send(ans.toString());
})

app.listen(3000);             

// how to request   localhost:3000/?n=30