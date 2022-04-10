const initialState = {
    videos:[]
}

export const videoReducer = (state = initialState, action)=>{
    switch (action.type){
        case "SET_VIDEOS":
            return {
                ...state,
                videos: action.payload
            }
        default:
            return state
    }
}