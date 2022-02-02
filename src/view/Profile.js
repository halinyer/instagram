import React from 'react';
import { Outlet } from 'react-router';

const Profile = () => {
  return (
      <div>
          <h3>Profile</h3>
          <Outlet/>
      </div>
  )
};

export default Profile;
