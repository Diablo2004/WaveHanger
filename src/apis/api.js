import axios from "axios";

const App_URL = "https://api.themoviedb.org/3";

const App_Token = import.meta.env.VITE_APP_WH_TOKEN;

const headers = {
  Authorization: "bearer " + App_Token,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(App_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
