import { Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav `
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
  display: flex;
  align-items: center;
 
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 950px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 9px;
`

export const NavLogo = styled.div`


`


export const NavInput = styled.div`
margin-left: 3rem;
`



export const NavLink = styled(Link)`
 color: #000;
 list-style: none;
 text-decoration: none;


`
export const NavbardNav = styled.ul`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  li{
    list-style: none;
    margin-left: 26px;
    text-align: center;
  }
 
`


export const NavItem = styled.li`

`