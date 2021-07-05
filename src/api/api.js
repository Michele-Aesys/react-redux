import axios from 'axios'

export const getCat = ()=>axios.get("https://api.thecatapi.com/v1/images/search").then(res=>res.data)