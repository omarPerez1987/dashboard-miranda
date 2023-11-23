import React from "react";
import { ContactMainStyled } from "../componentsStyle/general/ContactMainStyled";
import CardReviews from "../components/cardReviews/CardReviews";
import TableContact from "../components/tables/Contact/TableContact";
import OrderTableContact from "../components/tables/Contact/OrderTableContact";

const ContactPage = () => {
  return (
    <ContactMainStyled>
      <section className="container-reviews">
        <CardReviews />
        <CardReviews />
        <CardReviews />
      </section>
      <OrderTableContact />
      <TableContact />
    </ContactMainStyled>
  );
};

export default ContactPage;
