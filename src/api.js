import axios from 'axios';
const client = axios.create({
  baseURL: 'https://api.outsidein.dev/ivrwd0NAMv3ZON0s9atDN5gjfKG29UKr',
});
const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  },
};
export default api;
