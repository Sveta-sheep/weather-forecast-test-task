import axios, { AxiosRequestConfig } from "axios";

axios.interceptors.request.use((config: AxiosRequestConfig) => {
    config.params = config.params || {}
    config.params["appid"] =  process.env.REACT_APP_API_KEY;
    return config;    
})

export const weatherApi = {
    getWeatherForecast(city: string): Promise<any> {
        return axios.get(`${process.env.REACT_APP_API_URL}?q=${city}&appid&units=metric`)
            .then(res => res.data)
    }
}