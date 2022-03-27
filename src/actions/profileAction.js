import axios from "axios"
const url_profile = 'https://rickandmortyapi.com/api/character/?name='

export const getProfileAction = (profileName) => async(dispatch,getState) => {

     console.log(profileName)
    try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character?name=${profileName}`)
        const data = res.data.results
        console.log(data)
        dispatch({
            type:"GET/PROFILE",
            payload: data[0]
            
        })
    } catch (error) {
       console.log(error)
    }
}