import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;

}

button{ 
    font-weight: bold;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 2px solid #23d997;
    border-radius: 10px;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #23d997;
        color: white;
    }
}

    h2{
        font-weight: lighter;
        font-size: 3rem;
        line-height: 1;
    }

    h3{
        color: white;
        line-height: 1;
    }

    h4{
        font-weight: bold;
    }

    a{ 
        font-size: 1.1rem;
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1rem;
        line-height: 1.5;
    }

    span{
        font-weight: bold;
        color: #23d997;
    }

`;


export default GlobalStyle;