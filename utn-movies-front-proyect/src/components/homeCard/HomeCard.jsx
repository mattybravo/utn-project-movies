import "./HomeCard.css"
export default function HomeCard({ image, title, id, onReviewClick }) {

    return (
        <>
            <div className="movie-card">
                <img src={image} alt={title} className="movie-poster" />
                <h5 className="text-center mt-2">{title}</h5>
                <button className="review-btn" onClick={ () => {console.log(`Boton clickeando, movie Id`, id); onReviewClick(id) }}>Hacer Reseña</button>
            </div>
        </>
    )
}