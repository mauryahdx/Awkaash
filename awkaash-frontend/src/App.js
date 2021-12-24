import logo from './logo.svg';
import './scss/App.scss';
import Navigation from './components/Navigation';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

//import 
function App() {
  return (
   <div className='container'>   
   <Router>
      <Navigation></Navigation>
      <Routes>
          <Route path="/" element= {<Home/>}></Route>
          <Route path="/login" exact element= {<Login/>}></Route>
          <Route path="/signup" exact element= {<SignUp/>}></Route>
      </Routes>
     
   </Router>
      
      
   </div>


  );
}

export default App;
