


export default function Navbar(){

return(

  
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
    <li className="nav-item"><a className="nav-link" href="#">Movies</a></li>
    <li className="nav-item"><a className="nav-link" href="#">Create Account</a></li>
    <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
   </ul>
  </div>
 </div>
</nav>

)


}