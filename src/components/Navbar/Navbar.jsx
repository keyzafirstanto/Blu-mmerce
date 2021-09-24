import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';
import Avatar from '@mui/material/Avatar';

import { IconButton, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div>
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <div className="navbar-list">
            <Link to="/" className="text-decoration-none">
              <h1 className="navbar-h1">Home</h1>
            </Link>
            <Link to="/" className="text-decoration-none">
              <h1 className="navbar-h1">Articles</h1>
            </Link>
            <Link to="/" className="text-decoration-none">
              <h1 className="navbar-h1">Shop</h1>
            </Link>
            <Link to="/" className="text-decoration-none">
              <h1 className="navbar-h1">Home</h1>
            </Link>
            <Link to="/" className="text-decoration-none">
              <h1 className="navbar-h1">Sale</h1>
            </Link>
          </div>
          <div className="navbar-items">
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton
              component={Link}
              to="/login"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge color="secondary">
                <Avatar />
              </Badge>
            </IconButton>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
