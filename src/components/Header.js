import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">Mina</div>
      <nav className="nav">
        <a href="#">Docs</a>
        <a href="#">Blog</a>
      </nav>
      <div className="social-icons">
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
      <button className="launch-button">Launch app</button>
    </header>
  );
}

export default Header;
