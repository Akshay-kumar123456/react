const initialState = {
  totalAirlines: null,
  totalUsers: null,
};

const executiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TOTAL_AIRLINES_SUCCESS':
      return {
        ...state,
        totalAirlines: action.payload,
      };
    case 'FETCH_TOTAL_USERS_SUCCESS':
      return {
        ...state,
        totalUsers: action.payload,
      };
    default:
      return state;
  }
};

export const fetchTotalAirlinesSuccess = (payload) => ({
  type: 'FETCH_TOTAL_AIRLINES_SUCCESS',
  payload,
});

export const fetchTotalUsersSuccess = (payload) => ({
  type: 'FETCH_TOTAL_USERS_SUCCESS',
  payload,
});

export default executiveReducer;
