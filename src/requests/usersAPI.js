import { notification } from "antd";
import axios from "axios";
const url = "https://wispro.herokuapp.com/";

export const login = async (data) => {
  try {
    var res = await axios.post(`${url}/auth/local`, {
      identifier: data.username,
      password: data.password,
    });

    localStorage.setItem("token", res.data.jwt);

    return res.data.user;
  } catch (error) {
    console.log(error.status);
    notification.error({ message: "Usuario o contraseña incorrecta" });
  }
};

export const fetchUsers = async () => {
  try {
    const res = await axios.get(`${url}/users`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchOneUser = async (id) => {
  try {
    const res = await axios.get(`${url}/users/${id}`);
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const postUser = async (data) => {
  try {
    const res = await axios.post(`${url}/auth/local/register`, data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const putUser = async (data, user_id) => {
  try {
    const res = await axios.put(`${url}/users/${user_id}`, data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await axios.delete(`${url}/users/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
