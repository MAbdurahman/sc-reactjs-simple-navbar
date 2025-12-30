import React, {Fragment, useState} from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

const Hamburger = styled.div`
   position: fixed;
   top: 16px;
   right: 20px;
   z-index: 20;
   display: none;
   width: 2rem;
   height: 2rem;
   @media screen and (max-width: 768px) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
   }
   div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${({ open }) => open ? '#ccc' : '#333'};
      border-radius: 8px;
      transform-origin: 1px;
      transition: all 0.2s ease-in-out;
      &:nth-child(1) {
         transform: ${({ open }) => open ? 'translateY(12px) rotate(135deg)' : 'translateY(0) rotate(0)'};
      }
      &:nth-child(2) {
         transform: ${({ open }) => open ? 'scale(0)' : 'scale(1)'};
      }
      &:nth-child(3) {
         transform: ${({ open }) => open ? 'translateY(-12px) rotate(-135deg)' : 'translateY(0) rotate(0)'};
      }
   }

`;

export default function Burger() {
   const [open, setOpen] = useState(false)

   return (
      <Fragment>
         <Hamburger open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
         </Hamburger>
         <Navigation open={open} />
      </Fragment>

   );
}