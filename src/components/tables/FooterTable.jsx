import React from "react";
import { FooterTableStyled } from "../../componentsStyle/tables/FooterTableStyled";

const FooterTable = ({ setNumberPage, numberOfItems }) => {
  return (
    <FooterTableStyled>
      <div>
        <p>Showing 1 of {numberOfItems} Data</p>
      </div>
      <div className="container-pagination">
        <button className="prev-next" onClick={() => setNumberPage('prev')}>Prev</button>
        <button onClick={() => setNumberPage('page1')}>1</button>
        <button onClick={() => setNumberPage('page2')}>2</button>
        <button onClick={() => setNumberPage('page3')}>3</button>
        <button onClick={() => setNumberPage('page4')}>4</button>
        <button className="prev-next" onClick={() => setNumberPage('next')}>Next</button>
      </div>
    </FooterTableStyled>
  );
};

export default FooterTable;
