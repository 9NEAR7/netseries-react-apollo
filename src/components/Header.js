import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        
        <img className='moneda' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/150px-Python-logo-notext.svg.png' ></img>
        
        <Link to="/" className="no-underline black">
          <div className="fw7 mr1">Series</div>
        </Link>        
        <Link to="/" className="ml1 no-underline black">
          new
        </Link>
        <div className="ml1">|</div>
        <Link
          to="/create"
          className="ml1 no-underline black"
        >
          submit
        </Link>
      </div>
      <div>
        <b className='header-name'>Cristian Terán Juárez</b><br></br>
        <b className='header-name'>S18003177</b>
      </div>
    </div>
  );
};

export default Header;