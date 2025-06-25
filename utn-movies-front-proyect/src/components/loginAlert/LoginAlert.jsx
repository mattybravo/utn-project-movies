import "./LoginAlert.css"
export default function LoginAlert({show, onClose, onLogin}) {
  
    if (!show) return null;
    return(
      <>
      <div className="overlay-alert">
        <div className="container-alert">
            <h2>Debes iniciar sesión.</h2>
            <p>Para poder dejar una reseña, debes iniciar sesión primero.</p>
          <div>
            <button className="btn btn-login" onClick={onLogin}>Ir a iniciar sesión.</button>
            <button className="btn btn-cancel" onClick={onClose}>Cancelar</button>
          </div>
        </div>
      </div>
      </>
    )
}