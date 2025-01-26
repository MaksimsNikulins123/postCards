import React, { useEffect } from "react";

import qs from 'qs';
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setIsLoading } from "../redux/slices/filterSlice";
import { setItems } from "../redux/slices/contentSlice";
import { setPagesCount } from "../redux/slices/paginationSlice";

import { Skeleton } from "./Skeleton";
import { PostCardBlock } from "./PostCardBlock";
// import { useNavigate } from "react-router";




export const Content = () => {

  

  const maxItemsPerPage = useSelector((state) => state.settings.maxItemsPerPage)

  const items = useSelector((state) => state.content.items)

  const { isLoading, categoryId, sortByValue, searchValue } = useSelector((state) => state.filter) 
  
  const currentPage = useSelector((state) => state.pagination.currentPage)

  // const [skeletonsCount, setSkeletonsCount] = useState(maxItemsPerPage)

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const isMounted = useRef(false);


  // const onChangeCategory = (id) => {
  //   dispatch(setCategoryId(id));
  // };
  // useEffect(() => {
  //   if (isMounted.current) {
  //     const params = {
  //       categoryId: categoryId,
  //       // sortByValue: sortByValue,
  //       // currentPage: currentPage
  //     };
  
  //     const queryString = qs.stringify(params, { skipNulls: true });
  
  //     navigate(`/?${queryString}`);
  //   }
  //   // isMounted.current = true
  // }, [categoryId, navigate])

  useEffect(() => {
    // console.log("Get items by category")

    dispatch(setIsLoading(true))

    const params = qs.parse(window.location.search.substring(1))

    dispatch(setCategoryId(Number(params.categoryId)))

    const url = new URL(
      "https://676c71c20e299dd2ddfcd273.mockapi.io/PostCards"
    );
    categoryId > 0
      ? url.searchParams.append("category", categoryId)
      : url.searchParams.delete("category");
    fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        // setSkeletonsCount(json.length)
        dispatch(setItems(json));
        dispatch(setPagesCount(Math.ceil(json.length / maxItemsPerPage)));
        // setSkeletonCount(json.length)
       
      })
      .finally(() => {
        dispatch(setIsLoading(false))
        // isMounted.current = true

      });
  }, [categoryId, maxItemsPerPage, dispatch]);

  useEffect(() => {
    // console.log("Get items by sort")
    dispatch(setIsLoading(true));
    const url = new URL(
      "https://676c71c20e299dd2ddfcd273.mockapi.io/PostCards"
    );
    url.searchParams.append("sortBy", sortByValue.sortBy);
    url.searchParams.append("order", sortByValue.order);
    fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        // console.log(skeletonsCount)
        // setSkeletonsCount(json.length)
        dispatch(setItems(json));
      })
      .finally(() => {
        // console.log(skeletonsCount)
        dispatch(setIsLoading(false));
      });
  }, [sortByValue, dispatch]);



  const postcards = items
  .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
  .map((obj) => <PostCardBlock key={obj.id} {...obj} />);

  useEffect(() => {
    
    dispatch(setPagesCount(Math.ceil(postcards.length / maxItemsPerPage)));
    // dispatch(setCurrentPage(1));
   
  }, [searchValue, postcards, dispatch, maxItemsPerPage]);




  const postCardsPerPage = postcards.slice(
    maxItemsPerPage * (currentPage - 1),
    maxItemsPerPage * currentPage
  );

  //  console.log(postCardsPerPage.length)
  
   const skeletons = [...new Array(maxItemsPerPage)].map((_, index) => (
    <Skeleton key={index} />
  ));


  return (
    <div className="content__items">
     {isLoading ? skeletons : postCardsPerPage}
    

      {/* {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )} */}

    
    </div>
  );
};

