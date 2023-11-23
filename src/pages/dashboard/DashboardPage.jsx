import React from "react";
import { KpisCard } from "../../components/kpis/KpisCard";
import { IoBedOutline } from "react-icons/io5";
import { TbCalendarCheck } from "react-icons/tb";
import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import CardReviews from "../../components/cardReviews/CardReviews";
import "./dashboard.css";

const DashboardPage = () => {
  return (
    <main className="main-dashboard">
      <section className="main-dashboard__container--Kpis">
        <KpisCard Icon={IoBedOutline} number={8461} text="New Booking" />
        <KpisCard Icon={TbCalendarCheck} number={963} text="Scheduled Rooms" />
        <KpisCard Icon={RiLoginBoxLine} number={753} text="Check in" />
        <KpisCard Icon={RiLogoutBoxLine} number={516} text="Check Out" />
      </section>

      <section className="main-dashboard__container--reviews">
        <h3 className="main-dashboard__container--reviews__title">
          Latest Review by Customers
        </h3>
        <div className="main-dashboard__container--reviews__box-card">
          <CardReviews />
          <CardReviews />
          <CardReviews />
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
