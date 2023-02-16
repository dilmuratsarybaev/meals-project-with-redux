import { fetchApi } from "../../lib/fatchApi";

export const basketActionTypes = {
  ADD_ITEM_SUCCESS: "ADD_ITEM_SUCCESS",
  GET_ITEM_SUCCESS: "GET_ITEM_SUCCESS",
};

const initialState = {
  items: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case basketActionTypes.GET_ITEM_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export const getBasket = () => {
  return async (dispatch) => {
    try {
      const { data } = await fetchApi("basket");
      dispatch({
        type: basketActionTypes.GET_ITEM_SUCCESS,
        payload: data.items,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToBasket = (newItem) => {
  return async (dispatch) => {
    try {
      await fetchApi(`foods/${newItem.id}/addToBasket`, {
        method: "POST",
        body: { amount: newItem.amount },
      });
      dispatch(getBasket());
    } catch (error) {
      throw new Error();
    }
  };
};

export const updatedBasketItem = ({ id, amount }) => {
  return async (dispatch) => {
    try {
      await fetchApi(`basketItem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });
      dispatch(getBasket());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteBasketItem = (id) => {
  return async (dispatch) => {
    try {
      await fetchApi(`basketItem/${id}/delete`, {
        method: "DELETE",
      });
      dispatch(getBasket());
    } catch (error) {
      console.log(error);
    }
  };
};
