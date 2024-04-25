import axios, {AxiosError, AxiosInstance, HttpStatusCode} from 'axios';
import Toast from 'react-native-toast-message';

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // Add a response interceptor
    // Xử lý dữ liệu trả về từ sever
    this.instance.interceptors.response.use(
      response => {
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
