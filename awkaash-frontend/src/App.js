import logo from './logo.svg';
import './scss/App.scss';
import Navigation from './components/Navigation';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

//import 
function App() {
  var year = new Date();
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
      <p>
      Copyright &copy; {year.getFullYear()} <a href='https://github.com/mauryahdx'>Surya Prakash Mourya</a>
      </p>
      
   </div>


  );
}

export default App;
