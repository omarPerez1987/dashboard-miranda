import React, { useEffect, useState } from "react";
import { KpisCard } from "../components/kpis/KpisCard";
import { IoBedOutline } from "react-icons/io5";
import { TbCalendarCheck } from "react-icons/tb";
import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import CardReviews from "../components/cardReviews/CardReviews";
import { DashboardMainStyled } from "../componentsStyle/general/DashboardMainStyled";
import { useDispatch, useSelector } from "react-redux";
import {
  getContactsData,
  getContactStatus,
  getContactsError,
} from "../features/contact/contactsSlices";
import { getContactsListApiThunk } from "../features/contact/contactsThunk";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const contactsListData = useSelector(getContactsData);
  const contactsListStatus = useSelector(getContactStatus);
  const contactsListError = useSelector(getContactsError);
  const [contacts, setContacts] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    if (contactsListStatus === "idle") {
      dispatch(getContactsListApiThunk());
    } else if (contactsListStatus === "pending") {
      setSpinner(true);
    } else if (contactsListStatus === "fulfilled") {
      setContacts(orderContacts());
      setSpinner(false);
    }
  }, [dispatch, contactsListData, contactsListStatus]);

  const orderContacts = () => {
    const orderedContacts = [...contactsListData];
    orderedContacts.sort((a, b) => {
      const dateA = new Date(a.date.split(".").reverse().join("-"));
      const dateB = new Date(b.date.split(".").reverse().join("-"));
      return dateA - dateB;
    });
    return orderedContacts;
  };

  return (
    <DashboardMainStyled>
      <section className="container-kpis">
        <KpisCard Icon={IoBedOutline} number={8461} text="New Booking" />
        <KpisCard Icon={TbCalendarCheck} number={963} text="Scheduled Rooms" />
        <KpisCard Icon={RiLoginBoxLine} number={753} text="Check in" />
        <KpisCard Icon={RiLogoutBoxLine} number={516} text="Check Out" />
      </section>
      {contactsListError ? (
        <h1>Hubo un error al obtener los datos de los usuarios</h1>
      ) : (
        <>
          {spinner ? (
            <h1>Loading...</h1>
          ) : (
            <section className="container-reviews">
              <h3 className="main-dashboard__container--reviews__title">
                Latest Review by Customers
              </h3>
              <div className="container-reviews__box-card">
                {contacts.slice(0, 3).map((contact) => (
                  <CardReviews key={contact.id} contact={contact} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </DashboardMainStyled>
  );
};

export default DashboardPage;
