import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../src/components/homeMovies/Home";
import LoginRegister from "../src/components/loginRegister/LoginRegister";

export default function Router(){
    
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/loginRegister" element={<LoginRegister/> } />
        </Routes>
    </BrowserRouter>
)



}