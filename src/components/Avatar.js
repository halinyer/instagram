import React from 'react';
import ava from '../assets/avatar.jpg'
import { Border } from './Avatar-element';

const Avatar = ({image,width}) => {
  return (
       <Border width={width}>
           <img src={image}/>
       </Border>
  )
};

export default Avatar;
