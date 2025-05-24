import "./HomeCard.css"
export default function HomeCard(){

return(

  <div className="col-md-4 mb-4">
      <div className="card movie-card h-100">
        <div className="card-body">
          <h5 className="card-title">titulo</h5>
          <p className="card-text">aa</p>
          <p className="movie-genre">Género:</p>
          <button className="btn btn-outline-light btn-sm mt-2">
            Hacer Reseña
          </button>
        </div>
      </div>
    </div>

)
}