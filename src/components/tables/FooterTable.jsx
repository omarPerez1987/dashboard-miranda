import React from "react";
import { FooterTableStyled } from "../../componentsStyle/tables/FooterTableStyled";

const FooterTable = () => {
  return (
    <FooterTableStyled>
      <div>
        <p>Showing 1 of 102 Data</p>
      </div>
      <div className="container-pagination">
        <button className="prev-next">Prev</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button className="prev-next">Next</button>
      </div>
    </FooterTableStyled>
  );
};

export default FooterTable;
