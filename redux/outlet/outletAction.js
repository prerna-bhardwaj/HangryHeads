import {
  FETCH_OUTLET_DETAILS,
  FETCH_FOOD_ITEMS,
  ADD_FOOD_ITEM,
  DELETE_FOOD_ITEM,
  FETCH_ALL_FOOD_ITEMS,
  ADD_OUTLET_DETAILS
} from "./outletTypes";

import { useSelector } from "react-redux";

export const addOutletDetails = (data) =>{
  return {
    type: ADD_OUTLET_DETAILS,
    data
  }
}


export const fetchOutletDetails = (username) => {
  return {
    type: FETCH_OUTLET_DETAILS,
    username
  };
};

export const fetchAllFoodItems = (data) => {
  var itemList = []
  for(let i = 0; i < data.length; i++) {
    itemList.push(...data[i].items);
  }
  console.log(itemList);
  return {
    type: FETCH_ALL_FOOD_ITEMS,
    itemList
  };
};


export const fetchFoodItems = () => {
  return {
    type: FETCH_FOOD_ITEMS,
  };
};

export const addFoodItem = (item, username) => {
  return {
    type: ADD_FOOD_ITEM,
    item, username
  };
};


export const deleteFoodItem = () => {
  return {
    type: DELETE_FOOD_ITEM,
  };
};

