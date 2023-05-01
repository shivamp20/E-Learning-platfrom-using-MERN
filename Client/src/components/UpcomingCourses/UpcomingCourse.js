import React from 'react'
import {Grid,Box,Typography,Button} from '@mui/material'
import './UpcomingCourse.css';
import {useNavigate} from 'react-router-dom';
import scalar from '../UpcomingCourses/Scalarimg.png';
import motion from '../UpcomingCourses/motion.jpeg';
import algebra from '../UpcomingCourses/algebra.jpeg';



const UpcomingCourse = () => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/homepage');

    }
  return (
    <div>
    <h1 className='head'>Upcoming Courses
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
                <img src={algebra} className='pnc'/>
                </div>

                </Typography>
                <Typography className="title">
                Algebra
                </Typography>
                <div className='detailbtn'>
                <Button
                variant='outlined'
                sx={{bgcolor:"skyblue",color:"black"}}
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
                <img src={scalar} className='scalar'/>
                </div>
                </Typography>
                <Typography className="title">
                Scalar Course
                </Typography>
                <div className='detailbtn'>
                <Button
                variant='outlined'
                sx={{bgcolor:"skyblue",color:"black"}}
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
                <img src={motion}  className='physics'/>
                </div>
                </Typography>
                <Typography className="title">
                Move with motion
                </Typography>
                <div className='detailbtn'>
                <Button
                variant='outlined'
                sx={{bgcolor:"skyblue",color:"black"}}
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

export default UpcomingCourse
