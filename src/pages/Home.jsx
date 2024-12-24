import React from 'react';
import { Categories } from '../components/Categories';
import { PizzaBlock } from '../components/PizzaBlock';
// import qs from 'qs';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import { Categories, Sort, PizzaBlock, Skeleton, Pagination } from '../components';

// import { sortList } from '../components/Sort';

// import { useAppDispatch } from '../redux/store';
// import { selectFilter } from '../redux/filter/selectors';
// import { selectPizzaData } from '../redux/pizza/selectors';
// import { setCategoryId, setCurrentPage, setFilters } from '../redux/filter/slice';
// import { fetchPizzas } from '../redux/pizza/asyncActions';
// import { SearchPizzaParams } from '../redux/pizza/types';

const Home = () => {
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  // const isMounted = React.useRef(false);

  // const { items, status } = useSelector(selectPizzaData);
  // const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

  // const onChangeCategory = React.useCallback((idx) => {
  //   dispatch(setCategoryId(idx));
  // }, []);

  // const onChangePage = (page) => {
  //   dispatch(setCurrentPage(page));
  // };

  // const getPizzas = async () => {
  //   const sortBy = sort.sortProperty.replace('-', '');
  //   const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
  //   const category = categoryId > 0 ? String(categoryId) : '';
  //   const search = searchValue;

  //   dispatch(
  //     fetchPizzas({
  //       sortBy,
  //       order,
  //       category,
  //       search,
  //       currentPage: String(currentPage),
  //     }),
  //   );

  //   window.scrollTo(0, 0);
  // };

  // // Если изменили параметры и был первый рендер
  // React.useEffect(() => {
  //   // if (isMounted.current) {
  //   //   const params = {
  //   //     categoryId: categoryId > 0 ? categoryId : null,
  //   //     sortProperty: sort.sortProperty,
  //   //     currentPage,
  //   //   };

  //   //   const queryString = qs.stringify(params, { skipNulls: true });

  //   //   navigate(`/?${queryString}`);
  //   // }

  //   // const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
  //   // const sortObj = sortList.find((obj) => obj.sortProperty === params.sortBy);
  //   // dispatch(
  //   //   setFilters({
  //   //     searchValue: params.search,
  //   //     categoryId: Number(params.category),
  //   //     currentPage: Number(params.currentPage),
  //   //     sort: sortObj || sortList[0],
  //   //   }),
  //   // );

  //   getPizzas();
  //   // isMounted.current = true;
  // }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  // // Парсим параметры при первом рендере
  // // React.useEffect(() => {
  // //   if (window.location.search) {
  // //     const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
  // //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
  // //     dispatch(
  // //       setFilters({
  // //         searchValue: params.search,
  // //         categoryId: Number(params.category),
  // //         currentPage: Number(params.currentPage),
  // //         sort: sort || sortList[0],
  // //       }),
  // //     );
  // //   }
  // //   isMounted.current = true;
  // // }, []);

  const items =[
      {
        "id": 0,
        "imageUrl": "https://www.andersondesigngroupstore.com/cdn/shop/products/BYO_Postcards_1200px.jpg?v=1485875674",
        "name": "Пепперони Фреш с перцем",
        "types": [0, 1],
        "sizes": [26, 30, 40],
        "price": 803,
        "category": 0,
        "rating": 4
      },
      {
        "id": 1,
        "imageUrl": "https://d1e8vjamx1ssze.cloudfront.net/product-images/postcard-31.png",
        "name": "Сырная",
        "types": [0],
        "sizes": [26, 40],
        "price": 245,
        "category": 1,
        "rating": 6
      },
      {
        "id": 2,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_OIBSO1uofGKdVHkGj6tcix9g3pD-oB4oPw&s",
        "name": "Цыпленок барбекю",
        "types": [0],
        "sizes": [26, 40],
        "price": 295,
        "category": 1,
        "rating": 4
      },
      {
        "id": 3,
        "imageUrl": "https://img.freepik.com/free-vector/hand-drawn-summer-post-card-template-with-tropical-island_23-2147806612.jpg",
        "name": "Кисло-сладкий цыпленок",
        "types": [1],
        "sizes": [26, 30, 40],
        "price": 275,
        "category": 2,
        "rating": 2
      },
      {
        "id": 4,
        "imageUrl": "https://img.freepik.com/free-vector/hand-drawn-summer-post-card-template-with-beach-cocktails_23-2147806614.jpg",
        "name": "Чизбургер-пицца",
        "types": [0, 1],
        "sizes": [26, 30, 40],
        "price": 415,
        "category": 3,
        "rating": 8
      },
      {
        "id": 5,
        "imageUrl": "https://i.pinimg.com/736x/ad/e6/5d/ade65de37e58c47b73fad0f859a80085.jpg",
        "name": "Крэйзи пепперони",
        "types": [0],
        "sizes": [30, 40],
        "price": 580,
        "category": 2,
        "rating": 2
      },
      {
        "id": 6,
        "imageUrl": "https://www.andersondesigngroupstore.com/cdn/shop/products/BYO_Postcards_1200px.jpg?v=1485875674",
        "name": "Пепперони",
        "types": [0, 1],
        "sizes": [26, 30, 40],
        "price": 675,
        "category": 1,
        "rating": 9
      },
      {
        "id": 7,
        "imageUrl": "https://i.etsystatic.com/7608316/r/il/96d9c5/2818793441/il_570xN.2818793441_gklc.jpg",
        "name": "Маргарита",
        "types": [0, 1],
        "sizes": [26, 30, 40],
        "price": 450,
        "category": 4,
        "rating": 10
      },
      {
        "id": 8,
        "imageUrl": "https://i.etsystatic.com/18884846/r/il/64285a/3248865132/il_570xN.3248865132_ml9s.jpg",
        "name": "Четыре сезона",
        "types": [0, 1],
        "sizes": [26, 30, 40],
        "price": 395,
        "category": 5,
        "rating": 10
      },
      {
        "id": 9,
        "imageUrl": "https://i.etsystatic.com/18884846/r/il/64285a/3248865132/il_570xN.3248865132_ml9s.jpghttps://i.etsystatic.com/18884846/r/il/b380c4/3296538945/il_570xN.3296538945_fnvc.jpg",
        "name": "Овощи и грибы 🌱",
        "types": [0, 1],
        "sizes": [26, 30, 40],
        "price": 285,
        "category": 5,
        "rating": 7
      }
    ]

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  // const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  console.log('Home render')
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        {/* <Sort value={sort} /> */}
      </div>
      <h2 className="content__title">All cards</h2>
      <div className='content__items'>
        {pizzas}
      </div>
    
      {/* {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )} */}

      {/* <Pagination currentPage={currentPage} onChangePage={onChangePage} /> */}
    </div>
  );
};

export default Home;
