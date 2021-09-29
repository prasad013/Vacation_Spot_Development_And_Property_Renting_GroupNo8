import React from 'react';
import './header.css';

function Header() {
    return (
        <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Take a Break and</span>
          <span className="headerTitleLg">Plan It</span>
        </div>
        <img
          className="headerImg"
          src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/04/76.jpg"
          alt=""
        />
      </div>
    )
}

export default Header
