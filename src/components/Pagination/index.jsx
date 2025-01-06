import React from "react";
// import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from "react-redux";

import styles from "./Pagination.module.scss";

import { setCurrentPage } from "../../redux/slices/paginationSlice";
import { Link } from "react-router";

// type PaginationProps = {
//   currentPage: number;
//   onChangePage: (page: number) => void;
// };

export const Pagination = () => {

  const pagesCount = useSelector((state) => state.pagination.pagesCount)
  const currentPage = useSelector((state) => state.pagination.currentPage)
  const dispatch = useDispatch()


  const pages = [...new Array(pagesCount)].map((_, index) => (
    <li key={index}>
      <Link className={currentPage === (index + 1) ? 'active' : ''} onClick={() => dispatch(setCurrentPage(index + 1))}>{index + 1}</Link>
    </li>
  ));
  // console.log(pages)

  return (
    <div className={styles.pagination}>
      <div className={styles.root}>{pages}</div>
    </div>
  );
};
