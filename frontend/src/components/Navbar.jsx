import React from 'react';
import styled from "styled-components"

const Navbar = () => {
    return (
      <NavbarWrapper>
        <LeftSection>
            <img style={{borderRadius: "5%"}} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-c5NJJSxHqPEZhZrlnwiUUkY5smYZ4GVseIXPJb8nBoua1t_r" alt="" />
        </LeftSection>
        <CenterSection>
          <NavLinks>
            <a href="/">Home</a>
            <a href="/course">Course</a>
            <a href="/blogs">Blogs</a> 
            <a href="/contact">Contact</a>
            <a href="/about">About Us</a>
           
          </NavLinks>
        </CenterSection>
        <RightSection>
          <AuthButtons>
          <a href="/login">Login</a>
          <a href="/signup">SignUp</a>
          </AuthButtons>
        </RightSection>
      </NavbarWrapper>
    );
  };
  
  export default Navbar;

  const LeftSection = styled.div`
  img{
    height: 50px;
    margin-top: 3%;
    margin-left: 5%;
    align-content: center;
  }
  `


  const NavbarWrapper = styled.nav`
  background-color: #333;
  /* padding: 0.3rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  width: 100%;

`;

const CenterSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 10%;

    &:hover {
      background-color: lightgray;
      color: black;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 3%;
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
  

  a {
    color: #fff;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 10%;

    &:hover {
      background-color: lightgray;
      color: black;
    }
  }
`;
