import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';





const Nav = () => {
  return (

   
       <StyledNav>
           <h1>
            <Link to="/">Capture</Link>
           </h1>
           <ul className="text">
               <li>
                   <Link to="/">About Us</Link>
               </li>
               <li>
                   <Link to="/work">Our Work</Link>
               </li>
               <li>
                   <Link to="/contact">Contact Us</Link>
               </li>
           </ul>
       </StyledNav>
  
  )
};


//styled component
    const StyledNav = styled.nav`
        min-height: 10vh;
        display: flex;
        margin: auto;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 10rem;
        background: #282828;
        a{
            color: white;
            text-decoration: none;
        }
        ul{
           display: flex; 
           list-style: none;
        }
        li a{
            font-size: 0.9rem;
            Padding-left: 2rem;
        }
        h1 a{
            font-size: 1.8rem;
            font-family: "Lobster", cursive;
            font-weight: lighter;
        }
    `;



export default Nav