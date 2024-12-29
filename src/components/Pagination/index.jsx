import React from "react";
// import ReactPaginate from 'react-paginate';

import styles from "./Pagination.module.scss";

// type PaginationProps = {
//   currentPage: number;
//   onChangePage: (page: number) => void;
// };

export const Pagination = ({ pagesCount, currentPage, setCurrentPage }) => {
  const pages = [...new Array(pagesCount)].map((_, index) => (
    <li key={index}>
      <a className={currentPage === (index + 1) ? 'active' : ''} onClick={() => setCurrentPage(index + 1)}>{index + 1}</a>
    </li>
  ));
  // console.log(pages)

  return (
    <div className={styles.pagination}>
      <div className={styles.root}>{pages}</div>
    </div>
  );
};

// <ReactPaginate
//   className={styles.root}
//   breakLabel="..."
//   nextLabel=">"
//   previousLabel="<"
//   onPageChange={(event) => onChangePage(event.selected + 1)}
//   pageRangeDisplayed={4}
//   pageCount={3}
//   forcePage={currentPage - 1}
// />
// );
