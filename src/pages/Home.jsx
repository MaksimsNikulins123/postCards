import React from "react";

import { Sort } from "../components/Sort";
import { Pagination } from "../components/Pagination";
import { Categories } from "../components/Categories";
import { Content } from "../components/Content";


const Home = () => {

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All cards</h2>
      <Content />
      {/* {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )} */}

      <Pagination />
    </div>
  );
};

export default Home;
