import React from 'react';
import Burger from './Burger.jsx';
import styled from 'styled-components';


const Nav = styled.nav`
   width: 100%;
   height: 55px;
   border-bottom: 2px solid #f1f1f1;
   padding: 0 1.5em;
   display: flex;
   justify-content: space-between;

   .brand {
      padding: 0.5em 0;
      font-size: 1.5rem;
      font-weight: 700;
   }
`

export default function Navbar() {

   return (
      <Nav className='utils-container'>
         <div className='brand'>
            Logo Brand
         </div>
         <Burger/>
      </Nav>

   );
}