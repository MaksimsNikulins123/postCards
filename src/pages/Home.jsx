import React, { useEffect, useState } from 'react';

// import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterByCategorySlice';
import { setSortByValue } from '../redux/slices/sortByValueSlice';
// import { useNavigate } from 'react-router-dom';



// import { sortList } from '../components/Sort';

// import { useAppDispatch } from '../redux/store';
// import { selectFilter } from '../redux/filter/selectors';
// import { selectPizzaData } from '../redux/pizza/selectors';
// import { fetchPizzas } from '../redux/pizza/asyncActions';
// import { SearchPizzaParams } from '../redux/pizza/types';

// import items from '../assets/postcards.json';
import { Sort } from '../components/Sort';
import { Skeleton } from '../components/PostCardBlock/Skeleton';
import { Pagination } from '../components/Pagination';
import { Categories } from '../components/Categories';
import { PostCardBlock } from '../components/PostCardBlock';





const Home = () => {

  const [loading, isLoading] = useState(true)
  const [items, setItems] = useState([])
  const [sortList, setSortList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1)

  const maxItmesPerPage = 6
  
  const categoryId  = useSelector((state) => state.filterByCategory.categoryId);
  const sortByValue = useSelector((state) => state.sortByValue.sortBy)
  const searcValue = useSelector((state) => state.search.searchValue)
  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  
  useEffect(() => {
    const url = new URL('https://676c71c20e299dd2ddfcd273.mockapi.io/PostCards')
    categoryId > 0 ? url.searchParams.append('category', categoryId) : url.searchParams.delete('category')
     fetch(url, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    })
    .then((res) => {
      return res.json()
    })
    .then((json) => { 
      setItems(json)
      setPagesCount(Math.ceil(json.length / maxItmesPerPage))
    })
    .finally(() => {
      isLoading(false)
    })
  },[categoryId])

  useEffect(() => {
    const url = new URL('https://676c71c20e299dd2ddfcd273.mockapi.io/PostCards')
    url.searchParams.append('sortBy', sortByValue.sortBy);
    url.searchParams.append('order', sortByValue.order)
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
  },[sortByValue])

  useEffect(() => {
    const url = new URL('https://676c71c20e299dd2ddfcd273.mockapi.io/sortList');
    fetch(url, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    })
    .then((res) => {
      return res.json()
    })
    .then((json) => { 
      setSortList(json)
      dispatch(setSortByValue(json[0]))
    })
  },[dispatch])


  useEffect(() => {
    setPagesCount(Math.ceil(postcards.length / maxItmesPerPage))
    setCurrentPage(1)
  },[searcValue])

  // console.log(category)
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

  

  const postcards = items.filter(obj => obj.title.toLowerCase().includes(searcValue.toLowerCase())).map((obj) => <PostCardBlock key={obj.id} {...obj} />);
  
  const postCardsPerPage = postcards.slice(maxItmesPerPage * (currentPage - 1), maxItmesPerPage * currentPage)
  const skeletons = [...new Array(maxItmesPerPage)].map((_, index) => <Skeleton key={index} />);

  // const onChangeSerchValue = () => {
  //   setPagesCount(postcards.length)
  // }
  // console.log('Home render')
  // console.log(postcards.length)

  return (
    <div className="container">
      <div className="content__top">
        <Categories category={categoryId} onChangeCategory={onChangeCategory}/>
        <Sort sortList={sortList} sortBy={sortByValue} onChangeSortBy={(value) => dispatch(setSortByValue(value))}/>
      </div>
      <h2 className="content__title">All cards</h2>
      <div className="content__items">{loading ? skeletons : postCardsPerPage}</div>
     
    
      {/* {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )} */}

      <Pagination pagesCount={pagesCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
