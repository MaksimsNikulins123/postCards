import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, setSortByValue, setSortList } from '../redux/slices/filterSlice';
import { setCurrentPage } from '../redux/slices/paginationSlice';



export const Sort = () => {
  // console.log(sortList)
  const dispatch = useDispatch();
  const sortRef = useRef();
 
  const [open, setOpen] = useState(false);
  const {sortList, sortByValue} = useSelector((state) => state.filter)
  // const sortList = useSelector((state) => state.filter.sortList)
  // const sortBy = useSelector((state) => state.filter.sortBy)


    useEffect(() => {

      // dispatch(setIsLoading(true))
  
      const url = new URL("https://676c71c20e299dd2ddfcd273.mockapi.io/sortList");
      fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          dispatch(setSortList(json))
          dispatch(setSortByValue(json[0]));
        })
        .finally(() => {
          // dispatch(setIsLoading(false));
        });
    }, [dispatch]);

   
  const handleOnSortClick = (event) => {
      // console.log(event)
      if(event.target !== sortRef.current) {
        setOpen(false)
      }
  
  }
  useEffect(() => {
    document.body.addEventListener('click', handleOnSortClick)
    return () => document.body.removeEventListener('click', handleOnSortClick)
  }, [])
   

  const onClickListItem = (obj) => {
    dispatch(setSortByValue(obj))
    setOpen(false);
    dispatch(setCategoryId(0))
    dispatch(setCurrentPage(1))
    
  };


  return (
    <div  className="sort">
      <div  className={`sort__label ${open ? 'active' : ''}`} >
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span ref={sortRef} onClick={() => setOpen(!open)}>{sortByValue.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={sortByValue.name === obj.name ? 'active' : ''}
                >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
