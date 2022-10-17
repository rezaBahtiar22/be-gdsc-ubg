const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const bodyParser = require('body-parser')
const path = require('path');


app.use(cors())
app.use(bodyParser.json())

// const router = express.Router()

app.get('/get-list', function(req,res){
    // console.log("hallo");
    list = []
    fs.readdir('./mading', (err, files) => {
        files.forEach(file => {
          list.push(file)
        });
        res.status(200).json({
            data: list
        })
        // console.log(list);
    })
    // res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/get-page/:name', function(req,res){
    // console.log("hallo");
    // console.log();
    let name = req.params.name
    res.sendFile(path.join(`${__dirname}/mading/${name}`));
    //__dirname : It will resolve to your project folder.
});

app.listen(process.env.PORT || 3000, ()=> {
    console.log(`server is running on http://127.0.0.1:3000`);
})
