import { Link } from "react-router-dom"


const Navigation = () => {
    return (
        <nav className="flex">
            
            <Link to="/"><img  className="logo" src="static/images/awkaash_logo.svg" alt="Awkaash" /></Link>
            <div className=" flex">
              <Link to="/login"><a>Login</a></Link>
              <Link to="/signup"><button>Get Started</button></Link>
              
            </div>
        </nav>
    )
}

export default Navigation
