import ReactPaginate from "react-paginate";
import { FooterTableStyled } from "../../componentsStyle/tables/FooterTableStyled";
import { FooterTableProps } from "../../interfaces/propsInterface/propsInterface";

const FooterTable: React.FC<FooterTableProps> = ({
  currentPage,
  onPageChange,
  numberOfItems,
}) => {
  const itemsPerPage = 10;
  const endIndex = Math.min(currentPage * itemsPerPage, numberOfItems);

  const handlePageClick = (data: { selected: number }) => {
    const selectedPage = data.selected + 1;
    onPageChange(selectedPage);
  };

  return (
    <FooterTableStyled>
      <div>
        <p>
          Showing {endIndex} of {numberOfItems} Data
        </p>
      </div>
      <div className="container-pagination">
        <ReactPaginate
          pageCount={Math.ceil(numberOfItems / 10)}
          pageRangeDisplayed={4}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          forcePage={currentPage - 1}
        />
      </div>
    </FooterTableStyled>
  );
};

export default FooterTable;
