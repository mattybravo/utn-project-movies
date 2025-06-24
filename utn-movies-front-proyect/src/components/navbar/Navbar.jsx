import "../navbar/Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar(){

return(

 <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <a className="navbar-brand fs-4" href="#">Movies Project</a>
    <button
     className="navbar-toggler"
     type="button"
     data-bs-toggle="collapse"
     data-bs-target="#Navbar"
     aria-controls="#Navbar"
     aria-expanded="false"
     aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

  <div className="collapse navbar-collapse" id="Navbar">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item"><Link to="/" className="nav-link">Movies</Link> </li>
      <li className="nav-item"><Link to="/loginRegister" className="nav-link">Create Account</Link> </li>
      <li className="nav-item"><Link to="/loginRegister" className="nav-link">Login</Link> </li>
   </ul>
  </div>
 </div>
</nav>

)


}