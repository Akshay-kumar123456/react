// executiveActions.js
import axios from 'axios';
import { fetchTotalAirlinesSuccess, fetchTotalUsersSuccess } from '/React start/React1/airease/src/reducers/executiveReducer'; // Adjust the path

export const fetchTotalAirlines = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8081/executive/totalairlines');
    dispatch(fetchTotalAirlinesSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error fetching total airlines:', error);
  }
};

export const fetchTotalUsers = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8081/executive/totalusers');
    dispatch(fetchTotalUsersSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error fetching total users:', error);
  }
};
