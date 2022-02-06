import React from 'react';
import {Routes, Route} from 'react-router-dom';
import  Navbard  from '../components/Navbard';
import Explore from '../view/Explore';
import Home from '../view/Home';
import Profile from '../view/Profile';

const AppRouter = () => {
  return (
      <>
        <Navbard/>
         <Routes>
             <Route path="/" element={<Home/> }/>
             <Route path=":profile" element={<Profile/>}>
                <Route index element={<h2>Publications</h2>}/>
                <Route path="save" element={<h2>Save</h2>}/>
                <Route path="tagged" element={<h2>Fotos en la que apareces</h2>}/>
             </Route>    
             <Route path='explore' element={<Explore/>}/>
         </Routes>
      </>
  )
};

export default AppRouter;
