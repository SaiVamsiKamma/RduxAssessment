import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const NavContainer = styled.div`
  background-color: #333;
  padding: 20px;
  color: white;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li`
  font-size: 18px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &.active {
    color: #f39c12; 
  }

  &:hover {
    color: #3498db; 
  }
`;

function Nav() {
  return (
    <NavContainer>
      <h1>Order Manangement</h1>
      <NavList>
        <NavItem>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/cart" activeClassName="active">
            Cart
          </StyledNavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
}

export default Nav;
