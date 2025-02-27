import React from 'react';
// import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

import styles from './Search.module.scss';
import { setCurrentPage } from '../../redux/slices/paginationSlice';


export const Search = () => {

  const searchValue = useSelector((state) => state.filter.searchValue)
  const dispatch = useDispatch();
  // const [value, setValue] = React.useState('');
  const inputRef = React.useRef(null);

  const onChangeSearchValue = (e) => {
    dispatch(setSearchValue(e.target.value))
    dispatch(setCurrentPage(1))
  }

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    inputRef.current.focus();
  };

  // const updateSearchValue = React.useCallback(
  //   debounce((str) => {
  //     dispatch(setSearchValue(str));
  //   }, 150),
  //   [],
  // );

  // const onChangeInput = (event) => {
  //   setValue(event.target.value);
  //   // updateSearchValue(event.target.value);
  // };
  // console.log('Search render')

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        id="EditableLine"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(e) =>  onChangeSearchValue(e)}
        className={styles.input}
        placeholder="Search postcards..."
      />
      {searchValue && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};
