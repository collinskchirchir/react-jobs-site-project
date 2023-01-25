import React from 'react'
import styled from 'styled-components';
import logo from '../img/logo1.svg';
import hero from '../img/hero.jpg';
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
  min-height: 90vh;
  background: linear-gradient(to top, rgba(0,0,0, 0.2) , rgba(0,0,0, 0.5)), url(${hero}) no-repeat;
  .navigation{
    border-bottom: 1px solid #f4f7f773;
    .nav-wrapper{
      margin: 0 20rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 10vh;
    }
    .logo{
      img{
        width: 50px
      }
    }
    ul{
      display: flex;
      align-items: center;
      li{
        margin: 0 1rem
      }
    }
    .cta-btn{
      display: inline-block;
      background-color: var(--color-primary);
      padding: 1rem 1.7rem;
      border-radius: 7px;
      

    }
  }
`;

export default Header;

