import React from 'react';
import ava from '../assets/avatar.jpg'
import { Border } from './Avatar-element';

const Avatar = () => {
  return (
       <Border>
           <img src={ava}/>
       </Border>
  )
};

export default Avatar;
