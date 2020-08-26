const express = require('express');
const port = 8000;

let app = express();

app.use('/', require('./routes/index'))
app.set('view engine', 'ejs');
app.set('views', './views')


app.listen(8000, function(err){
    if(err){
        console.log(`Server is down : ${err}`)
    }
    console.log(`Server is up & running at port : ${port}`);
})