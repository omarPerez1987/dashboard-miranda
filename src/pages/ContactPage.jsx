import React from "react";
import { ContactMainStyled } from "../componentsStyle/general/ContactMainStyled";
import CardReviews from "../components/cardReviews/CardReviews";
import TableContact from "../components/tables/Contact/TableContact";
import OrderTableContact from "../components/tables/Contact/OrderTableContact";
import FooterTable from '../components/tables/FooterTable'
import contacts from "../../src/JSON/contact.json";

const ContactPage = () => {
  return (
    <ContactMainStyled>
      <section className="container-reviews">
      {contacts &&
            contacts
              .slice(0, 3)
              .map((contact) => (
                <CardReviews key={contact.id} contact={contact} />
              ))}
      </section>
      <OrderTableContact />
      <TableContact />
      <FooterTable />
    </ContactMainStyled>
  );
};

export default ContactPage;
