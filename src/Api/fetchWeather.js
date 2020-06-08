import axios from 'axios';

const URL = "https://nino-project.000webhostapp.com/public/api/mitra/alldata";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL);
  return data;
};
