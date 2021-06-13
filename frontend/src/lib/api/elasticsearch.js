import axios from 'axios';

const esInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_SEARCH_KEY}`,
  },
});

export const esApi = {
  search: async searchWord => {
    const res = await esInstance.post(
      `/api/as/v1/engines/${process.env.REACT_APP_ENGINE_NAME}/search`,
      {
        query: searchWord,
      }
    );

    return res.data;
  },
  // searchByFilter: async (filters, searchWord = '') => {
  //   // const res = await esInstance.post(
  //   //   `/api/as/v1/engines/${process.env.REACT_APP_ENGINE_NAME}/search`,
  //   //   {
  //   //     query: searchWord,
  //   //   }
  //   // );
  // },
};
