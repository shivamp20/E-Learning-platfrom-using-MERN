import React from 'react'
import './Permutation.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Grid,Box,Typography,Button} from '@mui/material'

import pnc from '../AllCourses/p&c.jpeg';
import {useNavigate} from 'react-router-dom';

const Permutation = () => {
    const navigate = useNavigate();
  return (
    <div className='stock'>
        {/* <h1>Details Page</h1> */}
        
        <div className='gridcont'>
        <Grid item xs={4}>
            <Box className="card" sx={{width:"480px",height:"300px"}}>
                    <Typography className="count">
                    {/* {cardData[0]?.totalAvailableIRC} */}
                    <div className='courseimg'>
                    <img src={pnc} className='pnc'/>
                    </div>

                    </Typography>
                    <Typography className="title">
                    Permutation and combination
                    </Typography>
                    <div className='detailbtn'>
                    

                    </div>
                    

                   
                    
            </Box>
        </Grid>
       
        

        </div>
        <Typography>
            <h2>
                Permutaion and combination is as follows:
            </h2>
            <p className='datadiv'>
            Permutation
It is the distinct interpretations of a provided number of components carried one by one, or some, or all at a time. For example, if we have two components A and B, then there are two likely performances, AB and BA.

A numeral of permutations when ‘r’ components are positioned out of a total of ‘n’ components is n Pr = n! / (n – r)!. For example, let n = 3 (A, B, and C) and r = 2 (All permutations of size 2). The answer is 3!/(3 – 2)! = 6. The six permutations are AB, AC, BA, BC, CA, and CB.

Explanation of Permutation Formula
A permutation is a type of performance that indicates how to permute. If there are three different numerals 1, 2 and 3 and if someone is curious to permute the numerals taking 2 at a moment, it shows (1, 2), (1, 3), (2, 1), (2, 3), (3, 1), and (3, 2). That is it can be accomplished in 6 methods. 
            </p>
        </Typography>

        {/* <Container > */}
        <div class="ratio ratio-21x9">  
            {/* <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe> */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0NAASclUm4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        {/* </Container> */}
        <div className='optionbtn'>
            <Button
            variant='outlined'
            sx={{bgcolor:"skyblue",color:"black",fontWeight:"bolder"}}
            onClick={()=>navigate('/skillquiz')}
            >
                Take Skill Quiz
            </Button>

        </div>

        
            
        
        


      
    </div>
  )
}

export default Permutation
