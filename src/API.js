import axios from "axios";

const API = axios.create({
  baseURL: "http://ec2-18-116-89-188.us-east-2.compute.amazonaws.com/"
});

API.interceptors.request.use(config => {
  const token = localStorage.getItem("access_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
}, error => Promise.reject(error));

API.interceptors.response.use(
  response => response,
  error => {
    console.error(error);
    window.location.href = '/login';
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_id');
    // Handle error here
    return Promise.reject(error);
  }
);

/**
 * Auth
 */
API.auth = {
  login: data => {
    API.defaults.headers.common['Authorization'] = 'Basic ' + btoa(data.email + ':' + data.password)
    return API.post('/users/login');
  }
};

/**
 * Devices
 */
API.devices = {
  all: () => API.get('/device/info/all'),
  show: id => API.get(`/device/info/${id}`),
  deviceUpdate: id => API.get(`/device/status-updates/${id}?start_time=2010-01-01&end_time=2030-01-02`)
};

/**
 * Users
 */
API.user = {
  personalInfo: uid => API.get(`/users/${uid}`),
}

export default API;