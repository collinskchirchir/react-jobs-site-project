import React from 'react'
import styled from 'styled-components';
import logo from '../img/logo1.svg';
import hero from '../img/hero.jpg';
import search from '../img/search.svg'
/*eslint-disable*/
function Header() {
  return (
    <HeaderStyled>
      <nav className='navigation'>
        <div className='nav-wrapper'>
          <div className='logo'>
            <img src={logo}   alt='Logo '></img>
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
      {/* Header Content */}
      <div className='header-content'>
        <h1>
            Over <span>10 000</span> jobs available <br />
            You can choose your dream job
        </h1>
        <p className='main-para'>
          Find a great job for building your bright career. We have many openings available
        </p>
        <div className='input-control'>
          <input type="text" placeholder='Job Title of Keywords' />
          <select name='location' id='location'>
            <option value=''>London</option>
            <option value=''>Manchester</option>
            <option value=''>Liverpool</option>
            <option value=''>Swansea</option>
          </select>
          <select name='jobs' id='jobs'>
            <option value=''>Game Development</option>
            <option value=''>Game Desinging</option>
            <option value=''>Web Design</option>
            <option value=''>We Development</option>
            <option value=''>UI / UX</option>
          </select>
          <button className='search-btn'>
            <img src={search} alt='Button' /> 
          </button>
        </div> 
      </div>
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
        margin: 0 1rem;
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

