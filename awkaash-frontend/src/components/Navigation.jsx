import { Link } from "react-router-dom"


const Navigation = () => {
    return (
        <nav className="nav">
            
            <Link to="/"><img  className="logo" src="static/images/awkaash_logo.svg" alt="Awkaash" /></Link>
            <div className="nav__inner">
               <Link to="/login">Login</Link>
               <Link to="/signup"><button>Get Started</button></Link>  
            </div>
        </nav>
    )
}

export default Navigation
