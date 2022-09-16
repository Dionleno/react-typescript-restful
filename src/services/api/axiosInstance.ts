import axios, { HeadersDefaults } from 'axios' 

interface CommonHeaderProperties extends HeadersDefaults {
  ["Content-Type"]: string;
}

const AxiosInstance = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
  axios.defaults.headers = {
    'Content-Type': 'application/json'
  } as CommonHeaderProperties;

  axios.interceptors.response.use(
    (response) => {
      if (response.data.error) {
        // TODO APAGAR QUANDO RESOLVER
        throw new Error(response.data.error)
      }
      return response
    },
    (error) => {
      const originalRequest = error.config

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true 
        return
      }

      if (error.response && error.response.data) {
        return Promise.reject(error.response.data)
      }
      return Promise.reject(error.message)
    }
  )
}
export default AxiosInstance
