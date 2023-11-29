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
  const [contactsArchived, setContactsArchived] = useState(
    contactsListDataArchived
  );
  const [contactsOrder, setContactsOrder] = useState([]);
  const [archived, setArchived] = useState(false);
  const [newest, setNewest] = useState(false);
  const [numberPage, setNumberPage] = useState("default");
  // console.log(contacts);

  useEffect(() => {
    if (contactsListStatus === "idle") {
      dispatch(getContactsListApiThunk());
    } else if (contactsListStatus === "pending") {
      setSpinner(true);
    } else if (contactsListStatus === "fulfilled") {
      setSpinner(false);
      setContacts(switchPagination());
      setContactsOrder(orderContacts());
    }
  }, [dispatch, contactsListData, contactsListStatus]);

  //ORDERED CONTACTS***********************************
  const orderContacts = () => {
    const orderedContacts = [...contactsListData];
    orderedContacts.sort((a, b) => {
      const dateA = new Date(a.date.split(".").reverse().join("-"));
      const dateB = new Date(b.date.split(".").reverse().join("-"));
      return dateA - dateB;
    });
    setContacts(orderedContacts);
    return orderedContacts;
  };

  useEffect(() => {
    if (newest && contactsListStatus === "fulfilled") {
      orderContacts();
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
    setContactsArchived(orderedContactArchived);
    return orderedContactArchived;
  };

  useEffect(() => {
    if (newest && contactsListStatus === "fulfilled") {
      orderContactsArchived();
    }
    if (!newest && contactsListStatus === "fulfilled") {
      setContactsArchived(contactsListDataArchived);
    }
  }, [newest, contactsListStatus, contactsListDataArchived]);

  //PAGINATION***************************************
  const switchPagination = () => {
    let prev = numberPage - 1;
    let next = numberPage + 1;

    console.log(numberPage);

    switch (numberPage) {
      case "default":
        return contactsListData.slice(0, 10);
      case 0:
        prev === -1 ? setNumberPage(4) : setNumberPage(-1);
      case 1:
        return contactsListData.slice(0, 10);
      case 2:
        return contactsListData.slice(10, 20);
      case 3:
        return contactsListData.slice(20, 30);
      case 4:
        return contactsListData.slice(30, 40);
      case 5:
        next === 6 ? setNumberPage(1) : setNumberPage(+1);
      default:
        return [];
    }
  };

  //  console.log(switchPagination())

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
                contacts={archived ? contactsArchived : switchPagination()}
              />
              <FooterTable
                setNumberPage={setNumberPage}
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
