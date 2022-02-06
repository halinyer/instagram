

const initialState = {
    id: null,
    name: "",
    status: null,
    species: "",
    origin: {},
    location: {},
    image: ""
  }


  export const profileReducer = (state = initialState, {type,payload}) =>  {
     switch (type) {
         case "GET/PROFILE":
             return {state, ...payload}
     
         default:
             return state
     }
  }