import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch } from "react-redux";
import { getUser } from "../action/usres";

import UsersList from "./UsersList";

const UserTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await getUser();
        if (res.data) {
          window.localStorage.setItem("usersData", JSON.stringify(res.data));
        }
        dispatch({
          type: "USER",
          payload: res.data,
        });
      } catch (err) {}
    };
    getUserData();
  }, []);

  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <UsersList />

          {/* 
          <tr>
            <td>3</td>
            <td colSpan={3}>Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
    </>
  );
};

export default UserTable;
