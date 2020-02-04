import React, { Component } from 'react';

import './style.css';

import loginImg from '../../assets/user.png';

function Header() {
  return(
    <header>
      <div className="container flex">
        <h1>Facebook</h1>
        <div className="login">
          <a href="">Meu Perfil</a>
          <img src={loginImg}/>
        </div>
      </div>
    </header>
  )
}

export default Header;