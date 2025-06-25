import UseReview from "../../hooks/UseReview";
import { useState } from "react";

export default function MovieDetail({movie}){
const [reviews, loading] = UseReview(movie.id);
const [comment, setComment] = useState("");
const [rating, setRating] = useState(0);

const handleComment = (e) => setComment(e.target.value);
const handleRatingClick = (value) => setRating(value);

const handleSubmit = (e) =>{
    e.preventDefault();
    console.log({comment, rating}); //enviar la reseña al backend
};

return(
<>
<div className="movie-detail-container">

    <div className="movie-info">
        <img src={movie.imagen} alt={movie.titulo} className="movie-poster" />
        <h2>{movie.titulo}</h2>
    </div>

     <div>
        <h3>📝 Escribe tu reseña aqui.</h3>  
         <textarea
            value={comment}
            placeholder="Escribe tu reseña aqui."
            onChange={handleComment} 
         />
    </div>   

    <div className="rating-stars">
    {[1, 2, 3, 4, 5].map((num) => {   
    <span key={num}
        classname={num <= rating ? "star selected" : "star"}
        onClick={() => handleRatingClick(num)}>
        ★
    </span>
    })}          
    </div>

        <button onClick={handleSubmit}>Enviar reseña</button>
</div>
</>
)

}