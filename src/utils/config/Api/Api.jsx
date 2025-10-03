import axios from "axios";
const BaseURL = import.meta.env.VITE_baseURL;

export const ApiSignup = async (value, setRes) => {
  try {
    console.log(value);
    const res = await axios.post(`${BaseURL}` + "users", value);
    return res;
  } catch (err) {
    console.log("error", err);
  }
};

export const ApiLogin = async (value) => {
  try {
    // const res = await axios.post(`${BaseURL}/users/login`, value);
    const res = await axios.post(`${BaseURL}` + "users/login", value);
    return res;
  } catch (err) {
    throw err;
  }
};

export const ApiVerify = async (value) => {
  try {
    // const res = await axios.post(`${BaseURL}users/verify`, value);
    const res = await axios.post(`${BaseURL}` + "uesrs/verify", value);
    return res;
  } catch (err) {
    throw err;
  }
};




