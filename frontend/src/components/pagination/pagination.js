import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ItemCardContext } from "./../../contexts/main";
import { HeaderContext } from "../../contexts/header";

const Pagination = () => {
  const itemCardContext = useContext(ItemCardContext);
  const headerContext = useContext(HeaderContext);

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        itemCardContext.setOffset(selectedPage * itemCardContext.perPage);
        headerContext.setOffset(selectedPage * itemCardContext.perPage);
    };

  return (
    <>
      <div className="paginate-page">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={headerContext.page}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default Pagination;
