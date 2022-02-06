import React from 'react';
import Avatar from './Avatar';
import { Dropdown, Item } from './Menu-element';


const Menu = () => {
  return (
    <>
      <Avatar />
      <Dropdown>
          <Item>Perfil</Item>
          <Item>Save</Item>
          <Item>Salir</Item>
      </Dropdown>
    </>
  )
};



export default Menu;
