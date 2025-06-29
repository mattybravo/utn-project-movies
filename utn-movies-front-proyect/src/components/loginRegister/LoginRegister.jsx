import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./LoginRegister.css";

export default function LoginRegister() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const redirectTo = queryParams.get("redirect") || "/";

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin ? "login" : "register";
    const payload = isLogin ? { email, password } : { username, email, password };

    try {
      const res = await fetch(`http://localhost:3000/api/auth/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Error en la solicitud");
        return;
      }

      // Si login exitoso, guardar token y username
      if (isLogin) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username || "usuario"); // por si no viene del backend
        navigate(redirectTo);
      } else {
        alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
        setIsLogin(true); // cambia a formulario de login
      }
    } catch (err) {
      console.error("Error:", err);
      setError("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div className="login-background d-flex justify-content-center align-items-center">
      <div className="login-container text-center">
        <h2 className="text-login mb-4">🎬 Bienvenido</h2>
        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <input
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="login-btn" type="submit">
            {isLogin ? "INICIAR SESIÓN" : "REGISTRARSE"}
          </button>
        </form>

        <button
          className="login-btn"
          onClick={() => {
            setIsLogin(!isLogin);
            setError("");
          }}
        >
          {isLogin ? "¿No tienes cuenta? Registrate" : "¿Ya tienes cuenta? Inicia sesión"}
        </button>

        {error && <p className="error">{error}</p>}
        <div className="login-wave" />
      </div>
    </div>
  );
}
