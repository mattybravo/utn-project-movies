import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../src/components/homeMovies/Home";
import LoginRegister from "../src/components/loginRegister/LoginRegister";
import MovieDetail from "../src/components/movieDetail/MovieDetail"
export default function Router(){
    
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/loginRegister" element={<LoginRegister/> } />
            <Route path="/movieDetail/" element={<MovieDetail/> } />
        </Routes>
    </BrowserRouter>
)



}