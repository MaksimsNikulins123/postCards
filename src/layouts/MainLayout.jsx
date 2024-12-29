import React from 'react';
import { Outlet } from 'react-router';

import { Header } from '../components/Header';

const MainLayout = ({searchValue, setSearchValue}) => {
  return (
    <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
