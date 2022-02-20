import {
  FETCH_OUTLET_DETAILS,
  FETCH_FOOD_ITEMS,
  ADD_FOOD_ITEM,
  DELETE_FOOD_ITEM,
  FETCH_ALL_FOOD_ITEMS,
  ADD_OUTLET_DETAILS
} from "./outletTypes";


const initialState = {
  outlets : [],
  itemList: [],
};

const outletReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OUTLET_DETAILS:
      return {
        ...state,
        outlets: action.data
      }
    case FETCH_OUTLET_DETAILS:
      return {
        ...state,
        itemList: state.outlets.filter((ele) => {
          console.log(ele.username === action.username);
          return ele.username === action.username
        })
      };
    case FETCH_ALL_FOOD_ITEMS:
      return {
        ...state,
        itemList: action.itemList
      };
    case FETCH_FOOD_ITEMS:
      return {
        ...state,
      };
    case ADD_FOOD_ITEM:
      return {
        ...state,
        outlets: state.outlets.map((ele) => {
          if(ele.username === action.username) {
            ele.items.push(action.item)
          }
          return ele;
        })
      };
    case DELETE_FOOD_ITEM:
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default outletReducer;
