import React from 'react';
import { Nav, NavInput, NavLink, NavLogo,NavbardNav, Container, NavItem } from './Navbard-element';
import { BiHomeAlt, BiAddToQueue, BiHeart, BiCompass } from "react-icons/bi";
import { IconContext } from 'react-icons/lib';
import Seeker from './Seeker';
import Avatar from './Avatar';
import { useSelector } from 'react-redux';

const Navbard = () => {
    const {image,name} = useSelector(state => state.profile)

  return (
      <Nav>
          <Container>
              <NavLogo>
                  <h3>Instagram</h3>
              </NavLogo>

              <NavInput>
                  <Seeker />
              </NavInput>

              <NavbardNav>
                  <IconContext.Provider value={{ size: "1.7rem" }}>
                      <NavItem>
                          <NavLink to="/">
                              <BiHomeAlt />
                          </NavLink>
                      </NavItem>

                      <NavItem>
                          <NavLink to="/">
                              <BiAddToQueue />
                          </NavLink>
                      </NavItem>

                      <NavItem>
                          <NavLink to="/explore">
                              <BiCompass />
                          </NavLink>
                      </NavItem>

                      <NavItem>
                          <NavLink to="/">
                              <BiHeart />
                          </NavLink>
                      </NavItem>

                      <NavItem>
                          <NavLink to={`/${name}`}>
                          <Avatar image={image}/>
                          </NavLink>
                      </NavItem>
                  </IconContext.Provider>

              </NavbardNav>
          </Container>
      </Nav>
  )
};

export default Navbard;
