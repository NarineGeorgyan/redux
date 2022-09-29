let usersData = window.localStorage.getItem("usersData");
const getUserData = usersData ? JSON.parse(usersData) : null;

export const createUser = (state = getUserData, action) => {
  switch (action.type) {
    case "USER": {
      return { state: action.payload };
    }

    default: {
      return {
        state,
      };
    }
  }
};
export const createUserByID = (state = { state: [] }, action) => {
  switch (action.type) {
    case "USER_iD": {
      return { state: action.payload };
    }

    default: {
      return {
        state,
      };
    }
  }
};
