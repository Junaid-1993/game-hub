import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1c699ed68c2c43b28af16c3056b2a552",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data);

  get = (id: number | string) => axiosInstance.get<T>(`${this.endpoint}/${id}`).then((res) => res.data);
}

export default APIClient;
