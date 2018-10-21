import React from 'react'
import Logo from '../img/logo.svg'
import Menu from '../img/menu.svg'

const Header = (props) => {
        return (
            <header className="App-header">
              <div id="logo">
                <img src={Logo} alt="Hike PA logo" />
              </div>
              <div id="tagline">
                <h1>Hike PA</h1>
              </div>
              <nav id="menu">
                <button>
                  <img src={Menu} alt="toggle menu"/>
                </button>
              </nav>
            </header> 
		);
}

export default Header;