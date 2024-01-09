import React, { useState, useEffect } from "react";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import FooterTable from "../components/tables/FooterTable";
import OrderTableUsers from "../components/tables/User/OrderTableUsers";
import TableUsers from "../components/tables/User/TableUsers";
import { useDispatch } from "react-redux";
import {
  getUsersActive,
  getUsersData,
  getUsersError,
  getUsersInactive,
  getUsersStatus,
} from "../features/users/usersSlices";
import { getUsersListApiThunk } from "../features/users/usersThunks";
import { UsersInterfaces } from "../interfaces/users/usersInterfaces";
import { AppDispatch, useAppSelector } from "../app/store";

const UsersPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const usersListData = useAppSelector<UsersInterfaces[]>(getUsersData);
  const usersListActive = useAppSelector<UsersInterfaces[]>(getUsersActive);
  const usersListInactive = useAppSelector<UsersInterfaces[]>(getUsersInactive);

  const usersListStatus = useAppSelector<string>(getUsersStatus);
  const usersListError = useAppSelector<string | undefined>(getUsersError);
  const [spinner, setSpinner] = useState<boolean>(true);

  const [stateStatus, setStateStatus] = useState<string>("All");
  const [newest, setNewest] = useState<boolean>(false);
  const [users, setUsers] = useState<UsersInterfaces[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const token = localStorage.getItem("adminToken") || undefined
  

  useEffect(() => {
    if (usersListStatus === "idle") {
      dispatch(getUsersListApiThunk({method: "GET", token}));
    } else if (usersListStatus === "pending") {
      setSpinner(true);
    } else if (usersListStatus === "fulfilled") {
      switchUsersList();
      setSpinner(false);
    }
  }, [
    dispatch,
    usersListData,
    usersListStatus,
    stateStatus,
    usersListActive,
    usersListInactive,
    token
  ]);

  const switchUsersList = () => {
    switch (stateStatus) {
      case "All":
        setUsers(usersListData);
        break;
      case "Active":
        setUsers(usersListActive);
        break;
      case "Inactive":
        setUsers(usersListInactive);
        break;
      default:
        break;
    }
  };

  const orderUsers = () => {
    const orderedUsers = [...users];
    orderedUsers.sort((a, b) => {
      const dateA = new Date(a.startDate.split(".").reverse().join("-"));
      const dateB = new Date(b.startDate.split(".").reverse().join("-"));
      return dateA.getTime() - dateB.getTime();
    });
    return orderedUsers;
  };

  useEffect(() => {
    if (newest && usersListStatus === "fulfilled") {
      setUsers(orderUsers());
    }
    if (!newest && usersListStatus === "fulfilled") {
      switchUsersList();
    }
  }, [newest, usersListStatus]);

  //PAGINATION***************************************

  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  const switchPagination = () => {
    switch (currentPage) {
      case 1:
        return users.slice(0, 10);

      case 2:
        return users.slice(10, 20);

      case 3:
        return users.slice(20, 30);

      case 4:
        return users.slice(30, 40);

      default:
        return [];
    }
  };

  const usersSlices = switchPagination();

  return (
    <MainStyled>
      {usersListError ? (
        <h1>Hubo un error al obtener los datos de los usuarios</h1>
      ) : (
        <>
          {spinner ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <OrderTableUsers
                setStateStatus={setStateStatus}
                setNewest={setNewest}
              />
              <TableUsers users={usersSlices} />
              <FooterTable
                currentPage={currentPage}
                onPageChange={handlePageChange}
                numberOfItems={users.length}
              />
            </>
          )}
        </>
      )}
    </MainStyled>
  );
};

export default UsersPage;
