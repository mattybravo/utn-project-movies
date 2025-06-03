import "./HomeCard.css"
export default function HomeCard({ image, title }) {

    return (
        <>
            <div className="movie-card">
                <img src={image} alt={title} className="movie-poster" />
                <h5 className="text-center mt-2">{title}</h5>
                <div className="stars d-flex gap-2 star-rating">
                    {[...Array(5)].map((_, i) => (
                        <span className="star" key={i}>★</span>
                    ))}
                </div>
                <button className="review-btn">Hacer Reseña</button>
            </div>
        </>
    )
}