import axios, {AxiosError, AxiosInstance, HttpStatusCode} from 'axios';
import Toast from 'react-native-toast-message';
import {AuthResponse} from '../types/auth.type';
import {
  clearLS,
  getAccessTokenFromLS,
  setAccessTokenToLS,
  setProfileToLS,
} from './auth';
import {path} from '../constants';

class Http {
  instance: AxiosInstance;
  private accessToken: string = ''; // Initialize the 'accessToken' property
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.init();
  }

  async init() {
    this.accessToken = await getAccessTokenFromLS();
    // Add a request interceptor
    // Xử lý dữ liệu gửi lên sever
    this.instance.interceptors.request.use(
      config => {
        // Do something before request is sent
        if (this.accessToken) {
          config.headers.Authorization = this.accessToken;
          return config;
        }
        return config;
      },
      error => {
        // Do something with request error
        return Promise.reject(error);
      },
    );

    // Add a response interceptor
    // Xử lý dữ liệu trả về từ sever
    this.instance.interceptors.response.use(
      response => {
        const {url} = response.config;
        if (url === path.login || url === path.register) {
          const data = response.data as AuthResponse;
          this.accessToken = data.data.access_token;
          setAccessTokenToLS(this.accessToken);
          setProfileToLS(data.data.user);
        } else if (url === path.logout) {
          this.accessToken = '';
          clearLS();
        }
        return response;
      },
      (error: AxiosError) => {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data;
          const message = data.message || error.message;
          Toast.show({
            type: 'error',
            text1: 'System Error',
            text2: message,
          });
        }
        return Promise.reject(error);
      },
    );
  }
}
const http = new Http().instance;
export default http;
