
import React from "react";
import styled from "styled-components"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlay } from "@fortawesome/free-solid-svg-icons";

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
        

        <div className="learning-section">
        <div className="learning-left">
          <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="learning-right">
          <div className="learning-right-heading">
            <h1>
              Enhance Your Learning with us <br />
              From Any Where
            </h1>
          </div>
          <div className="learning-right-paragraph">
            <p>
             Unleash the potential of remote education with us,
              <br /> where 'anywhere' becomes the classroom for 
              <br />
              boundless knowledge enrichment.
            </p>
          </div>

          <div className="learning-right-ticks">
            <div className="ticks-cover">
              <div className="ticks ticks-red">
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "ffffff", fontSize: "20px" }}
                />
              </div>
              <p>Expert Trainer</p>
            </div>

            <div className="ticks-cover ">
              <div className="ticks ticks-green">
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "ffffff", fontSize: "20px" }}
                />
              </div>
              <p>Great Result</p>
            </div>
            <div className="ticks-cover">
              <div className="ticks ticks-light-blue">
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "ffffff", fontSize: "20px" }}
                />
              </div>
              <p>Online Learning</p>
            </div>
            <div className="ticks-cover">
              <div className="ticks ticks-dark-blue">
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "ffffff", fontSize: "20px" }}
                />
              </div>
              <p>Life Time Access</p>
            </div>
          </div>
          <div>
            <button className="extra_big_dark_button">Dicover More</button>
          </div>
        </div>
      </div>
        
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
    width: 20%;
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


.learning-section{
        width : 90%;
        margin: auto;
        display : flex;

    }
    .learning-left{
        width : 50%;
        margin: 1.5rem;
        padding: 2%;

    }
    .learning-left img{
        width : 100%;
    }
    .learning-right{
        width : 50%;
        display : flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin: 2rem;
        
    }
    .learning-right-heading h1{
        font-weight : 500;
    }
    .learning-right-paragraph p{
        font-size : 18px;
        text-align: center;
    }
    .learning-right-ticks{
        display : grid;
        grid-template-columns : repeat(2,1fr); 
        gap : 1rem;
        margin-left: 4%;
    }
    .ticks-cover{
        display : flex;
        align-items : center;
    }
    .ticks{
        display : flex;
        align-items : center;
        padding : 1rem;
        border-radius : 100px; 
    }
    .ticks-cover p{
        margin : 0 1rem;
    }
    .ticks-red{
        background-color : #f23f3c;
    }
    .ticks-green{
        background-color : #0fae53;
    }
    .ticks-light-blue{
        background-color : #0c81c7;
    }
    .ticks-dark-blue{
        background-color : #135e98;
    }
    .extra_big_dark_button{
        padding-top: 2%;
        margin-top: 2%;
        margin-left: 30%;
        background-color: #333;
    }
    .extra_big_dark_button:hover{
        background-color: lightgray;
        color: black;
    }
`