import React from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


const QuizResult = (props) => {
    const navigate=useNavigate();
    const data = props;
    console.log(data);
    const handleClick=async()=>{
        
        await axios.post("http://localhost:5000/data/addData",data,
        {
            headers: {
              "content-type": "application/json",
            },
          }
        
        ).then((res)=>console.log(res.data))
        .catch((err)=>console.log(err))
        setTimeout(()=>{
            alert("Quiz Sumitted Successfully!!!");
        },1000)

        navigate('/homepage');

    }
  return (
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}<br/><br/><br/><br/><br/><br/> 
        <button
        id="next-button1" 
        onClick={handleClick}

        >
            Submit
        </button>
      
    </div>
  )
}

export default QuizResult
