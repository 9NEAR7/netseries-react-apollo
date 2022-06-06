import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <img className='logo' src='https://yt3.ggpht.com/QuXNQcx3w8qU-LL-rVMOcrvjsJFiLPvYL_nm7jBxXOLWbuSHwShayZi-3wv7KpYf7VWAp_f3WA=s900-c-k-c0x00ffffff-no-rj'></img>
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
    </div>
  );
};

export default Header;