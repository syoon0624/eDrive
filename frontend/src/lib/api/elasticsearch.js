import axios from 'axios';

const esInstance = axios.create({
  baseURL: process.env.API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.SEARCH_KEY}`,
  },
});

export const search = async searchWord => {
  const res = await esInstance.post(
    `/api/as/v1/engines/${process.env.APP_SEARCH_ENGINE_NAME}/search`,
    {
      query: searchWord,
    }
  );

  console.log(res);
  return res;
};
