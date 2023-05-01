const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors());

var bodyParser= require('body-parser');
app.use(bodyParser.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const db = require('./Model/index');

const quizData = require('./Routes/quizroutes');
db.mongoose
.connect(db.url,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Connected to DB successfully")
})
.catch(()=>{
    console.log("failed to connect to DB")
    process.exit()
});

app.listen(5000,()=>{
    console.log('server listening on port 5000')
})

app.use("/data",quizData);


app.get('/',(req,res)=>{
    res.json({message:"welcome to express app"})
})


