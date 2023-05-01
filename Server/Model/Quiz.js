const mongoose = require('mongoose');

const quizSchema=mongoose.Schema({
     score:{
        type:Number,

     },
     totalScore:{
        type:Number,
        
     }
})

module.exports= mongoose.model("Quiz",quizSchema);