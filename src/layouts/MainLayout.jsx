import React from 'react';
import { Outlet } from 'react-router';

import { Header } from '../components/Header';

const MainLayout = () => {

  console.log('Main layout render')
  return (
    <div className="wrapper">
        <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
