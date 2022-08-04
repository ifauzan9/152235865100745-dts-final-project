import axios from "axios";

const apiKey = "pub_97850cd81e0444c57bb01553b3e6ebbb7909";
const baseUrl = "https://newsdata.io/api/1/news?";

export const getNews = async () => {
  try {
    const data = await axios.get(`${baseUrl}apikey=${apiKey}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
