import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Allcourse from './components/AllCourses/Allcourse';
import UpcomingCourse from './components/UpcomingCourses/UpcomingCourse';
import Permutation from './components/Details1/Permutation';
import Quiz from './components/Quiz/Quiz';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      
        <Route path='/' element={<Login/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/allcourse' element={<Allcourse/>}/>
        <Route path='/upcomingcourse' element={<UpcomingCourse/>}/>
        <Route path='/permutationdetails' element={<Permutation/>}/>
        <Route path='/skillquiz' element={<Quiz/>}/>

  


      </Routes>
      
      </BrowserRouter>
      {/* <Quiz/> */}
      
      
     
    </div>
  );
}

export default App;
