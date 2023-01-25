import React from 'react'
import styled from 'styled-components';
import logo from '../img/logo1.svg';
/*eslint-disable*/
function Header() {
  return (
    <HeaderStyled>
      <nav className='navigation'>
        <div className='nav-wrapper'>
          <div className='logo'>
            <img src={logo}   alt=''></img>
          </div>
          <ul>
            <li>
              <a href='#'>Home</a>  
            </li>            
            <li>
              <a href='#'>Near Jobs</a>  
            </li>            
            <li>
              <a href='#'>Find Jobs</a>  
            </li>            
            <li>
              <a href='#'>News</a>  
            </li>            
            <li>
              <a href='#'>Contact</a>  
            </li>            
          </ul>
          <a href='#' className='cta-btn'>+ Create Account</a>
        </div>
      </nav>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`

`;

export default Header;

