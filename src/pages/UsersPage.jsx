import React, { useState, useEffect } from "react";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import FooterTable from "../components/tables/FooterTable";
import OrderTableUsers from "../components/tables/User/OrderTableUsers";
import TableUsers from "../components/tables/User/TableUsers";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersData,
  getUsersError,
  getUsersStatus,
} from "../features/users/usersSlices";
import { getUsersListApiThunk } from "../features/users/usersThunks";

const UsersPage = () => {
  const dispatch = useDispatch();
  const usersListData = useSelector(getUsersData);
  const usersListStatus = useSelector(getUsersStatus);
  const usersListError = useSelector(getUsersError);
  const [users, setUsers] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    if (usersListStatus === "idle") {
      dispatch(getUsersListApiThunk());
    } else if (usersListStatus === "pending") {
      setSpinner(true);
    } else if (usersListStatus === "fulfilled" && usersListData !== users) {
      setUsers(usersListData);
      setSpinner(false);
    }
  }, [dispatch, usersListData, usersListStatus, users]);

  return (
    <MainStyled>
      {usersListError ? (
        <h1>Hubo un error al obtener los datos de los usuarios</h1>
      ) : (
        <>
          <OrderTableUsers />
          {spinner ? <h1>Loading...</h1> : <TableUsers users={users} />}
          <FooterTable />
        </>
      )}
    </MainStyled>
  );
};

export default UsersPage;
