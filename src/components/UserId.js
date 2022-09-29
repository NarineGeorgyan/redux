import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const UserId = () => {
  const getUserById = useSelector((state) => state.getUserById.state);
  return (
    <>
      {getUserById && getUserById.length ? (
        <table>
          {/* <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{address.city}</td>
          </tr> */}
        </table>
      ) : (
        <Navigate to="user" />
      )}
    </>
  );
};

export default UserId;
