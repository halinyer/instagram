import { Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav `
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
 
`

export const Container = styled.div`
  width: 100%;
  max-width: 950px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 10px;
`

export const NavLogo = styled.div`


`


export const NavInput = styled.div`
margin-left: 3rem;
`



export const NavLink = styled(Link)`
 color: #000;


`
export const Ul = styled.ul`
  
  display: flex;
  align-items: center;
  li{
    list-style: none;
    margin-left: 25px;
  }
 
`