import axios from "axios"
const url_profile = 'https://rickandmortyapi.com/api/character/?name='

export const getProfileAction = (profileName) => async(dispatch,getState) => {


    try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/2`)
        const {id,name,image,status,origen,location} = res.data
        
        dispatch({
            type:"GET/PROFILE",
            payload: {
                id,
                name,
                image,
                status,
                origen,
                location
            }
        })
    } catch (error) {
       console.log(error)
    }
}