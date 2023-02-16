import { fetchApi } from "../../lib/fatchApi";

export const mealsActionTypes = {
  GET_MEALS_SUCCES: "GET_MEALS_SUCCES",
  GET_MEALS_STARTED: "GET_MEALS_STARTED",
  GET_MEALS_FAILED: "GET_MEALS_FAILED",
};

const initialState = {
  meals: [],
  isLoading: false,
  error: "",
};

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case mealsActionTypes.GET_MEALS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case mealsActionTypes.GET_MEALS_SUCCES:
      return {
        ...state,
        meals: action.payload,
        isLoading: false,
      };
    case mealsActionTypes.GET_MEALS_SUCCES:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getMeals = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: mealsActionTypes.GET_MEALS_STARTED });
      const response = await fetchApi("foods");
      dispatch({
        type: mealsActionTypes.GET_MEALS_SUCCES,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: mealsActionTypes.GET_MEALS_FAILED,
        payload: "Something went wrong",
      });
    }
  };
};
