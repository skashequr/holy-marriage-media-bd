"use client";
import { CaretLeft, CaretRight } from "phosphor-react";
import {
  Pagination,
  PaginationItem,
  PaginationList,
  PaginationNavigator,
} from "keep-react";
import { tiroBangla } from "../../layout";

export const FormPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className={tiroBangla.className}>
      <div>
        <Pagination
          className="flex items-center justify-center mb-10"
          shape="circle"
        >
          {/* Previous Button */}
          <PaginationNavigator
            shape="circle"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            aria-label="Previous Page"
          >
            <CaretLeft size={18} />
          </PaginationNavigator>

          {/* Pagination List */}
          <PaginationList>
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem
                key={index + 1}
                active={currentPage === index + 1}
                onClick={() => onPageChange(index + 1)}
                aria-current={currentPage === index + 1 ? "page" : undefined}
              >
                {index + 1}
              </PaginationItem>
            ))}
          </PaginationList>

          {/* Next Button */}
          <PaginationNavigator
            shape="circle"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            aria-label="Next Page"
          >
            <CaretRight size={18} />
          </PaginationNavigator>
        </Pagination>
      </div>
    </div>
  );
};
