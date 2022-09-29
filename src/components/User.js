import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getUserById } from "../action/usres";

const User = ({ ...user }) => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createUserDateById = async (userId) => {
    let res = await getUserById(userId);
    if (res.data) {
      dispatch({ type: "USER_ID", payload: res.data });
    }
  };

  const navigateByUrl = () => {
    navigate(`/users/${user.id}`);
    createUserDateById(userId);
  };

  return (
    <>
      <tr onClick={navigateByUrl} style={{ cursor: "pointer" }}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.address.city}</td>
      </tr>
    </>
  );
};

export default User;
