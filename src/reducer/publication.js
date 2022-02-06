
const initialState = {
    results:[]
}


export const postReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case "GET/PUBLICATIONS":
            return {...state, ...payload}
   
        default:
            return state
    }
}




