import axios from "axios";
import { useEffect, useState } from "react";

export default function UseReview (movieId){
    const [reviews, setReviews] = useState([]); 
    const  [loading, setLoading] = useState(true)

useEffect(() =>{
    const fetchReviews = async () =>{
        try{
            const token = localStorage.getItem("token")

            if (!token) {
            return <p>Debes iniciar sesión para realizar una reseña.</p>
            }
            const response = await axios.get(`http://localhost:3000/api/reviews/movie${movieId}`,{
                  headers: {Authorization: `Bearer ${token}`,}
            });
            setReviews(response.data);

        }catch(err){
            console.log(`Error al traer las reseñas.`, err);
            setReviews([])

        }finally{
            setLoading(false)
        }

    if (movieId){
        fetchReviews()
    }
        [movieId]
    return {reviews, loading}
    }

});

}