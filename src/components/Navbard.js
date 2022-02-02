import React from 'react';
import { Nav, NavInput, NavLink, NavLogo, Ul, Container } from './Navbard-element';
import { BiHomeAlt, BiAddToQueue, BiHeart, BiCompass } from "react-icons/bi";
import { IconContext } from 'react-icons/lib';
import Menu from './Menu';
import Seeker from './Seeker';

const Navbard = () => {
  return (
      <Nav>
          <Container>
              <NavLogo>
                  <h3>Instagram</h3>
              </NavLogo>

              <NavInput>
                  <Seeker/>
              </NavInput>

              <Ul>
                  <IconContext.Provider value={{ size: "1.7rem" }}>

                      <li>
                          <NavLink to="/">
                              <BiHomeAlt />
                          </NavLink>
                      </li>
                      <li>
                          <NavLink to="/">
                              <BiAddToQueue />
                          </NavLink>
                      </li>

                      <li>
                          <NavLink to="/">
                              <BiCompass />
                          </NavLink>
                      </li>

                      <li>
                          <NavLink to="/">
                              <BiHeart />
                          </NavLink>
                      </li>


                  </IconContext.Provider>


                  <li>
                      <Menu />
                  </li>

              </Ul>
          </Container>
      </Nav>
  )
};

export default Navbard;
