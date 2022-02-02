import React from 'react';
import {BiSearch} from "react-icons/bi";
import { IconContext } from 'react-icons/lib';
import { Search} from './Seeker-element';

const Seeker = () => {
  return (
      <Search>
          <IconContext.Provider value={{marginLeft:"20px"}}>
             <BiSearch/>
          </IconContext.Provider>
           
          <div>
             <input placeholder='Buscar'/>
          </div>
      </Search>
  )
};

export default Seeker;
