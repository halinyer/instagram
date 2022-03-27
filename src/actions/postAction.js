import axios from "axios"
const url = 'https://rickandmortyapi.com/api/character'

export const getPostAsync = () => async(dispatch) => {
    try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character`)
        const {results} = res.data
        console.log(results)
        dispatch({
            type:"GET/PUBLICATIONS",
            payload:{
                results
            }
        })
    } catch (error) {
        console.log(error)
    }
  }