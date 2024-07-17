import axios from "axios";
import {Weather} from "../interfaces/Weather";

export const fetchWeather = async (): Promise<Weather[]> => {
    try {
        const response  = await axios
            .get('http://localhost:5000/weather');
        // const parsedData = await parseStringPromise();
        const items = response.data;
        // console.log(items)
        return Object.entries(items).map(([key, value]): Weather => {
            return {
                province: key,
                temperature: items[key].temperature,
                phrase: items[key].phrase
            }
        })
    } catch
        (error: any) {
        console.error(`Error fetching RSS data from :`, error);
        return [];
    } finally {
        // setLoading(false);
    }
}
export const fetchLocate = async (lat: string, lng: string): Promise<string> => {
    try {
        const response = await axios
            .get('http://localhost:5000/locate',{
                params: {
                    lat: lat,
                    lng: lng
                }
            });
        const items = response.data;
        return items;
    } catch
        (error: any) {
        console.error(`Error fetching RSS data from :`, error);
        return '';
    } finally {
        // setLoading(false);
    }
}