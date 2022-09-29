import axios from "axios";
export const getUser = async () => {
  const res = await axios(`https://jsonplaceholder.typicode.com/users`);
  return res;
};
export const getUserById = async (id) => {
  const res = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res;
};
