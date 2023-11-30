import ReactPaginate from 'react-paginate';
import { FooterTableStyled } from "../../componentsStyle/tables/FooterTableStyled";

const FooterTable = ({ currentPage, onPageChange, numberOfItems }) => {

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    onPageChange(selectedPage);
  };

  return (
    <FooterTableStyled>
      <div>
        <p>Showing 1 of {numberOfItems} Data</p>
      </div>
      <div className="container-pagination">
        <ReactPaginate
          pageCount={Math.ceil(numberOfItems / 10)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          forcePage={currentPage - 1}
        />
      </div>
    </FooterTableStyled>
  );
};

export default FooterTable;

