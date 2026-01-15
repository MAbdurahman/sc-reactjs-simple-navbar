import React, {useState} from 'react';
import Logo from '../../Logo/index.jsx';
import {
   NavbarWrapper,
   StyledFontAwesomeIcon,
   StyledNavLink,
   NavLinkWrapper
} from '../../../styles/Navbar.styled.jsx';
import {faBars} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
   const [active, setActive] = useState(false);
   const links = [
      {
         page: 'Home',
         href: '/home'
      },
      {page: 'About', href: '/about'},
      {page: 'Products', href: '/products'},
      {
         page: 'Contact',
         href: '/contact'
      },
      {page: 'Get Started', href: '/sign-in'}
   ];

   return (
      <section className='utils-container-fluid navbar-section'>
         <div className='utils-container'>
            <NavbarWrapper>
               <Logo/>
               <StyledFontAwesomeIcon icon={faBars}
                                      onClick={() => setActive(!active)}/>
               <NavLinkWrapper active={active}>
                  {links.map((link) => (
                     <StyledNavLink
                        activeclassname='active'
                        key={link.page}
                        to={link.href}
                        onClick={() => setActive(false)}
                     >
                        {link.page}
                     </StyledNavLink>
                  ))}
               </NavLinkWrapper>
            </NavbarWrapper>
         </div>
      </section>
   );
}