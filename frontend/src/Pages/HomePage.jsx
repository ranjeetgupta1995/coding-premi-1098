
import React from "react";
import styled from "styled-components"

export const HomePage= ()=>{

    return(
        <DIV>
        <div id="top">
            <div>
                <h1>Empowering Education, Connecting Minds <br /> <span>Welcome to Edusync Your Free Learning Hub...</span></h1>
                
                
            </div>
        </div>

        
        <h1>Learn without limits...</h1>

        <div id="gif">
            <div>
            <p>At Edusync, we believe in the transformative power of education. Our mission is to foster a dynamic learning environment where knowledge meets innovation. Join us in shaping the future of education – where curiosity meets discovery, and knowledge knows no bounds. Let's sync up for an inspiring educational journey together!</p>
            <button>Learn More</button>
            </div>
            <div>
            <img src="https://i.gifer.com/IGCF.gif" alt="" />
            </div>
        </div>

        <hr />
        
        </DIV>
    )
}

const DIV= styled.div`
font-family: 'Poppins', sans-serif;
width: 100%;
margin: auto;

h1{
    font-size: 250%;
    padding: 1rem;
    text-align: center;
}

    
#top{
    background-image: url('https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); /* Update the path */
    background-size: cover; 
    background-position: 0%;
    background-repeat: no-repeat;
    height: 600px;
    width: 100%;
    margin-top: -32px;
    color: white;
    text-align: start;   
}
#top{
    h1{
        font-family: 'Dancing Script', cursive;
        color: black;
        width: 72%;
        padding: 11rem;
        margin-left: -2%;
        font-size: 300%;
        text-align: center;
    }
    span{
        font-size: 50%;
        
    }

}

#gif{
    display: flex;
    flex-direction: row;
    padding: 2rem;
}
#gif p{
    font-size: 120%;
    padding: 0.9rem;
    text-align: center;

}
#gif button{
    text-align: center;
    width: 17%;
    margin: auto;
    margin-left: 40%;
    padding: 0.5rem;
    background-color: #333;
    color: white;
}
#gif button:hover{
    background-color: lightgray;
    color: black;
}
#gif div{
    width: 50%;
}
#gif img{
    width: 90%;
    height: 400px;
}
`