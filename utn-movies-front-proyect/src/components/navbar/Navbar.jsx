import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = JSON.parse(atob(token.split(".")[1]));
      setUserName(decoded.username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserName(null);
    navigate("/");
  };

  return (
    <nav className="navbar-custom px-4 d-flex justify-content-between align-items-center">
      <Link className="navbar-brand-custom" to="/">MovieReviews</Link>

      <div className="d-flex align-items-center">
        {userName ? (
          <>
            <span className="navbar-text-custom mr-3">Hola, {userName}</span>
            <button className="btn-custom" onClick={handleLogout}>Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link to="/loginRegister" className="btn-custom mr-2">Iniciar sesión</Link>
            <Link to="/loginRegister" className="btn-custom">Crear cuenta</Link>
          </>
        )}
      </div>
    </nav>
  );
}
