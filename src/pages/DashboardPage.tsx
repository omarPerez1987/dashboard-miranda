import React, { useEffect, useState } from "react";
import { KpisCard } from "../components/kpis/KpisCard";
import { IoBedOutline } from "react-icons/io5";
import { TbCalendarCheck } from "react-icons/tb";
import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import CardReviews from "../components/cardReviews/CardReviews";
import { DashboardMainStyled } from "../componentsStyle/general/DashboardMainStyled";
import { useDispatch } from "react-redux";
import {
  getContactStatus,
  getContactsError,
  getContactsPublish,
} from "../features/contact/contactsSlices";
import { getContactsListApiThunk } from "../features/contact/contactsThunk";
import { AppDispatch, useAppSelector } from "../app/store";
import { ContactInterface } from "../interfaces/contact/contactInterface";

const DashboardPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const contactsListDataPublish =
    useAppSelector<ContactInterface[]>(getContactsPublish);
  const contactsListStatus = useAppSelector<string>(getContactStatus);
  const contactsListError = useAppSelector<string | undefined>(
    getContactsError
  );
  const [contacts, setContacts] = useState<ContactInterface[]>([]);
  const [spinner, setSpinner] = useState<boolean>(true);

  useEffect(() => {
    if (contactsListStatus === "idle") {
      dispatch(getContactsListApiThunk());
    } else if (contactsListStatus === "pending") {
      setSpinner(true);
    } else if (contactsListStatus === "fulfilled") {
      setContacts(orderContacts());
      setSpinner(false);
    }
  }, [dispatch, contactsListStatus, contactsListDataPublish]);

  const orderContacts = () => {
    const orderedContacts = [...contactsListDataPublish];
    orderedContacts.sort((a, b) => {
      const dateA = new Date(a.date.split(".").reverse().join("-"));
      const dateB = new Date(b.date.split(".").reverse().join("-"));
      return dateA.getTime() - dateB.getTime();
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
                  <CardReviews key={contact.id} {...contact} />
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
