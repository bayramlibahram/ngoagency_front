import axiosInstance from "@/lib/axios-instance";

export default class RequestHandler {
  constructor(endpoint) {
    this._endpoint = endpoint;
  }
  #constructUrl = (urlRoute) => {
    return `${this._endpoint}/${urlRoute}`;
  };
  get = async (urlRoute, params = {}) => {
    const response = await axiosInstance.get(this.#constructUrl(urlRoute), {
      params,
    });
    return response?.data;
  };
  post = async (urlRoute, formData) => {
    const response = await axiosInstance.post(this.#constructUrl(urlRoute), formData);
    return response.data;
  };
  put = async (urlRoute, formData) => {
    const response = await axiosInstance.put(this.#constructUrl(urlRoute), formData);
    return response.data;
  };
  delete = async (urlRoute, formData) => {
    const response = await axiosInstance.delete(this.#constructUrl(urlRoute), formData);
    return response.data;
  };
  patch = async (urlRoute, formData) => {
    const response = await axiosInstance.patch(this.#constructUrl(urlRoute), formData);
    return response.data;
  };
}
