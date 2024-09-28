'use client'
import { useState } from 'react';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { Pagination, PaginationItem, PaginationList, PaginationNavigator } from 'keep-react';
import { tiroBangla } from '../../layout';

export const FormPagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={tiroBangla.className}>
      <div>
        <Pagination className='flex items-center justify-center mb-10' shape="circle">
          <PaginationNavigator shape="circle" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
            <CaretLeft size={18} />
          </PaginationNavigator>
          <PaginationList>
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem 
                key={index + 1} 
                active={currentPage === index + 1} 
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationItem>
            ))}
          </PaginationList>
          <PaginationNavigator shape="circle" disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
            <CaretRight size={18} />
          </PaginationNavigator>
        </Pagination>
      </div>
    </div>
  );
};

// Example usage
// <FormPagination totalPages={8} />
