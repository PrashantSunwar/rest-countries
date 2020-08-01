import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__cont">
          <h1>Where in the world?</h1>
          <button className="mode-button">
            <span>
              <i class="fas fa-moon"></i>
            </span>
            Dark Mode
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
