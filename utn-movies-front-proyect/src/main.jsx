import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Router from "../src/Router"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router/>
  </StrictMode>,
)
