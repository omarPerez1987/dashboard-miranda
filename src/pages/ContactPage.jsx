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

  const [contactsArchived, setContactsArchived] = useState(
    contactsListDataArchived
  );
  const [contactsOrder, setContactsOrder] = useState([]);
  const [archived, setArchived] = useState(false);
  const [newest, setNewest] = useState(false);

  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (contactsListStatus === "idle") {
      dispatch(getContactsListApiThunk());
    } else if (contactsListStatus === "pending") {
      setSpinner(true);
    } else if (contactsListStatus === "fulfilled") {
      setSpinner(false);
      setContacts(contactsListData);
      setContactsOrder(orderContacts());
    }
  }, [dispatch, contactsListData, contactsListStatus]);

  //ORDERED CONTACTS***********************************
  const orderContacts = () => {
    const orderedContacts = [...contacts];
    orderedContacts.sort((a, b) => {
      const dateA = new Date(a.date.split(".").reverse().join("-"));
      const dateB = new Date(b.date.split(".").reverse().join("-"));
      return dateA - dateB;
    });
    return orderedContacts;
  };

  useEffect(() => {
    if (newest && contactsListStatus === "fulfilled") {
      setContacts(orderContacts());
    }
    if (!newest && contactsListStatus === "fulfilled") {
      setContacts(contactsListData);
    }
  }, [newest, contactsListData, contactsListStatus]);

  //ORDERED ARCHIVED***********************************
  const orderContactsArchived = () => {
    const orderedContactArchived = [...contactsListDataArchived];
    orderedContactArchived.sort((a, b) => {
      const dateA = new Date(a.date.split(".").reverse().join("-"));
      const dateB = new Date(b.date.split(".").reverse().join("-"));
      return dateA - dateB;
    });
    return orderedContactArchived;
  };

  useEffect(() => {
    if (newest && contactsListStatus === "fulfilled") {
      setContactsArchived(orderContactsArchived());
    }
    if (!newest && contactsListStatus === "fulfilled") {
      setContactsArchived(contactsListDataArchived);
    }
  }, [newest, contactsListStatus, contactsListDataArchived]);

  //PAGINATION***************************************

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const switchPagination = () => {
    switch (currentPage) {
      case 1:
        return contacts.slice(0, 10);

      case 2:
        return contacts.slice(10, 20);

      case 3:
        return contacts.slice(20, 30);

      case 4:
        return contacts.slice(30, 40);

      default:
        return [];
    }
  };

  const contactSlices = switchPagination();

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
                {contactsOrder.slice(0, 3).map((contact) => (
                  <CardReviews key={contact.id} contact={contact} />
                ))}
              </section>
              <OrderTableContact
                setArchived={setArchived}
                setNewest={setNewest}
              />

              <TableContact
                contacts={archived ? contactsArchived : contactSlices}
              />
              <FooterTable
                currentPage={currentPage}
                onPageChange={handlePageChange}
                numberOfItems={contactsListData.length}
              />
            </>
          )}
        </>
      )}
    </ContactMainStyled>
  );
};

export default ContactPage;
