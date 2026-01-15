import React, {Fragment} from 'react';
import {LogoImg} from '../../styles/Navbar.styled.jsx';
import logo from '../../assets/img/logo.svg';



export default function Logo() {

   return (
      <LogoImg src={logo} alt='Index'/>
   );
}