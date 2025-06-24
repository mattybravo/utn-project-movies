import  "./LoginRegister.css"

export default function LoginRegister(){

    return(
        <div className="login-background d-flex justify-content-center align-items-center">
            <div className="login-container text-center">
              <h2 className="text-login mb-4">🎬 Bienvenido</h2>
                
            <button  className="login-btn" onClick={() => navigate('/login')}>INICIA SESIÓN</button>

            <button className="login-btn" onClick={() =>navigate(`/register`)}>REGISTRATE</button>

                <div className="login-wave"/>

            </div>
        </div>
    )    
}
