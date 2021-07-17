import { SEARCH_FLIGHT,SEARCH_FLIGHT_ERROR } from "../constants/action-types";
import axios from 'axios';


  export  const getData = (params) => async (dispatch) => {
    try {
      
      const res = await axios.get('/list', {params: params});
      
      console.log(res);    
      dispatch({
        type: SEARCH_FLIGHT,
        payload: res.data,
      })
    } catch (error) {
      
      dispatch({
        type: SEARCH_FLIGHT_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      })
    }
  }