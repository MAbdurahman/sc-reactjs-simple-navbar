import React from 'react';
import styled from 'styled-components';

const NavList  = styled.ul`
   list-style: none;
   display: flex;
   flex-flow: row nowrap;

   li {
      padding: 16px 8px;
   }

   @media screen and (max-width: 768px) {
      flex-flow: column nowrap;
      background-color: #0d2538;
      position: fixed;
      transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(100%)')};
      top: 0;
      right: 0;
      height: 100vh;
      width: 100%;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;

      li {
         color: #fff;
      }
   }

`;

export default function Navigation({open}) {

   return (
      <NavList open={open}>
         <li>Home</li>
         <li>About Us</li>
         <li>Contact Us</li>
         <li>Sign In</li>
         <li>Sign Up</li>
      </NavList>

   );
}