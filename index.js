const express = require('express');
const port = 8000;

let app = express();

app.listen(8000, function(err){
    if(err){
        console.log(`Server is down : ${err}`)
    }
    console.log(`Server is up & running at port : ${port}`);
})