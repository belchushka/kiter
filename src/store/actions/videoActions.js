import {$host} from "../../http";

export const getVideos = (props)=>async (dispatch)=>{
    const data = await $host.get("/getVideos")
    dispatch({
        type:"SET_VIDEOS",
        payload:data.data
    })
}

export const checkValidity = (props)=>async (dispatch)=>{
    const data = await $host.post("/checkValidity",{
        user_string:props.user_string,
        pair_string:props.pair_string
    })
    return data.data;
    // dispatch({
    //     type:"SET_VIDEOS",
    //     payload:data.data
    // })
}