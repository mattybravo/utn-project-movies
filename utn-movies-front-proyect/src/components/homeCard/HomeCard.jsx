import "./HomeCard.css"
export default function HomeCard({image}){

return(
<>
<div className="card h-100 shadow-sm">
<img src={image} className="card-movie" alt="imagen de la pelicula"/>
</div>
</>
)
}