import { axiosInstance } from "../Network/axiosInstance"

export const movies = (dat) => (dispatch)=>{
    return axiosInstance.get(`/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&page=${dat}`)
    .then((res)=>dispatch({
        type:"MOVIELIST",
        payload:res.data.results
    }))
    .catch((er)=>console.log(er))
    /*return{
        type:"MOVIELIST",
        payload:dat
    }*/
}