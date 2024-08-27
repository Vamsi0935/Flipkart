import axios from "axios";

const url = "http://localhost:5000";

export const authenticateLogin = async (user) => {
  try {
    const response = await axios.post(`${url}/login`, user);
    return response.data;
  } catch (error) {
    console.error("Error while calling login API:", error);
    throw error;
  }
};

export const authenticateSignup = async (user) => {
  try {
    const response = await axios.post(`${url}/signup`, user);
    return response.data;
  } catch (error) {
    console.error("Error while calling signup API:", error);
    throw error;
  }
};
