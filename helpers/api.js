import axios from 'axios';
import { Urls } from '../services/constants';

class BaseApi {
  apiHandler;

  constructor() {
    this.apiHandler = axios.create({
      baseURL: Urls.baseUrl,
    });
  }

  get(url, options) {
    return this.apiHandler.get(url, options);
  }

  post(url, data, options) {
    return this.apiHandler.post(url, data, options);
  }

  patch(url, data, options) {
    return this.apiHandler.patch(url, data, options);
  }
}

export const RestApi = new BaseApi();
