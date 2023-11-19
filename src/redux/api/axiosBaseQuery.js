import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: 'https://6554dfc263cafc694fe722d5.mockapi.io/' }) =>
  async ({ url, method, headers, data, params }) => {
    try {
      const result = await axios({
        url: `${baseUrl}${url}`,
        method,
        headers,
        data,
        params,
      });
      return { data: result.data };
    } catch (error) {
      return error.message;
    }
  };

export default axiosBaseQuery;
