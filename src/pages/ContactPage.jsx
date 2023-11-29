import React, { useEffect, useState } from "react";
import { ContactMainStyled } from "../componentsStyle/general/ContactMainStyled";
import CardReviews from "../components/cardReviews/CardReviews";
import TableContact from "../components/tables/Contact/TableContact";
import OrderTableContact from "../components/tables/Contact/OrderTableContact";
import FooterTable from "../components/tables/FooterTable";
import { useDispatch, useSelector } from "react-redux";
import {
  getContactsData,
  getContactStatus,
  getContactsError,
  getContactsArchived,
} from "../features/contact/contactsSlices";
import { getContactsListApiThunk } from "../features/contact/contactsThunk";

const ContactPage = () => {
  const dispatch = useDispatch();
  const contactsListData = useSelector(getContactsData);
  const contactsListDataArchived = useSelector(getContactsArchived);
  const contactsListStatus = useSelector(getContactStatus);
  const contactsListError = useSelector(getContactsError);
  const [spinner, setSpinner] = useState(true);

  const [contacts, setContacts] = useState([]);
  const [archived, setArchived] = useState(false);

  useEffect(() => {
    if (contactsListStatus === "idle") {
      dispatch(getContactsListApiThunk());
    } else if (contactsListStatus === "pending") {
      setSpinner(true);
    } else if (contactsListStatus === "fulfilled") {
      setContacts(contactsListData);
      setSpinner(false);
    }
  }, [dispatch, contactsListData, contactsListStatus]);

  return (
    <ContactMainStyled>
      {contactsListError ? (
        <h1>Hubo un error al obtener los datos de los usuarios</h1>
      ) : (
        <>
          {spinner && !contactsListError ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <section className="container-reviews">
                {contacts.slice(0, 3).map((contact) => (
                  <CardReviews key={contact.id} contact={contact} />
                ))}
              </section>
              <OrderTableContact setArchived={setArchived} />

              <TableContact
                contacts={
                  archived ? contactsListDataArchived : contactsListData
                }
              />
              <FooterTable />
            </>
          )}
        </>
      )}
    </ContactMainStyled>
  );
};

export default ContactPage;
