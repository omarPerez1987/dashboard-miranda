import React, { useEffect, useState } from "react";
import { ContactMainStyled } from "../componentsStyle/general/ContactMainStyled";
import CardReviews from "../components/cardReviews/CardReviews";
import TableContact from "../components/tables/Contact/TableContact";
import OrderTableContact from "../components/tables/Contact/OrderTableContact";
import FooterTable from "../components/tables/FooterTable";
import { useDispatch } from "react-redux";
import {
  getContactsData,
  getContactStatus,
  getContactsError,
  getContactsArchived,
  getContactsPublish,
} from "../features/contact/contactsSlices";
import { getAllContactsApiThunk } from "../features/contact/contactsThunk";
import { AppDispatch, useAppSelector } from "../app/store";
import { ContactInterface } from "../interfaces/contact/contactInterface";

const ContactPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const contactsListData = useAppSelector<ContactInterface[]>(getContactsData);
  const contactsListDataPublish =
    useAppSelector<ContactInterface[]>(getContactsPublish);
  const contactsListArchived =
    useAppSelector<ContactInterface[]>(getContactsArchived);
  const contactsListStatus = useAppSelector<string>(getContactStatus);
  const contactsListError = useAppSelector<string | undefined>(
    getContactsError
  );
  const [spinner, setSpinner] = useState<boolean>(true);

  const [archived, setArchived] = useState<boolean>(false);

  const [newestListCard, setNewestListCard] = useState<ContactInterface[]>([]);
  const [newest, setNewest] = useState<boolean>(false);
  const [contacts, setContacts] = useState<ContactInterface[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const token = localStorage.getItem("adminToken") || undefined;

  useEffect(() => {
    if (contactsListStatus === "idle") {
      dispatch(getAllContactsApiThunk({ token }));
    } else if (contactsListStatus === "pending") {
      setSpinner(true);
    } else if (contactsListStatus === "fulfilled") {
      setSpinner(false);
      switchContactList();
    }
  }, [dispatch, contactsListData, contactsListStatus, archived]);

  const switchContactList = () => {
    if (archived) {
      setContacts(contactsListArchived);
    } else {
      setContacts(contactsListData);
    }
  };

  useEffect(() => {
    if (contactsListStatus === "fulfilled") {
      setNewestListCard(orderContacts(contactsListDataPublish));
    }

    if (!newest && contactsListStatus === "fulfilled") {
      switchContactList();
    }

    if (newest && contactsListStatus === "fulfilled") {
      setContacts(orderContacts(contactsListData));
    }
  }, [newest, contactsListStatus, contactsListDataPublish]);

  const orderContacts = (contactsList: ContactInterface[]) => {
    const orderedContacts = [...contactsList];
    orderedContacts.sort((a, b) => {
      const dateA = new Date(a.date.split(".").reverse().join("-"));
      const dateB = new Date(b.date.split(".").reverse().join("-"));
      return dateA.getTime() - dateB.getTime();
    });
    return orderedContacts;
  };

  const handlePageChange = (selectedPage: number) => {
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
                {newestListCard.slice(0, 3).map((contact) => (
                  <CardReviews key={contact._id} {...contact} />
                ))}
              </section>
              <OrderTableContact
                setArchived={setArchived}
                setNewest={setNewest}
              />

              <TableContact contacts={contactSlices} />
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
