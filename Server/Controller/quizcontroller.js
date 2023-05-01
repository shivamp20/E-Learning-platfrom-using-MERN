const Quiz = require('../Model/Quiz');

const quizData = async(req,res)=>{
    try{
        let {score,totalScore}= req.body;
    console.log(score,totalScore);

    const result = await Quiz.create({
        score:score,
        totalScore:totalScore
    });

    res.status(201).json({Data:result})



    }
    catch(err){
        return res,sendStatus(404)
    }
    

}

module.exports= quizData;