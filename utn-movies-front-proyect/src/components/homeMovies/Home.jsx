import HomeCard from "../homeCard/homeCard";
import Navbar from "../navbar/Navbar";

export default function Home(){


return(
<>
<Navbar/>
<div className="container text-center">
 <h1 className="my-4 text-primary">Deje su reseña aqui.</h1>
<HomeCard/>
</div>  

</>
)

}