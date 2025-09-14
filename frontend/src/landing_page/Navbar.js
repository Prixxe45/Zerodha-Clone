import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
      <nav class="navbar  navbar-expand-lg bg-body-tertiary border-bottom border-light-subtle fixed-top " style={{backgroundColor:"#FFFFFF", padding:""}}>
        <div class="container-fluid p-2 d-flex align-items-center " style={{marginLeft:"15%"}}>
          <Link class="navbar-brand  " to="/" >
            <img src="media/images/logo.svg" style={{width:"22%"}} alt="Logo"/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item mx-2">
                <Link class="nav-link " aria-current="page" to="/signup" >
                  Signup
                </Link>
              </li>
              <li class="nav-item  mx-2  ">
                <Link class="nav-link"  aria-current="page" to="/about" >
                  About
                </Link>
              </li>
                 <li class="nav-item  mx-2">
                <Link class="nav-link"  aria-current="page" to="/product" >
                  Product
                </Link>
              </li>
                 <li class="nav-item mx-2">
                <Link class="nav-link"  aria-current="page" to="/pricing" >
                  Pricing
                </Link>
              </li> <li class="nav-item  mx-2">
                <Link class="nav-link"  aria-current="page" to="/support" >
                  Support
                </Link>
              </li>
             
             
            </ul>
          
          </div>
        </div>
      </nav>
    
  );
};

export default Navbar;
