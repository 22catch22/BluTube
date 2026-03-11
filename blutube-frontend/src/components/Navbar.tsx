import React from 'react';
import { Container } from 'react-bootstrap';
 
 
function Navbar() {
  return (

    <div id = 'navbar-container'> 
    <nav className="navbar">
      <div className="style-scope ytd-masthead"><h2 className = 'blutube-title'>BluTube</h2><p>Legally Disctinct from YouTube!</p></div>
      <div id = 'searchbar' className= 'style-scope ytd-masthead'>

        <input id = 'blutube-search' type="text" role = 'search'placeholder="Search..." />
        <button id = 'blutue-search-button'>s</button>
      </div>

<div id = 'buttons-container'>
      <button className="create-button"> + create video</button>
      <button className="login-button">Login</button>
</div>
    </nav>
     </div>
  );
}
export default Navbar;