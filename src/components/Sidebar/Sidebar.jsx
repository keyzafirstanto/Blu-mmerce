import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SidebarData } from '../Sidebar/SidebarData';
import SubMenu from '../Sidebar/SubMenu';
import { IconContext } from 'react-icons/lib';
import 'boxicons';

import '../Sidebar/sidebarstyles.css';

const Nav = styled.div`
  background: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #8ccfcd;
  width: 250px;
  height: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 202px;
  padding-top: 2%;
  padding-bottom: 20%;
  left: 0;
  transition: 350ms;
  z-index: 4;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [searchInput, setSearchInput] = useState({
    name: '',
  });

  const inputHandler = (e) => {
    const value = e.target.value;
    setSearchInput({ search: value });
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <div className="input_search">
                <input
                  onChange={inputHandler}
                  type="text"
                  placeholder="...Search"
                />
                <button>
                  <box-icon name="search"></box-icon>
                </button>
              </div>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
          <div>
            <button>prev</button>
            <button>next</button>
          </div>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;

// left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
