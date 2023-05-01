import React from 'react'
import {Grid,Box,Typography,Button} from '@mui/material'
import './Allcourse.css';
import pnc from '../AllCourses/p&c.jpeg';
import learn from '../AllCourses/learncode.png';
import physics from '../AllCourses/physics.jpeg';
import {useNavigate} from 'react-router-dom';

const Allcourse = () => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/homepage');

    }
    const handleDetails=()=>{
        navigate('/permutationdetails')
    }
  return (
    <div>
        <h1 className='head'>All Courses
        <span className='homebtn'>
        <Button
        variant='outlined'
        sx={{bgcolor:'black',color:"white"}}
        onClick={handleClick}
        >
        HOME
        </Button>

        </span>
        </h1>
        
    <Grid container spacing={4} my={4} sx={{paddingLeft:"50px"}}>
        <Grid item xs={4}>
            <Box className="card" sx={{width:"380px",height:"300px"}}>
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
                    <Button
                    variant='outlined'
                    sx={{bgcolor:"skyblue",color:"black"}}
                    onClick={handleDetails}
                    >
                        View Details
                    </Button>

                    </div>
                    

                   
                    
            </Box>
        </Grid>
        <Grid item  xs={4} sm={4} md={4}>
            <Box className="card" sx={{width:"380px",height:"300px"}}>
                    <Typography className="count">
                    {/* {cardData[0]?.totalAvailableIRC} */}
                    <div className='courseimg'>
                    <img src={learn}/>
                    </div>
                    </Typography>
                    <Typography className="title">
                    Learn code online
                    </Typography>
                    <div className='detailbtn'>
                    <Button
                    variant='outlined'
                    sx={{bgcolor:"skyblue",color:"black"}}
                    onClick={handleDetails}
                    >
                        View Details
                    </Button>

                    </div>
                    
            </Box>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
            <Box className="card" sx={{width:"380px",height:"300px"}}>
                    <Typography className="count">
                    {/* {cardData[0]?.totalAvailableIRC} */}
                    <div className='courseimg'>
                    <img src={physics}  className='physics'/>
                    </div>
                    </Typography>
                    <Typography className="title">
                    Fun with Science
                    </Typography>
                    <div className='detailbtn'>
                    <Button
                    variant='outlined'
                    sx={{bgcolor:"skyblue",color:"black"}}
                    onClick={handleDetails}
                    >
                        View Details
                    </Button>

                    </div>
                    
            </Box>
        </Grid>
        
    </Grid>
    </div>
  )
}

export default Allcourse
