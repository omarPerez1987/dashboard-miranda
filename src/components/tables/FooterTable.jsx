import React from "react";
import { FooterTableStyled } from "../../componentsStyle/tables/FooterTableStyled";

const FooterTable = ({ setNumberPage, numberOfItems }) => {
  return (
    <FooterTableStyled>
      <div>
        <p>Showing 1 of {numberOfItems} Data</p>
      </div>
      <div className="container-pagination">
        <button className="prev-next" onClick={() => setNumberPage(0)}>Prev</button>
        <button onClick={() => setNumberPage(1)}>1</button>
        <button onClick={() => setNumberPage(2)}>2</button>
        <button onClick={() => setNumberPage(3)}>3</button>
        <button onClick={() => setNumberPage(4)}>4</button>
        <button className="prev-next" onClick={() => setNumberPage(5)}>Next</button>
      </div>
    </FooterTableStyled>
  );
};

export default FooterTable;
