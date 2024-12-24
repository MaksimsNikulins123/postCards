// import logo from './logo.svg';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import './scss/app.scss';

import { Fragment } from 'react';

function App() {
  console.log('App render')
  return (
    <Fragment>
      <MainLayout />
      <Home />
      {/* Home
      Cart
      FullPizza
      NotFound */}
    </Fragment>
    // <Routes>
    //   <Route path="/" element={<MainLayout />}>
    //     <Route path="" element={<Home />} />
    //     <Route
    //       path="cart"
    //       element={
    //         <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
    //           <Cart />
    //         </Suspense>
    //       }
    //     />
    //     <Route
    //       path="pizza/:id"
    //       element={
    //         <Suspense fallback={<div>Идёт загрузка...</div>}>
    //           <FullPizza />
    //         </Suspense>
    //       }
    //     />
    //     <Route
    //       path="*"
    //       element={
    //         <Suspense fallback={<div>Идёт загрузка...</div>}>
    //           <NotFound />
    //         </Suspense>
    //       }
    //     />
    //   </Route>
    // </Routes>
  );
}

export default App;