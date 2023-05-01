import React, { useState } from 'react'
import './Quiz.css';
import '../Data/QuizData';
import { QuizData } from '../Data/QuizData';
import QuizResult from '../QuizResult/QuizResult';

const Quiz = () => {
    const [currentQuestion,showCurrentQuestion]= useState(0);
    const [score,setScore]= useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);


    const changeQuestion=()=>{
            updateScore();
            if(currentQuestion<QuizData.length-1){
                showCurrentQuestion(currentQuestion+1);
                setClickedOption(0);
            }
            else{

                setShowResult(true);
            }

        }

        const updateScore=()=>{
            if(clickedOption===QuizData[currentQuestion].answer){
                setScore(score+1);
            }
        }

  return (
    <div>
        
        <p className='heading-txt'>Quiz For You</p>
        <div className='backdisp'>
        <div className='container'>
            {showResult ? (
             <QuizResult score={score} totalScore={QuizData.length}/>   
            ):(
                <>
                 <div className='question'>
                <span id="question-number">{currentQuestion+1}.</span>
                <span id="question-txt">{QuizData[currentQuestion].question}</span>

            </div>
            <div className='option-container'>
               {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button
                        className={`option-btn ${
                            clickedOption==i+1 ? 'checked' : null
                        }`}
                        
                        onClick={()=>setClickedOption(i+1)}
                        > 
                        {option}

                        </button>
                    )
               })}
            </div>  
            <input type='button' value="Next" id="next-button" onClick={changeQuestion}/>

                </>
               
            )}
              

        </div>

        </div>
        

       
     
    </div>
  )
}

export default Quiz
