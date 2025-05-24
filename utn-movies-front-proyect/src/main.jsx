import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/homeMovies/Home';
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Home/>
  </StrictMode>,
)
