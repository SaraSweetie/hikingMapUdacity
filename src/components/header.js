import React from 'react'
import Logo from '../img/logo.svg'
import Menu from '../img/menu.svg'

const Header = (props) => {
        return (
            <header className="App-header">
              <div id="logo">
                <img src={Logo} alt="Hike PA logo" />
                <h1>Hike PA</h1>
              </div>
              <div id="tagline">
                <p>some text here?</p>
              </div>
              <nav id="menu"><img src={Menu} alt="menu"/></nav>
            </header> 
		);
}

export default Header;
