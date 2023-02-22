import { Link } from "react-router-dom"
import { isAutent } from "../ApiService/Auth"

export default function NavBar(props){


    return ( <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="#">START BLOGGING</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto"  >
                        <li className="nav-item"><Link className="nav-link" to="/">Register</Link></li>
                        <li><Link className="nav-link" to="/Login" >Login</Link></li>
                        <li><Link className="nav-link" to="/CreatePost" >Create</Link></li>
                        <li><Link className="nav-link" to="/BlogEditor" >homepage</Link></li>
                        <li><Link className="nav-link" to="/MarkDown" >MarkDown</Link></li>
                        {/* <li className="nav-item"><Link className="nav-link" to="/dashboard" >Dashboard</Link></li> */}
                        <li><a className="nav-link"  onClick={props.logoutUser} style={{cursor:"pointer"}} >Logout</a></li>
                    </ul>
                </div>
            </nav>)

}