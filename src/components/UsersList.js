import React from "react";
import { useSelector } from "react-redux";

import User from "./User";

const UsersList = ({ user }) => {
  const getUserState = useSelector((state) => state.getUser.state);

  return (
    <>
      {getUserState && getUserState.length ? (
        getUserState.map((user) => <User key={user.id} {...user} />)
      ) : (
        <tr>
          <td colSpan={5}>No User Found</td>
        </tr>
      )}
    </>
  );
};

export default UsersList;
