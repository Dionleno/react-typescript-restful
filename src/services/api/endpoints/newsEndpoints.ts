import axios from "axios"

export const getNewsApi = async (): Promise<any> => {
    const response = await axios.get<any>(
      `/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_API_KEY}`,
    )
    console.log(response.data);
    
    return response.data
}
  