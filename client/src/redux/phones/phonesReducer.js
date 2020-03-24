const initialState = {
  loading: false,
  phones: [],
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PHONES_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "GET_PHONES_SUCCESS":
      return {
        loading: false,
        phones: action.phones,
        error: ""
      };
    case "GET_PHONES_FAILURE":
      return {
        loading: false,
        phones: [],
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
