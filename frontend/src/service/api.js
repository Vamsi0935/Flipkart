import axios from "axios";

export const authenticateLogin = async (user) => {
  try {
    const response = await axios.post(`http://localhost:5000/login`, user);
    return response.data;
  } catch (error) {
    console.error("Error while calling login API:", error);
    throw error;
  }
};

export const authenticateSignup = async (user) => {
  try {
    const response = await axios.post(`http://localhost:5000/register`, user);
    return response.data;
  } catch (error) {
    console.error("Error while calling signup API:", error);
    throw error;
  }
};
