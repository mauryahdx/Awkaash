import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
//import 
function App() {
  return (
   <div className='container'>   
      <Navigation></Navigation>
      <div className='flex'><div className=' para'><h1>Welcome to <span>Awkaash</span> .</h1> <br></br> <h2>A leave sanction software for <span>IIIT-DMJ</span>.</h2></div><img className="App-logo" src='static/images/icon.svg'></img></div>
   </div>


  );
}

export default App;
