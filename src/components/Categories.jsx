import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, setSortByValue } from '../redux/slices/filterSlice';
import { setCurrentPage } from '../redux/slices/paginationSlice';



export const Categories = () => {
  
  const {sortList, categories, categoryId} = useSelector((state) => state.filter)
  // const sortList = useSelector((state) => state.filter.sortList)
  // const categories = useSelector((state) => state.filter.categories);
  // const categoryId = useSelector((state) => state.filter.categoryId);

  const dispatch = useDispatch();

  const onChangeCategory = (i) => {
    dispatch(setCategoryId(i))
    dispatch(setSortByValue(sortList[0]))
    dispatch(setCurrentPage(1))
  }
 

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={categoryId === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}