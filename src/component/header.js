import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css'

const Header = () => {
    
    return (
        <>
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><b>Tee</b> Pixxel<b>/Gra</b>phic design<b>/Web</b> developer</a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon" style={{ Color: '#6d8aac' }}></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarNav">
                 <ul class="navbar-nav">
                   <li class="nav-item">
                     <a class="nav-link " aria-current="page" href="#">Home</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link" href="#">Work</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link" href="#">About</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link">Contact</a>
                   </li>
                 </ul>
                </div>
            </div>
          </nav>
        </>
    );
}
export default Header;