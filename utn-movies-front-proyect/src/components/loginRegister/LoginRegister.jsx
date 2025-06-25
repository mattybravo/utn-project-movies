import { useState } from "react";
import "./LoginRegister.css"
import { useNavigate, useLocation } from "react-router-dom";

export default function LoginRegister() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const redirecTo = queryParams.get(`redirect`) || `/`;

    // Estado para el token que recibo del backend
    const [token, setToken] = useState(null);

    // función que maneja el login del "usuario"

    const handleLogin = async () => {
        //llamada al backend para autenticar
        try {
            const fakeToken = "123456" // simula respuesta del backend
            setToken(fakeToken);
            // Guardar token y redirigir
            localStorage.setItem('token', fakeToken);
            navigate(redirectTo); // Redirige después de loguearse correctamente
        } catch (error) {
            console.error('Error en login', error);
        }
    }

        return (
            <div className="login-background d-flex justify-content-center align-items-center">
                <div className="login-container text-center">
                    <h2 className="text-login mb-4">🎬 Bienvenido</h2>

                    <button className="login-btn" onClick={handleLogin}>INICIA SESIÓN</button>

                    <button className="login-btn" onClick={() => navigate(`/loginRegister`)}>REGISTRATE</button>

                    <div className="login-wave" />

                </div>
            </div>
        )
    }
