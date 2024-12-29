import React, { useEffect, useState } from 'react';
import { Categories } from '../components/Categories';
import { PostCardBlock } from '../components/PostCardBlock';
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

// import items from '../assets/postcards.json';
import { Sort } from '../components/Sort';
import { Skeleton } from '../components/PostCardBlock/Skeleton';

const Home = ({searchValue}) => {

  const [loading, isLoading] = useState(true)
  const [items, setItems] = useState([])
  const [sortList, setSortList] = useState([]);
  const [category, setCategory] = useState(0);
  const [sortBy, setSortBy] = useState(
    {"name": "popularity (DESC)",
    "sortBy": "rating",
    "order": "desc"}
  );

  const maxItmesPerPage = 6


  useEffect(() => {
    const url = new URL('https://676c71c20e299dd2ddfcd273.mockapi.io/PostCards')
    category > 0 ? url.searchParams.append('category', category) : url.searchParams.delete('category')
    fetch(url, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    })
    .then((res) => {
      return res.json()
    })
    .then((json) => { 
      setItems(json)
    })
    .finally(() => {
      isLoading(false)
    })
  },[category])

  useEffect(() => {
    const url = new URL('https://676c71c20e299dd2ddfcd273.mockapi.io/PostCards')
     url.searchParams.append('sortBy', sortBy.sortBy);
    url.searchParams.append('order', sortBy.order)
    fetch(url, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    })
    .then((res) => {
      return res.json()
    })
    .then((json) => { 
      setItems(json)
    })
    .finally(() => {
      isLoading(false)
    })
  },[sortBy])

  useEffect(() => {
    const url = new URL('https://676c71c20e299dd2ddfcd273.mockapi.io/sortList');
    // url.searchParams.append('sortBy', sortBy.sortBy);
    // url.searchParams.append('order', sortBy.order)
    fetch(url, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    })
    .then((res) => {
      return res.json()
    })
    .then((json) => { 
      setSortList(json)
      // setSortBy(json[0])
    })
  },[])

  console.log(category)
  // useEffect(() => {
  //   fetch(`https://676c71c20e299dd2ddfcd273.mockapi.io/PostCards?sortBy=${category}`)
  //   .then((res) => {
  //     return res.json()
  //   })
  //   .then((json) => { 
  //     setItems(json)
  //   })
  //   .finally(() => {
  //     isLoading(false)
  //   })
  // },[category])

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

  

  const postcards = items.filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj) => <PostCardBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(maxItmesPerPage)].map((_, index) => <Skeleton key={index} />);

  console.log('Home render')
  return (
    <div className="container">
      <div className="content__top">
        <Categories category={category} onChangeCategory={(i) => setCategory(i)}/>
        <Sort sortList={sortList} sortBy={sortBy} onChangeSortBy={(value) => setSortBy(value)}/>
      </div>
      <h2 className="content__title">All cards</h2>
      <div className="content__items">{loading ? skeletons : postcards}</div>
     
    
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
