import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {  
 

  return (
    <>
        <Link to='website'>Website</Link>
        <Link to='admin'>Admin protected</Link>
        <Outlet />
    </>
  );
}

export default Navbar;